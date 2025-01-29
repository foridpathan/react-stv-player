/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { init } from '@noriginmedia/norigin-spatial-navigation';
import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';
import { useSTVPlayerStore } from '../store/TVPlayerStore';
import { STVPlayerProps } from '../types/STVPlayerType';
import { STVPlayerUI } from '../ui';
import VideoPlayer from './VideoPlayer';


export const ReactSTVPlayer = (props: STVPlayerProps) => {
    const {
        onReady,
        onPause,
        onPlay,
        onError,
        onEnded,
        options,
        disableInitNav,
        mediaList,
        customButtons,
        onLoopPress,
        onLikePress,
        onPreviousPress,
        onSkipBackPress,
        onSkipForwardPress,
        onSkipReleasePress,
        onNextPress,
        onMutePress, } = props;

    if (!disableInitNav)
        init({
            debug: false,
            visualDebug: false,
            throttle: 100,
        });

    const playerRef = useRef<Player | null>(null);
    const actions = useSTVPlayerStore((s) => s.actions);
    const loop = useSTVPlayerStore((s) => s.loop);
    const muted = useSTVPlayerStore((s) => s.muted);
    const mediaIndex = useSTVPlayerStore((s) => s.mediaIndex) || 0;
    const fullscreen = useSTVPlayerStore((s) => s.fullscreen);

    useEffect(() => {
        actions.setProgress(0);
        actions.setDuration(0);
    }, []);

    useEffect(() => {
        if (mediaList && mediaList?.length > 0) {
            actions.setMediaList(mediaList);
        }
    }, [mediaList]);

    useEffect(() => actions.setPlaying(props.playing), [props.playing]);
    useEffect(() => actions.setTitle(props.title), [props.title]);
    useEffect(() => actions.setSubTitle(props.subTitle), [props.subTitle]);
    useEffect(() => actions.setMediaTitle(props.mediaTitle), [props.mediaTitle]);
    useEffect(() => actions.setFullscreen(!props.disableFullscreen), [props.disableFullscreen]);
    useEffect(() => actions.setLoop(props.loop), [props.loop]);
    useEffect(() => actions.setMuted(props.muted), [props.muted]);
    useEffect(() => actions.setMediaCount(props.mediaCount), [props.mediaCount]);
    useEffect(() => { setTimeout(() => actions.setMediaIndex(props.mediaIndex)) }, [props.mediaIndex]);
    useEffect(() => { setTimeout(() => actions.setMouseHover(props.disableMouseHover)) }, [props.disableMouseHover]);

    const handlePause = () => {
        actions.setPlaying(false);
        onPause?.();
    };

    const handlePlay = () => {
        actions.setPlaying(true);
        onPlay?.();
    };

    const handleReady = (player: Player) => {
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

    const handleAudioTracks = (audioTracks: any) => {
        actions.setAudioTrack(audioTracks);
    };

    const handleQualityTracks = (qualityTracks: any) => {
        actions.setVideoTrack(qualityTracks)
    };

    const handleSubtitleTracks = (textTracks: videojs.TextTrack) => {
        actions.setTextTrack(textTracks)
    };

    const sources: any = options?.sources || [];
    const source = mediaList
        ? [{ ...(sources.length > 0 ? sources[0] : {}), src: mediaList[mediaIndex]?.url }]
        : sources;

    return (
        <>
            <VideoPlayer
                ref={playerRef}
                className={fullscreen ? 'vjs-stv' : 'vjs-big-play-centered'}
                {...options}
                loop={loop}
                muted={muted}
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
                sources={source}
            />
            {!options?.controls &&
                <STVPlayerUI
                    title={mediaList ? mediaList[mediaIndex]?.title : props.title || ""}
                    subTitle={mediaList ? mediaList[mediaIndex]?.subTitle : props.subTitle || ""}
                    customButtons={customButtons}
                    onLoopPress={onLoopPress}
                    onLikePress={onLikePress}
                    onPreviousPress={onPreviousPress}
                    onSkipBackPress={onSkipBackPress}
                    onSkipForwardPress={onSkipForwardPress}
                    onSkipReleasePress={onSkipReleasePress}
                    onNextPress={onNextPress}
                    onMutePress={onMutePress}
                />}
        </>
    );
};