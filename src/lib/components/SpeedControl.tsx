/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useSTVPlayerStore } from "../store/TVPlayerStore";
import { Button } from "./button";

const SpeedControl = () => {
    const player: any = useSTVPlayerStore((s) => s.player);
    const [currentSpeed, setCurrentSpeed] = useState<number>(1);

    const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];

    const changeSpeed = (speed: number) => {
        if (player) {
            player.playbackRate(speed);
            setCurrentSpeed(speed);
        }
    };

    useEffect(() => {
        if (player) {
            player.playbackRate(currentSpeed);
        }
    }, [player, currentSpeed]);

    const renderSpeedOptions = () => {
        return speeds.map((speed) => (
            <Button
                key={speed}
                className="border border-white w-full p-4 bg-gray-200 rounded-lg"
                activeClass={"bg-blue-500 border-blue-500"}
                focusKey={"speed" + speed}
                handlePress={() => changeSpeed(speed)}
            >
                {speed === 1 ? "Normal" : `${speed}x`}
            </Button>
        ));
    };

    return (
        <div className="flex flex-col space-y-4">
            {renderSpeedOptions()}
        </div>
    );
};

export default SpeedControl;