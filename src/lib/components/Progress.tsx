import { useSTVPlayerStore } from "../store/TVPlayerStore";
import { STVPlayerButtonProps } from "../types";
import { cn, formatTime } from "../ui/utils";
import { Button } from "./button";

type ProgressBarType = {
    handleSkipForward: () => void
    handleSkipBack: () => void
    button?: STVPlayerButtonProps
}

export function ProgressBar({ button, ...props }: ProgressBarType) {
    const duration = useSTVPlayerStore((s) => s.duration) || 0;
    const progress = useSTVPlayerStore((s) => s.progress);
    const currentTime = progress?.playedSeconds || 0
    const player = useSTVPlayerStore((s) => s.player);

    const { handleSkipForward, handleSkipBack } = props;
    const progressPercentage = (currentTime / duration) * 100;

    const handleSeekToPosition = (event: React.MouseEvent<HTMLDivElement>) => {
        const innerDiv = event.currentTarget;
        const clickX = event.nativeEvent.offsetX;
        const calculatedPercentage = clickX / innerDiv.offsetWidth;
        if (player) player.currentTime(calculatedPercentage * duration);
    };

    const disabled = !player || !duration;

    // Helper function to determine layout style
    const timerStyle = button?.action === "progressBar" ? button.timerStyle || "leftRight" : "leftRight";
    const isHorizontal = timerStyle === "leftRight";
    const isTop = timerStyle === "leftTop" || timerStyle === "rightTop";
    const isBottom = timerStyle === "leftBottom" || timerStyle === "rightBottom";

    return (
        <div
            className={cn("flex pt-6 text-white transition-all delay-150 flex-col",
                disabled && "hidden",
                isHorizontal ? "flex-row items-center space-x-3" : "space-y-3"
            )}
        >
            {isHorizontal ?
                <span data-testid="text-xl pr-2" className="time">
                    {player && formatTime(currentTime)}
                </span>
                : isTop ?
                    <div className={cn("flex flex-1",
                        (timerStyle === "leftTop") ? "justify-start" : "justify-end",
                    )}>
                        <span className="time time--duration">
                            {player && formatTime(currentTime)} / {player && formatTime(duration)}
                        </span>
                    </div>
                    : null
            }
            <span
                className={cn("flex-1 h-2 bg-gray-300 bg-opacity-35 cursor-pointer transition-all", button?.action === "progressBar" && button?.progressClassName)}
                onMouseDown={(e) => e.preventDefault()}
                onMouseUp={handleSeekToPosition}
            >
                <div className="relative h-2 transition-all">
                    {!disabled && (
                        <Button
                            style={{ left: `${progressPercentage}%` }}
                            className={cn("w-6 h-6 bg-white rounded-full absolute -top-2 transition-all", button?.className)}
                            activeClass={cn("w-10 h-10 -top-4 border-double border-8 border-gray-600", button?.selectedClass)}
                            focusKey="progress-bar-button"
                            key="progress-bar-button"
                            handleArrowPress={(dir) => {
                                if (dir === "up" || dir === "down") return true;
                                if (dir === "left") handleSkipBack()
                                else handleSkipForward();
                                return false;
                            }}
                        />
                    )}
                    <span
                        className={cn("absolute transition-all h-full block left-0 bg-white", button?.action === "progressBar" && button?.progressSelectedClass)}
                        style={{ width: `${progressPercentage}%` }}
                    ></span>
                </div>
            </span>

            {isHorizontal ?
                <span className="time time--duration">
                    {player && formatTime(duration)}
                </span>
                : isBottom ? <div className={cn("flex flex-1",
                    (timerStyle === "leftBottom") ? "justify-start" : "justify-end",
                )}>
                    <span className="time time--duration">
                        {player && formatTime(currentTime)} / {player && formatTime(duration)}
                    </span>
                </div>
                    : null
            }
        </div>
    );
}
