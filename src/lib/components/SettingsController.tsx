import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useEffect } from "react";
import { useSTVPlayerStore } from "../store/TVPlayerStore";
import { cn } from "../ui/utils";
import AudioTrack from "./AudioTrack";
import { Button } from "./button";
import QualityTrack from "./QualityTrack";
import SpeedControl from "./SpeedControl";
import TextTrack from "./TextTrack";

export const SettingsController = () => {
    const { ref, focusKey, focusSelf } = useFocusable({
        trackChildren: false,
        autoRestoreFocus: true,
        saveLastFocusedChild: false,

    })
    const actions = useSTVPlayerStore((s) => s.actions);
    const currentTrack = useSTVPlayerStore((s) => s.currentTrack);
    const audioTrack = useSTVPlayerStore((s) => s.audioTrack);
    const videoTrack = useSTVPlayerStore((s) => s.videoTrack);
    const textTrack = useSTVPlayerStore((s) => s.textTrack);

    useEffect(() => {
        focusSelf()
    }, [focusSelf])

    return (
        <FocusContext.Provider value={focusKey}>
            <div className={cn("absolute h-screen w-screen top-0 z-20 flex justify-end items-end right-0 bg-black bg-opacity-30")} ref={ref}>
                <div className="w-96 h-full bg-black p-10">
                    <div className="text-white text-2xl pb-5">{currentTrack || "Settings"}</div>
                    {!currentTrack &&
                        <div className="flex flex-col gap-4">
                            {
                                videoTrack.length > 0 &&
                                <Button
                                    className="border border-white w-full p-4 bg-gray-200 rounded-lg"
                                    focusKey="qualityTrack"
                                    activeClass="bg-blue-500 border-blue-500"
                                    handlePress={() => {
                                        actions.setCurrentTrack('Quality');
                                    }}
                                >
                                    Quality
                                </Button>
                            }
                            {
                                audioTrack.length > 0 &&
                                <Button
                                    className="border border-white w-full p-4 bg-gray-200 rounded-lg"
                                    focusKey="audioTrack"
                                    activeClass="bg-blue-500 border-blue-500"
                                    handlePress={() => {
                                        actions.setCurrentTrack('Language');
                                    }}
                                >
                                    Language
                                </Button>
                            }
                            {
                                textTrack.length > 0 &&
                                <Button
                                    className="border border-white w-full p-4 bg-gray-200 rounded-lg"
                                    focusKey="captionsTrack"
                                    activeClass="bg-blue-500 border-blue-500"
                                    handlePress={() => {
                                        actions.setCurrentTrack('Captions');
                                    }}
                                >
                                    Captions
                                </Button>
                            }
                            <Button
                                className="border border-white w-full p-4 bg-gray-200 rounded-lg"
                                focusKey="speed"
                                activeClass="bg-blue-500 border-blue-500"
                                handlePress={() => {
                                    actions.setCurrentTrack('Speed');
                                }}
                            >
                                Speed
                            </Button>
                        </div>
                    }
                    {currentTrack === "Quality" && <QualityTrack />}
                    {currentTrack === "Language" && <AudioTrack />}
                    {currentTrack === "Captions" && <TextTrack />}
                    {currentTrack === "Speed" && <SpeedControl />}
                </div>
            </div>
        </FocusContext.Provider>
    )
}