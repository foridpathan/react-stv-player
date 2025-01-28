import { FocusableComponentLayout, FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useCallback } from "react";
import { useSTVPlayerStore } from "../store";
import { cn } from "../ui";
import { Button } from "./button";

export const MediaList = () => {
    const { ref, focusKey, hasFocusedChild } = useFocusable({
        trackChildren: true
    })
    const actions = useSTVPlayerStore((s) => s.actions);
    const mediaTitle = useSTVPlayerStore((s) => s.mediaTitle);
    const mediaList = useSTVPlayerStore((s) => s.mediaList);

    const handleFocus = useCallback((layout: FocusableComponentLayout) => {
        layout.node.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
    }, []);

    const handleClick = useCallback((idx: number) => {
        actions.setMediaIndex(idx);
    }, [actions]);

    return (
        <FocusContext.Provider value={focusKey}>
            <div className={cn("flex flex-col space-y-4", hasFocusedChild ? "mb-0" : "-mb-32")}>
                <div className="text-2xl text-white">{mediaTitle || "Media List"}</div>
                <div ref={ref} className="overflow-auto flex flex-wrap">
                    <div className="flex space-x-4">
                        {mediaList &&
                            mediaList.length > 0 &&
                            mediaList.map((media, inx) => (
                                <Button
                                    key={`list-${media.title}-${inx}`}
                                    focusKey={"list" + media.title + inx}
                                    className="w-72 rounded-lg overflow-hidden"
                                    activeClass="border border-white"
                                    onFocus={handleFocus}
                                    handlePress={() => handleClick(inx)}
                                >
                                    <div
                                        className="relative w-full"
                                        style={{
                                            paddingTop: "56.25%",
                                            position: "relative",
                                        }}
                                    >
                                        <img
                                            className="absolute top-0 left-0 w-full h-full object-cover"
                                            src={media.preview || ""}
                                            alt={media.title || "Media"}
                                        />
                                    </div>
                                </Button>
                            ))}
                    </div>
                </div>
            </div>
        </FocusContext.Provider>
    );
};