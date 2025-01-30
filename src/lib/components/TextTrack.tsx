/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSTVPlayerStore } from "../store/TVPlayerStore";
import { Button } from "./button";

const TextTrack = () => {
    const textTrack: any = useSTVPlayerStore((s) => s.textTrack);

    const changeTrack = (trackIndex: number) => {
        if (textTrack) {
            const track = textTrack[trackIndex];
            if (track) {
                Array.from(textTrack).forEach((audio: any) => {
                    audio.mode = audio.label === track.label ? 'showing' : 'disabled';
                });
            }
        }
    };

    const renderTrack = () => {
        const trackList = [];
        for (let index = 0; index < textTrack.length; index++) {
            const element = textTrack[index];
            if (element.kind != "metadata") {
                trackList.push(
                    <Button
                        key={index}
                        className="border border-white w-full p-4 bg-gray-200 rounded-lg"
                        focusKey={"textTrack" + element.label}
                        activeClass="bg-blue-500 border-blue-500"
                        handlePress={() => changeTrack(index)}
                    >
                        {element.label}
                    </Button>
                );
            }
        }
        return <>{trackList}</>;
    };

    return (
        <div className="flex flex-col space-y-4">
            {renderTrack()}
        </div>
    );
};

export default TextTrack;