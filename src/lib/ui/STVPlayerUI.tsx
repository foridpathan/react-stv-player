/* eslint-disable @typescript-eslint/no-explicit-any */
import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { memo, ReactNode, useEffect } from "react";
import { MediaList } from "../components";
import { Button as ControlButton } from "../components/button";
import { ProgressBar } from "../components/Progress";
import { SettingsController } from "../components/SettingsController";
import { useSTVPlayerActivity } from "../core/STVPlayerActivity";
import { useSTVPlayerStore } from "../store/TVPlayerStore";
import { STVPlayerButtonProps, STVuiProps } from "../types/STVPlayerType";
import { Icons } from "./icons";
import { cn } from "./utils";

export const STVPlayerUI = memo((props: STVuiProps) => {
    const {
        title,
        subTitle,
        onLoopPress,
        onLikePress,
        onPreviousPress,
        onSkipBackPress,
        onSkipForwardPress,
        onSkipReleasePress,
        onNextPress,
        onMutePress,
        customButtons,
        hideControlsOnArrowUp,
    } = props;

    useSTVPlayerActivity()

    const { focusKey, ref, } = useFocusable({
        focusKey: "STVPlayer",
        trackChildren: true,
        saveLastFocusedChild: true,
    });

    const actions = useSTVPlayerStore((s) => s.actions);
    const activity = useSTVPlayerStore((s) => s.activity);
    const settingToggle = useSTVPlayerStore((s) => s.settingToggle);
    const likeToggle = useSTVPlayerStore((s) => s.likeToggle);
    const loop = useSTVPlayerStore((s) => s.loop);
    const mediaIndex = useSTVPlayerStore((s) => s.mediaIndex) || 0;
    const mediaCount = useSTVPlayerStore((s) => s.mediaCount);
    const muted = useSTVPlayerStore((s) => s.muted);
    const player = useSTVPlayerStore((s) => s.player);
    const playing = useSTVPlayerStore((s) => s.playing);

    const duration = useSTVPlayerStore((s) => s.duration);
    const skipIncrement = duration ? duration / 30 : 0;

    useEffect(() => actions.setTitle(props.title), [props.title]);
    useEffect(() => actions.setSubTitle(props.subTitle), [props.subTitle]);

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
        if (player) {
            if (player?.paused()) {
                player?.play();
                actions.setPlaying(true);
            }
            else {
                player?.pause();
                actions.setPlaying(false);
            }
        }
    }

    const handleBack = () => {
        console.log('handleBack')
    };

    const handleSettings = () => {
        actions.setSettingToggle(!settingToggle)
    };

    const toggleLoop = () => {
        console.log('toggleLoop')
        actions.setLoop(!loop);
        onLoopPress?.()
    };

    const toggleMuted = () => {
        actions.setMuted(!muted);
        onMutePress?.();
    };

    const handlePrevious = () => {
        if (mediaIndex && mediaIndex > 0) actions.setMediaIndex(mediaIndex - 1);
        onPreviousPress?.();
    };

    const handleSkipBack = () => {
        if (player) {
            const currentTime = player?.currentTime() || 0;
            player?.currentTime(currentTime - skipIncrement);
        }
        onSkipBackPress?.();
    };

    const handleSkipForward = () => {
        if (player) {
            const currentTime = player?.currentTime() || 0;
            player?.currentTime(currentTime + skipIncrement);
        }
        onSkipForwardPress?.();
    };

    const handleNext = () => {
        const mediaCount = useSTVPlayerStore.getState().mediaCount;

        if (mediaCount && mediaIndex < mediaCount - 1) actions.setMediaIndex(mediaIndex + 1);
        onNextPress?.();
    };

    const handleSkipRelease = () => {
        onSkipReleasePress?.();
    };
    const onLikePressHandler = () => {
        actions.setLikeToggle(!likeToggle);
        onLikePress?.();
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
            label: loop ? "Looping" : "Loop",
            onPress: toggleLoop,
            icon: Icons.Loop,
            isSelectedFill: false,
        },
        like: {
            action: "like",
            label: likeToggle ? "Liked" : "Like",
            onPress: onLikePressHandler,
            icon: likeToggle ? Icons.HeartFull : Icons.HeartOutline,
        },
        previous: {
            action: "previous",
            label: "Previous",
            onPress: handlePrevious,
            icon: Icons.Previews,
            disabled: mediaIndex === 0,
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
            icon: playing ? Icons.Pause : Icons.Play,
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
            disabled: mediaCount ? mediaIndex === mediaCount - 1 : false,
        },
        mute: {
            action: "mute",
            label: muted ? "Muted" : "Mute",
            onPress: toggleMuted,
            icon: !muted ? Icons.Volume : Icons.Mute,
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
                        const Icon: any = button.icon || buttonMap[button.action]?.icon
                        return (
                            <ControlButton
                                className={cn("relative w-16 h-16 flex group items-center justify-center flex-col",
                                    button?.className || "rounded-full border-transparent fill-white text-white stroke-white",
                                    button.disabled || buttonMap[button.action]?.disabled ? "opacity-60" : ""
                                )}
                                activeClass={cn(button?.selectedClass || "border border-white active")}
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
                                handleArrowPress={(dir) => {
                                    if (hideControlsOnArrowUp && dir === "up") {
                                        actions.setActivity(false);
                                    }
                                    return true;
                                }}
                            >
                                {Icon && <div className="w-10 h-10"><Icon /></div>}
                                {button.label || buttonMap[button.action]?.label && <small className="truncate text-lg absolute -bottom-8 opacity-0 group-hover:opacity-100 group-[.active]:opacity-100">{button.label || buttonMap[button.action]?.label}</small>}
                            </ControlButton>
                        );
                    }
                })}
            </>
        );
    };

    return (
        <div className={`absolute left-0 w-full h-full p-8 transition-all overflow-hidden bottom-0 ${activity ? "bg-black bg-opacity-60" : ""}`}>
            <div className={`w-full h-full flex flex-col justify-between gap-4 ${activity ? "opacity-100" : "opacity-0"}`}>
                <FocusContext.Provider value={focusKey}>
                    <div ref={ref} className={`flex-1 flex flex-col justify-between gap-4`}>
                        <div className="flex justify-between gap-4">
                            <div className="flex gap-3">{renderButtons('top', 'left')}</div>
                            <div className="flex gap-3">{renderButtons('top', 'right')}</div>
                        </div>
                        <div className="flex flex-col justify-between gap-4 flex-1">
                            <div className=""></div>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-3 ">{renderButtons('center', 'left')}</div>
                                <div className="flex gap-3">{renderButtons('center', 'center')}</div>
                                <div className="flex gap-3">{renderButtons('center', 'right')}</div>
                            </div>
                            <div className="">
                                {title && <div className="text-[2.2vw] text-white">{title}</div>}
                                {subTitle && <div className="text-2xl text-white">{subTitle}</div>}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex gap-3 ">{renderButtons('bottom', 'left')}</div>
                                <div className="flex gap-3">{renderButtons('bottom', 'center')}</div>
                                <div className="flex gap-3">{renderButtons('bottom', 'right')}</div>
                            </div>
                        </div>
                    </div>
                </FocusContext.Provider>
                <div className="flex flex-col">
                    <SectionRender>
                        <ProgressBar
                            handleSkipForward={handleSkipForward}
                            handleSkipBack={handleSkipBack}
                        />
                    </SectionRender>
                </div>
                {mediaCount && mediaCount > 0 && <div className="flex flex-col transition-all">
                    <MediaList />
                </div>}
            </div>
            {settingToggle && <SettingsController />}
        </div>
    );
});

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