/* eslint-disable @typescript-eslint/no-explicit-any */
import { FocusContext, KeyPressDetails, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { CSSProperties, ReactNode, useEffect, useState } from "react";
import { useSTVPlayer } from "../PlayerContext";
import { STVPlayerButtonProps } from "../PlayerType";
import { Icons } from "./icons";
import { cn } from "./utils";

type ControlButtonProps = {
    children?: React.ReactNode;
    handlePress?: (props: object, details: KeyPressDetails) => void | undefined;
    handleRelease?: () => void | undefined;
    handleArrowPress?: (dir: string) => boolean;
    focusKey: string;
    className?: string;
    activeClass?: string;
    style?: CSSProperties;
    disabled?: boolean;
};

const customButtons: STVPlayerButtonProps[] = [
    { action: "back", align: "left", position: "top" },
    { action: "settings", align: "right", position: "top" },
    { action: "loop", align: "left", position: "bottom" },
    { action: "like", align: "left", position: "bottom" },
    { action: "previous", align: "center", position: "bottom" },
    { action: "playpause", align: "center", position: "bottom" },
    { action: "next", align: "center", position: "bottom" },
    { action: "mute", align: "right", position: "bottom" },
    { action: "backward", align: "left", position: "center" },
    { action: "forward", align: "right", position: "center" },
];

const formatTime = (value: number) => {
    if (isNaN(value)) {
        return;
    }
    let totalSeconds = value;
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = String(Math.floor(totalSeconds / 60));
    let seconds = String(Math.floor(totalSeconds % 60));
    seconds = seconds.padStart(2, "0");
    if (hours > 0) {
        minutes = minutes.padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
    } else {
        return `${minutes}:${seconds}`;
    }
};


export const STVPlayerUI = () => {
    const { focusKey, ref } = useFocusable({
        // trackChildren: true,
        // saveLastFocusedChild: true,
    });
    const { playerRef } = useSTVPlayer()
    const [isPlaying, setIsPlaying] = useState(true);

    const currentButtons: STVPlayerButtonProps[] = (customButtons !== null &&
        customButtons) || [
            { action: "back", align: "left", position: "top" },
            { action: "settings", align: "right", position: "top" },
            { action: "loop", align: "left", position: "bottom" },
            { action: "like", align: "left", position: "bottom" },
            { action: "previous", align: "center", position: "bottom" },
            { action: "playpause", align: "center", position: "bottom" },
            { action: "next", align: "center", position: "bottom" },
            { action: "mute", align: "right", position: "bottom" },
        ];

    const togglePlay = () => {
        const player = playerRef.current;
        if (player) {
            if (player?.paused()) {
                player?.play();
                setIsPlaying(false)
            }
            else {
                player?.pause();
                setIsPlaying(true)
            }
        }
    }


    const handleBack = () => {
        console.log('handleBack')
    };
    const handleSettings = () => {
        console.log('handleSettings')
    };
    const toggleLoop = () => {
        console.log('toggleLoop')
        // actions.setLoop(!loop);
        // onLoopPress?.();
    };

    const toggleMuted = () => {
        console.log('toggleMuted')
        // actions.setMuted(!muted);
        // onMutePress?.();
    };

    const toggleFullscreen = () => {
        console.log('toggleFullscreen')
        // actions.setFullscreen(!fullscreen);
        // onFullscreenPress?.();
    };

    const handlePrevious = () => {
        console.log('handlePrevious')
        // mediaIndex && mediaIndex > 0 && actions.setMediaIndex(mediaIndex - 1);
        // onPreviousPress?.();
    };

    const handleSkipBack = () => {
        const player = playerRef.current;
        if (player) {
            const currentTime = player?.currentTime() || 0;
            player?.currentTime(currentTime - 5);
        }
    };

    const handleSkipForward = () => {
        const player = playerRef.current;
        if (player) {
            const currentTime = player?.currentTime() || 0;
            player?.currentTime(currentTime + 5);
        }
    };

    const handleNext = () => {
        console.log('handleNext')
        // mediaCount &&
        //     mediaIndex < mediaCount - 1 &&
        //     actions.setMediaIndex(mediaIndex + 1);
        // onNextPress?.();
    };

    const handleSkipRelease = () => {
        console.log('handleSkipRelease')
        // !playing && togglePlay();
        // onSkipReleasePress?.();
    };
    const onLikePress = () => {
        console.log('handleSkipRelease')
        // !playing && togglePlay();
        // onSkipReleasePress?.();
    };

    const buttonMap: Record<string, STVPlayerButtonProps> = {
        back: {
            action: "back",
            label: "Back",
            onPress: handleBack,
            icon: Icons.back,
            isSelectedFill: false,
        },
        settings: {
            action: "settings",
            label: "Settings",
            onPress: handleSettings,
            icon: Icons.Setting,
            isSelectedFill: false,
        },
        loop: {
            action: "loop",
            label: "Loop",
            onPress: toggleLoop,
            icon: Icons.Loop,
            isSelectedFill: false,
        },
        like: {
            action: "like",
            label: "Like",
            onPress: onLikePress,
            icon: Icons.HeartOutline,
        },
        previous: {
            action: "previous",
            label: "Previous",
            onPress: handlePrevious,
            icon: Icons.Previews,
            // disabled: mediaIndex === 0,
        },
        backward: {
            action: "backward",
            label: "Skip Backward",
            onPress: handleSkipBack,
            onRelease: handleSkipRelease,
            icon: Icons.SkipBackward,
        },
        playpause: {
            action: "playpause",
            label: "Play",
            onPress: togglePlay,
            icon: !isPlaying ? Icons.Pause : Icons.Play,
        },
        forward: {
            action: "forward",
            label: "Skip Forward",
            onPress: handleSkipForward,
            onRelease: handleSkipRelease,
            icon: Icons.SkipForward,
        },
        next: {
            action: "next",
            label: "Next",
            onPress: handleNext,
            icon: Icons.Next,
            // disabled: mediaCount ? mediaIndex === mediaCount - 1 : false,
        },
        mute: {
            action: "mute",
            label: "Mute",
            onPress: toggleMuted,
            icon: Icons.Volume,
        },
        custom: {
            action: "custom",
            label: "Custom",
        },
    };

    const renderButtons = (position: string, align: string) => {

        return (
            <>
                {currentButtons.map((button, index) => {
                    if ((button.align === align) && (button.position === position)) {
                        const Icon = button.icon || buttonMap[button.action]?.icon
                        return (
                            <ControlButton
                                className={cn("relative w-16 h-16 flex items-center justify-center flex-col rounded-full border-transparent fill-white text-white stroke-white", button?.className)}
                                activeClass={cn("border border-white", button?.selectedClass)}
                                focusKey={button.action}
                                handlePress={
                                    button.onPress ||
                                    buttonMap[button.action]?.onPress ||
                                    undefined
                                }
                                handleRelease={
                                    button.onRelease ||
                                    buttonMap[button.action]?.onRelease ||
                                    undefined
                                }
                                key={index}
                                disabled={button.disabled || buttonMap[button.action]?.disabled}
                            // handleArrowPress={(dir) => {
                            //     if (hideControlsOnArrowUp && dir === "up") {
                            //         actions.setActivity(false);
                            //     }
                            //     return true;
                            // }}
                            >
                                {Icon && <div className="w-10 h-10"><Icon /></div>}

                                <small className="absolute -bottom-6">{button.label || buttonMap[button.action]?.label}</small>
                            </ControlButton>
                        );
                    }
                })}
            </>
        );
    };

    return (
        <div className="absolute top-0 left-0 w-full h-full p-8">
            <FocusContext.Provider value={focusKey}>
                <div ref={ref} className="w-full h-full flex flex-col justify-between gap-4">
                    <SectionRender className="flex justify-between gap-4">
                        <div className="flex gap-3">{renderButtons('top', 'left')}</div>
                        <div className="flex gap-3">{renderButtons('top', 'right')}</div>
                    </SectionRender>
                    <SectionRender className="flex flex-col justify-between gap-4 flex-1">
                        <div className=""></div>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-3 ">{renderButtons('center', 'left')}</div>
                            <div className="flex gap-3">{renderButtons('center', 'center')}</div>
                            <div className="flex gap-3">{renderButtons('center', 'right')}</div>
                        </div>
                        <div className="text-3xl text-white">Content Title</div>
                    </SectionRender>
                    <div className="flex flex-col">
                        <SectionRender className="flex items-center justify-between gap-4">
                            <div className="flex gap-3 ">{renderButtons('bottom', 'left')}</div>
                            <div className="flex gap-3">{renderButtons('bottom', 'center')}</div>
                            <div className="flex gap-3">{renderButtons('bottom', 'right')}</div>
                        </SectionRender>
                        <SectionRender>
                            <ProgressBar
                                handleSkipForward={handleSkipForward}
                                handleSkipBack={handleSkipBack}
                            />
                        </SectionRender>
                    </div>
                </div>
            </FocusContext.Provider>
        </div>
    );
};

const SectionRender = ({ children, className }: { children: ReactNode, className?: string }) => {
    const { ref, focusKey } = useFocusable()

    return (
        <FocusContext.Provider value={focusKey}>
            <div ref={ref} className={cn(className)}>
                {children}
            </div>
        </FocusContext.Provider>
    )

}


function ProgressBar(props: any) {
    const { playerRef } = useSTVPlayer()
    const player = playerRef.current
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const handleTimeUpdate = () => {
        const player = playerRef.current
        if (player) {
            setDuration(player?.duration() || 0)
            setCurrentTime(player?.currentTime() || 0)
        }
    }

    player?.on("timeupdate", handleTimeUpdate);

    const { handleSkipForward, handleSkipBack } = props;
    const progressPercentage = (currentTime / duration) * 100;

    const handleSeekToPosition = (event: React.MouseEvent<HTMLDivElement>) => {
        const innerDiv = event.currentTarget;
        const clickX = event.nativeEvent.offsetX;
        const calculatedPercentage = clickX / innerDiv.offsetWidth;
        if (player) player.currentTime(calculatedPercentage * duration);
    };

    const disabled =
        !player || !duration || currentTime >= 86400 || duration >= 86400;

    return (
        <div
            className={cn("flex items-center pt-10 text-white",
                {
                    // hide: disabled,
                })
            }
        >
            <span data-testid="text-xl pr-2" className="time">
                {player && formatTime(currentTime)}
            </span>
            <span
                className="flex-1 h-2 bg-gray-300 bg-opacity-35 mx-3"
                onMouseDown={(e) => e.preventDefault()}
                onMouseUp={handleSeekToPosition}
            >
                <div className="relative h-2">
                    {!disabled && (
                        <ControlButton
                            style={{ left: `${progressPercentage}%` }}
                            className="w-6 h-6 bg-white rounded-full absolute -top-2"
                            focusKey="progress-bar-button"
                            key="progress-bar-button"
                            handleArrowPress={(dir) => {
                                if (dir === "up" || dir === "down") return true;
                                (dir === "left") ? handleSkipBack() : handleSkipForward();
                                return false;
                            }}
                        />
                    )}
                    <span
                        className="absolute h-full block left-0 bg-white"
                        style={{ width: `${progressPercentage}%` }}
                    ></span>
                </div>
            </span>

            <span data-testid="duration" className="time time--duration">
                {player && formatTime(duration)}
            </span>
        </div>
    );
}


function ControlButton(props: ControlButtonProps) {
    const {
        children,
        handlePress,
        handleRelease,
        handleArrowPress = () => true,
        focusKey,
        className,
        style,
        disabled,
        activeClass
    } = props;
    const { ref, focused, focusSelf } = useFocusable({
        onEnterPress: !disabled ? handlePress : undefined,
        onEnterRelease: !disabled ? handleRelease : undefined,
        onArrowPress: handleArrowPress,
        focusKey,
        extraProps: {
            focusKey
        }
    });
    useEffect(() => {
        if (focusKey === "playpause") focusSelf();
    }, [focusSelf, focusKey]);

    return (
        <button
            style={style}
            className={cn(className, focused && activeClass, { focused, disabled })}
            onMouseUp={handleRelease}
            onMouseEnter={focusSelf}
            ref={ref}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
