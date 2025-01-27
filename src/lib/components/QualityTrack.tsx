/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useSTVPlayerStore } from "../store/TVPlayerStore";
import { Button } from "./button";

const QualityTrack = () => {
    const videoTrack: any = useSTVPlayerStore((s) => s.videoTrack);

    const changeTrack = (trackIndex: number) => {
        if (videoTrack) {
            const track = videoTrack[trackIndex];
            if (track) {

                Array.from(videoTrack).forEach((video: any) => {
                    video.enabled = video.id === track.id;
                });
                
            }
        }
    };

    useEffect(() => {
        if (videoTrack?.length > 0) {
            changeTrack(0);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [videoTrack]);


    const renderTrack = () => {
        const sortedTracks = [...videoTrack].sort((a, b) => (b?.height ?? 0) - (a?.height ?? 0));

        const trackList = [];
        for (let index = 0; index < sortedTracks.length; index++) {
            const element = sortedTracks[index];
            if (element?.height)
                trackList.push(
                    <Button
                        key={index}
                        className="border border-white w-full p-4 bg-gray-200 rounded-lg"
                        focusKey={"videoTrack" + index}
                        activeClass="bg-blue-500 border-blue-500"
                        handlePress={() => changeTrack(index)}
                    >
                        {element?.height} p
                    </Button>
                );
        }
        return <>{trackList}</>;
    };

    return (
        <div className="flex flex-col space-y-4">
            {videoTrack && videoTrack.length > 0 ? renderTrack() : <p>No quality tracks available</p>}
        </div>
    );
};

export default QualityTrack;