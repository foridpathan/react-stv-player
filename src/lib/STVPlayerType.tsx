/* eslint-disable @typescript-eslint/no-explicit-any */

import { CSSProperties, ReactElement, ReactNode } from "react";
import videojs from 'video.js';
import { VideoJsPlayer, VideoJsPlayerOptions } from "./videojs";

export type MediaType = {
    url: string | string[] | MediaStream;
    title?: string;
    subTitle?: string;
    preview?: string | boolean;
};

export type STVPlayerButtonAction =
    | "custom"
    | "back"
    | "settings"
    | "fullscreen"
    | "like"
    | "loop"
    | "mute"
    | "next"
    | "playpause"
    | "previous"
    | "forward"
    | "backward";

export type STVPlayerButtonPosition = "top" | "center" | "bottom";
export type TVPlayerButtonAlign = "left" | "center" | "right";

export type STVPlayerButtonProps = {
    action: STVPlayerButtonAction;
    position?: STVPlayerButtonPosition;
    align?: TVPlayerButtonAlign;
    label?: string;
    icon?: ReactNode | (() => ReactElement);
    onPress?: () => void;
    onRelease?: () => void;
    isSelectedFill?: boolean;
    className?: string;
    style?: CSSProperties;
    selectedClass?: string;
    disabled?: boolean;
};

export interface STVuiProps {
    title?: string | null
    subTitle?: string | null
    customButtons?: STVPlayerButtonProps[];
    hideControlsOnArrowUp?: boolean;
    onLoopPress?: () => void;
    onLikePress?: () => void;
    onPreviousPress?: () => void;
    onSkipBackPress?: () => void;
    onSkipForwardPress?: () => void;
    onSkipReleasePress?: () => void;
    onNextPress?: () => void;
    onMutePress?: () => void;
    onReady?: (player: VideoJsPlayer | null) => void;
    onPause?: () => void;
    onPlay?: () => void;
    onError?: (e: any, d: any, i: any, g: any) => void;
    onEnded?: () => void;

}

export interface STVPlayerProps extends STVuiProps {
    actions?: any
    options?: VideoJsPlayerOptions;
    mediaList?: MediaType[]
    activity?: boolean;
    customToggle?: boolean;
    loop?: boolean;
    muted?: boolean;
    playing?: boolean;
    duration?: number;
    fullscreen?: boolean;
    likeToggle?: boolean;
    settingToggle?: boolean;
    mediaIndex?: number;
    mediaCount?: number;
    currentTrack?: "Quality" | "Language" | "Captions" | "Speed" | null;
    player?: ReturnType<typeof videojs> | null;
    subTitle?: string | null;
    title?: string | null;
    withTopCover?: boolean;
    disableFullscreen?: boolean;
    disableInitNav?: boolean;
    audioTrack?: videojs.AudioTrack | any;
    videoTrack?: videojs.VideoTrack | any;
    textTrack?: videojs.TextTrack | any;
    progress?: {
        playedSeconds: number,
    },
}
