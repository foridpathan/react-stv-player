/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef, Ref, useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { VideoJsPlayer, VideoJsPlayerOptions } from "./videojs";

interface ExtendedPlayer extends VideoJsPlayerOptions {
    audioTracks?: () => videojs.AudioTrack;
    textTracks?: () => videojs.TextTrack;
    qualityLevels?: () => videojs.VideoTrack;
}

export interface VideoPlayerProps extends VideoJsPlayerOptions {
    className?: string;
    onReady?: (player: VideoJsPlayer) => void;
    onPlay?: () => void;
    onPause?: () => void;
    onEnded?: () => void;
    onError?: (error: any) => void;
    onDuration?: (duration: number) => void;
    onProgress?: (progress: number) => void;
    onAudioTracks?: (audioTracks: videojs.AudioTrack) => void;
    onQualityTracks?: (qualityTracks: videojs.VideoTrack) => void;
    onSubtitleTracks?: (textTracks: videojs.TextTrack) => void;
}

export const VideoPlayer = forwardRef<VideoJsPlayer, VideoPlayerProps>(
    (
        {
            onReady,
            onPlay,
            onPause,
            onEnded,
            onError,
            onDuration,
            onProgress,
            onAudioTracks,
            onQualityTracks,
            onSubtitleTracks,
            className,
            ...options
        },
        ref: Ref<VideoJsPlayer>
    ) => {
        const videoRef = useRef<HTMLDivElement | null>(null);
        const playerRef = useRef<VideoJsPlayer | null>(null);

        useEffect(() => {
            if (!playerRef.current && videoRef.current) {
                const videoElement = document.createElement("video-js");
                if (className) {
                    className.split(" ").forEach((cls) => {
                        if (cls.trim()) {
                            videoElement.classList.add(cls.trim());
                        }
                    });
                }
                videoRef.current.appendChild(videoElement);

                const player = (playerRef.current = videojs(
                    videoElement,
                    options,
                    function () {
                        onReady?.(this as unknown as VideoJsPlayer);

                        const extendedPlayer = this as unknown as ExtendedPlayer;

                        if (extendedPlayer.audioTracks) onAudioTracks?.(extendedPlayer.audioTracks());
                        if (extendedPlayer.textTracks) onSubtitleTracks?.(extendedPlayer.textTracks());
                        if (extendedPlayer.qualityLevels) onQualityTracks?.(extendedPlayer.qualityLevels());
                    }
                ) as unknown as VideoJsPlayer);


                if (ref) {
                    if (typeof ref === "function") {
                        ref(player);
                    } else {
                        (ref as React.MutableRefObject<VideoJsPlayer>).current = player;
                    }
                }
            } else if (playerRef.current) {
                const player = playerRef.current;

                // Update player options dynamically
                player.autoplay(options.autoplay ?? false);
                if (options.src) {
                    player.src([{ src: options.src, type: "video/mp4" }]);
                } else if (options.sources) {
                    player.src(options.sources);
                }
            }

            return () => {
                // Dispose player on unmount
                if (playerRef.current) {
                    playerRef.current.dispose();
                    playerRef.current = null;
                }
            };
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [ref, className, options.src, options.sources]);

        useEffect(() => {
            if (playerRef.current) {
                playerRef.current.loop(options.loop ?? false);
            }
        }, [options.loop])
        useEffect(() => {
            if (playerRef.current) {
                playerRef.current.muted(options.muted ?? false);
            }
        }, [options.muted])

        useEffect(() => {
            if (playerRef.current) {
                const player = playerRef.current as unknown as VideoJsPlayer;
                if (onPlay) player.on("play", onPlay);
                if (onPause) player.on("pause", onPause);
                if (onEnded) player.on("ended", onEnded);
                player.on("error", () => onError?.(player.error()));
                player.on("durationchange", () => onDuration?.(player.duration()));
                player.on("timeupdate", () => onProgress?.(player.currentTime()));

            }
        }, [onPlay, onPause, onEnded, onError, onDuration, onProgress, playerRef]);

        return (
            <div data-vjs-player>
                <div ref={videoRef} />
            </div>
        );
    }
);

VideoPlayer.displayName = "VideoPlayer";

export default VideoPlayer;