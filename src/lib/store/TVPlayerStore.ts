import videojs from "video.js";
import { create } from "zustand";
import { STVPlayerProps } from "../STVPlayerType";

const INITIAL_STATE: STVPlayerProps = {
  activity: true,
  duration: 0,
  mediaIndex: 0,
  mediaCount: 0,
  progress: {
    playedSeconds: 0,
  },
};

export const useSTVPlayerStore = create<STVPlayerProps>()((set) => ({
  ...INITIAL_STATE,
  actions: {
    setActivity: (activity: boolean) => set({ activity }),
    setCustomToggle: (customToggle: boolean) => set({ customToggle }),
    setDuration: (duration: number) => set({ duration }),
    setFullscreen: (fullscreen: boolean) => set({ fullscreen }),
    setLight: (light: boolean) => set({ light }),
    setLikeToggle: (likeToggle: boolean) => set({ likeToggle }),
    setSettingToggle: (settingToggle: boolean) => set({ settingToggle }),
    setLoop: (loop: boolean) => set({ loop }),
    setMediaIndex: (mediaIndex: number) => set({ mediaIndex }),
    setMediaCount: (mediaCount: number) => set({ mediaCount }),
    setMuted: (muted: boolean) => set({ muted }),
    setPlayer: (player: ReturnType<typeof videojs>) => set({ player }),
    setAudioTrack: (audioTrack: videojs.AudioTrack) => set({ audioTrack }),
    setVideoTrack: (videoTrack: videojs.VideoTrack) => set({ videoTrack }),
    setTextTrack: (textTrack: videojs.TextTrack) => set({ textTrack }),
    setCurrentTrack: (
      currentTrack: "Quality" | "Language" | "Captions" | "Speed" | null
    ) => set({ currentTrack }),
    setPlaying: (playing: boolean) => set({ playing }),
    setProgress: (progress: number) =>
      set((state) => ({
        ...state,
        progress: { ...state.progress, playedSeconds: progress },
      })),
    setSubTitle: (subTitle: string) => set({ subTitle }),
    setTitle: (title: string) => set({ title }),
  },
}));
