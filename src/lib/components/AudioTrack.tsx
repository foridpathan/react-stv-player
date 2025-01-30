/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSTVPlayerStore } from "../store/TVPlayerStore";
import { Button } from "./button";

const AudioTrack = () => {
    const audioTrack: any = useSTVPlayerStore((s) => s.audioTrack);

    const changeTrack = (trackIndex: number) => {
        if (audioTrack) {
            const track = audioTrack[trackIndex];
            if (track) {
                Array.from(audioTrack).forEach((audio: any) => {
                    audio.enabled = audio.label === track.label;
                });

            }
        }
    };

    const renderTrack = () => {
        const trackList = [];
        for (let index = 0; index < audioTrack.length; index++) {
            const element = audioTrack[index];
            trackList.push(
                <Button
                    key={index}
                    className="border border-white w-full p-4 bg-gray-200 rounded-lg"
                    focusKey={"audioTrack" + element.label}
                    activeClass="bg-blue-500 border-blue-500"
                    handlePress={() => changeTrack(index)}
                >
                    {element.label}
                </Button>
            );
        }
        return <>{trackList}</>;
    };

    return (
        <div className="flex flex-col space-y-4">
            {renderTrack()}
        </div>
    );
};

export default AudioTrack;