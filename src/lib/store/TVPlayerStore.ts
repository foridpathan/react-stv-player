import videojs from "video.js";
import AudioTrack from "video.js/dist/types/tracks/audio-track";
import TextTrack from "video.js/dist/types/tracks/text-track";
import VideoTrack from "video.js/dist/types/tracks/video-track";
import { create } from "zustand";
import { MediaType, STVPlayerProps } from "../types/STVPlayerType";

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
    setLikeToggle: (likeToggle: boolean) => set({ likeToggle }),
    setSettingToggle: (settingToggle: boolean) => set({ settingToggle }),
    setLoop: (loop: boolean) => set({ loop }),
    setMediaIndex: (mediaIndex: number) => set({ mediaIndex }),
    setMediaCount: (mediaCount: number) => set({ mediaCount }),
    setMediaList: (mediaList: MediaType[]) => set({ mediaList }),
    setMuted: (muted: boolean) => set({ muted }),
    setPlayer: (player: ReturnType<typeof videojs>) => set({ player }),
    setAudioTrack: (audioTrack: AudioTrack) => set({ audioTrack }),
    setVideoTrack: (videoTrack: VideoTrack) => set({ videoTrack }),
    setTextTrack: (textTrack: TextTrack) => set({ textTrack }),
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
