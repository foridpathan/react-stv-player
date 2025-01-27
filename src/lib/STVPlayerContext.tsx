/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useEffect, useMemo, useRef } from "react";
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { ReactStvPlayerContextType, VideoPlayerPropsInterface } from "./STVPlayerType";

const CreatePlayerContext = createContext<ReactStvPlayerContextType | null>(null)

export const STVPlayerContext = ({ videoJsOptions, children }: VideoPlayerPropsInterface) => {
    const videoRef = useRef<HTMLDivElement | null>(null);
    const playerRef = useRef<ReturnType<typeof videojs> | null>(null);
    const { options, onReady } = videoJsOptions;

    useEffect(() => {
        if (!playerRef.current) {
            const videoElement = document.createElement("video-js");

            videoElement.classList.add('vjs-stv');
            if (videoRef.current) videoRef.current.appendChild(videoElement);

            const player = playerRef.current = videojs(videoElement, options, () => {
                videojs.log('player is ready');
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                onReady && onReady(player);
            });
        } else {
            const player = playerRef.current;

            player.autoplay(options.autoplay);
            player.src(options.sources);
        }
    }, [onReady, options, videoRef]);

    // Dispose the Video.js player when the functional component unmounts
    useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);

    const defaultValue = useMemo(
        () => ({
            playerRef,
            videoRef,
            options,
        }),
        [options]
    );

    return (
        <CreatePlayerContext.Provider value={defaultValue}>
            <div data-vjs-player className="relative h-screen w-screen">
                <div ref={videoRef} />
                {children}
            </div>
        </CreatePlayerContext.Provider>
    );
};

export function useSTVPlayer() {
    const context = useContext(CreatePlayerContext);

    if (!context) {
        throw new Error(
            `useSTVPlayer hook must be used within a CreatePlayerContext`
        );
    }

    return context;
}
