/* eslint-disable @typescript-eslint/no-explicit-any */

import { CSSProperties, MutableRefObject, ReactElement, ReactNode } from "react";
import videojs from 'video.js';

// Define the type for Video.js player options
export interface VideoJsPlayerOptions {
    autoplay?: boolean;
    controls?: boolean;
    sources?: {
        src: string;
        type: string;
    }[];
    [key: string]: any; // Allow additional options for flexibility
}

// Define the type for the onReady callback
export interface VideoJsProps {
    options: VideoJsPlayerOptions;
    onReady?: (player: ReturnType<typeof videojs>) => void;
}

// Define the props interface for the Player component
export interface VideoPlayerPropsInterface {
    videoJsOptions: VideoJsProps;
    children?: React.ReactNode;
}

export interface ReactStvPlayerContextType {
    playerRef: MutableRefObject<ReturnType<typeof videojs> | null>
    videoRef: MutableRefObject<HTMLDivElement | null>
    options: VideoJsPlayerOptions
}


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


export interface STVPlayerProps extends VideoJsPlayerOptions {
    activity?: boolean;
    customButtons?: STVPlayerButtonProps[];
    customToggle?: boolean;
    likeToggle?: boolean;
    settingToggle?: boolean;
    mediaIndex?: number;
    mediaCount?: number;
    currentTrack?: "Quality" | "Language" | "Captions" | "Speed" | null;
    player?: ReturnType<typeof videojs> | null;
    subTitle?: string | null;
    title?: string | null;
    withTopCover?: boolean;
    hideControlsOnArrowUp?: boolean;
    disableFullscreen?: boolean;
    disableInitNav?: boolean;
    audioTrack?: videojs.AudioTrack | any;
    videoTrack?: videojs.VideoTrack | any;
    textTrack?: videojs.TextTrack | any;
}
