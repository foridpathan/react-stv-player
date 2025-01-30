/* eslint-disable @typescript-eslint/no-explicit-any */

import { CSSProperties, ReactElement, ReactNode } from "react";
import videojs from "video.js";
import Player from "video.js/dist/types/player";

export interface VideoJsPlayerOptions {
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  preload?: "auto" | "metadata" | "none";
  fluid?: boolean;
  height?: number;
  width?: number;
  playbackRates?: number[];
  responsive?: boolean;
  aspectRatio?: string;
  techOrder?: string[];
  sources?: VideoJsSource[];
  src?: string;
  plugins?: {
    [key: string]: any;
  };
  tracks?: VideoJsTrack[];
  poster?: string;
  liveui?: boolean;
  notSupportedMessage?: string;
  userActions?: UserActions;
  inactivityTimeout?: number;
  language?: string;
  languages?: Record<string, LanguageTranslations>;
  controlBar?: ControlBarOptions;
  html5?: Html5Options;
}

export interface VideoJsSource {
  src: string;
  type?: string;
  withCredentials?: boolean;
}

export interface VideoJsTrack {
  kind: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
  label: string;
  src: string;
  srclang?: string;
  default?: boolean;
}

export interface LanguageTranslations {
  [key: string]: string;
}

export interface ControlBarOptions {
  volumePanel?: {
    inline?: boolean;
  };
  fullscreenToggle?: boolean;
  playToggle?: boolean;
}

export interface Html5Options {
  nativeTextTracks?: boolean;
  nativeAudioTracks?: boolean;
  nativeVideoTracks?: boolean;
}

export interface UserActions {
  hotkeys?: boolean | HotkeysOptions;
  doubleClick?: boolean;
}

export interface HotkeysOptions {
  volumeStep?: number;
  seekStep?: number;
  enableModifiersForNumbers?: boolean;
}

export type MediaType = {
  url: string | string[] | MediaStream;
  title?: string;
  subTitle?: string;
  preview?: string;
};

export type STVPlayerButtonAction =
  | "title"
  | "progressBar"
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
export type TVPlayerButtonAlign =
  | "left"
  | "center"
  | "right"
  | "top"
  | "bottom";

interface BaseSTVPlayerButtonProps {
  position?: STVPlayerButtonPosition;
  align?: TVPlayerButtonAlign;
  label?: string;
  icon?: ReactNode | (() => ReactElement);
  onPress?: () => void;
  onRelease?: () => void;
  isSelectedFill?: boolean;
  disabled?: boolean;
  style?: CSSProperties;
  className?: string;
  selectedClass?: string;
}

interface ProgressBarProps extends BaseSTVPlayerButtonProps {
  action: "progressBar";
  progressClassName?: string;
  progressSelectedClass?: string;
  timerStyle?:
    | "leftRight"
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom";
}

interface GeneralButtonProps extends BaseSTVPlayerButtonProps {
  action: Exclude<STVPlayerButtonAction, "progressBar">;
}

export type STVPlayerButtonProps = ProgressBarProps | GeneralButtonProps;

export interface STVuiProps {
  title?: string | null;
  subTitle?: string | null;
  mediaTitle?: string | null;
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
  onReady?: (player: Player | null) => void;
  onPause?: () => void;
  onPlay?: () => void;
  onError?: (e: any, d: any, i: any, g: any) => void;
  onEnded?: () => void;
}

export interface STVPlayerProps extends STVuiProps {
  subTitle?: string | null;
  title?: string | null;
  mediaTitle?: string | null;
  actions?: any;
  options?: VideoJsPlayerOptions;
  mediaList?: MediaType[];
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
  withTopCover?: boolean;
  disableFullscreen?: boolean;
  disableMouseHover?: boolean;
  disableInitNav?: boolean;
  audioTrack?: typeof videojs.AudioTrack | any;
  videoTrack?: any;
  textTrack?: videojs.TextTrack | any;
  progress?: {
    playedSeconds: number;
  };
}
