/* eslint-disable @typescript-eslint/no-explicit-any */
import { init } from '@noriginmedia/norigin-spatial-navigation';
import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import { useSTVPlayerStore } from './store/TVPlayerStore';
import { STVPlayerProps } from './STVPlayerType';
import { STVPlayerUI } from './ui';
import { VideoJsPlayer } from './videojs';
import VideoPlayer from './VideoPlayer';


const STVPlayer = ({ videoJsOptions, ...props }: STVPlayerProps) => {
    if (!props.disableInitNav)
        init({
            debug: false,
            visualDebug: false,
            throttle: 100,
        });

    const { onReady, onPause, onPlay, onError, onEnded } =
        props;

    const playerRef = useRef<ReturnType<typeof videojs> | null>(null);
    const actions = useSTVPlayerStore((s) => s.actions);
    const loop = useSTVPlayerStore((s) => s.loop);
    const muted = useSTVPlayerStore((s) => s.muted);
    const playing = useSTVPlayerStore((s) => s.playing);
    const fullscreen = useSTVPlayerStore((s) => s.fullscreen);

    useEffect(() => {
        actions.setLight(props.light);
        actions.setProgress(0);
        actions.setDuration(0);
    }, [props.url, props.light]);

    useEffect(() => {
        actions.setPlaying(props.playing);
        if (props.playing) actions.setLight(false);
    }, [props.playing]);

    useEffect(() => actions.setTitle(props.title), [props.title]);
    useEffect(() => actions.setSubTitle(props.subTitle), [props.subTitle]);
    useEffect(() => {
        actions.setFullscreen(!props.disableFullscreen);
    }, [props.disableFullscreen]);

    useEffect(() => actions.setLoop(props.loop), [props.loop]);
    useEffect(() => actions.setMuted(props.muted), [props.muted]);
    useEffect(() => actions.setMediaCount(props.mediaCount), [props.mediaCount]);
    useEffect(() => {
        setTimeout(() => actions.setMediaIndex(props.mediaIndex));
    }, [props.mediaIndex]);

    const handlePause = () => {
        actions.setPlaying(false);
        onPause?.();
    };

    const handlePlay = () => {
        actions.setPlaying(true);
        actions.setLight(false);
        onPlay?.();
    };

    const handleReady = (player: VideoJsPlayer) => {
        actions.setPlayer(player);
        onReady?.(player);
    };

    const handleError = (
        error: any,
        data?: any,
        hlsInstance?: any,
        hlsGlobal?: any
    ) => {
        onError?.(error, data, hlsInstance, hlsGlobal);
    };

    const handleEnded = () => {
        actions.setPlaying(false);
        actions.setActivity(true);
        onEnded?.();
    };

    const handleProgress = (progress: number) => {
        actions.setProgress(progress);
    };

    const handleDuration = (duration: number) => {
        actions.setDuration(duration);
    };

    const handleAudioTracks = (audioTracks: videojs.AudioTrack) => {
        actions.setAudioTrack(audioTracks);
    };

    const handleQualityTracks = (qualityTracks: videojs.VideoTrack) => {
        actions.setVideoTrack(qualityTracks)
    };

    const handleSubtitleTracks = (textTracks: videojs.TextTrack) => {
        actions.setTextTrack(textTracks)
    };

    return (
        <>
            <VideoPlayer
                ref={playerRef}
                {...videoJsOptions.options}
                className={fullscreen ? 'vjs-stv' : 'vjs-big-play-centered'}
                loop={loop}
                muted={muted}
                playing={playing}
                onPlay={handlePlay}
                onReady={handleReady}
                onEnded={handleEnded}
                onPause={handlePause}
                onDuration={handleDuration}
                onProgress={handleProgress}
                onError={handleError}
                onAudioTracks={handleAudioTracks}
                onQualityTracks={handleQualityTracks}
                onSubtitleTracks={handleSubtitleTracks}
            />
            <STVPlayerUI />
        </>
    );
};

export default STVPlayer;