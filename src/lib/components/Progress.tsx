import { useSTVPlayerStore } from "../store/TVPlayerStore";
import { cn, formatTime } from "../ui/utils";
import { Button } from "./button";

type ProgressBarType = {
    handleSkipForward: () => void
    handleSkipBack: () => void
}

export function ProgressBar(props: ProgressBarType) {
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

    const disabled =
        !player || !duration || currentTime >= 86400 || duration >= 86400;


    return (
        <div
            className={cn("flex items-center pt-6 text-white transition-all delay-150",
                disabled && "hidden",
            )
            }
        >
            <span data-testid="text-xl pr-2" className="time">
                {player && formatTime(currentTime)}
            </span>
            <span
                className="flex-1 h-2 bg-gray-300 bg-opacity-35 mx-3 cursor-pointer transition-all"
                onMouseDown={(e) => e.preventDefault()}
                onMouseUp={handleSeekToPosition}
            >
                <div className="relative h-2 transition-all">
                    {!disabled && (
                        <Button
                            style={{ left: `${progressPercentage}%` }}
                            className="w-6 h-6 bg-white rounded-full absolute -top-2 transition-all"
                            activeClass="w-10 h-10 -top-4 border-double border-8 border-gray-600"
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
                        className="absolute transition-all h-full block left-0 bg-white"
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
