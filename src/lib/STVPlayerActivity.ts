/* eslint-disable @typescript-eslint/no-explicit-any */
import { setFocus } from "@noriginmedia/norigin-spatial-navigation";
import { useCallback, useEffect, useRef } from "react";
import { useSTVPlayerStore } from "./store/TVPlayerStore";

const ACTIVITY_TIMEOUT = 4000;

export const useSTVPlayerActivity = () => {
  const timer = useRef<any>(null);
  const actions = useSTVPlayerStore((s) => s.actions);
  const activity = useSTVPlayerStore((state) => state.activity);
  const settingToggle = useSTVPlayerStore((state) => state.settingToggle);
  const currentTrack = useSTVPlayerStore((state) => state.currentTrack);
  const playing = useSTVPlayerStore((state) => state.playing);

  const startActivityTimer = useCallback(
    (activity: boolean | undefined) => {
      if (timer.current) clearTimeout(timer.current);

      if (!activity || !playing) return;

      timer.current = window.setTimeout(() => {
        actions.setActivity(false);
      }, ACTIVITY_TIMEOUT);
    },
    [actions, playing]
  );

  const actionBack = useCallback(
    (event: KeyboardEvent) => {
      const back =
        event.key === "GoBack" ||
        event.code === "GoBack" ||
        event.key === "Backspace" ||
        event.code === "Backspace" ||
        event.key === "Escape" ||
        event.code === "Escape" ||
        event.keyCode === 10009 ||
        event.keyCode === 461;

      if (back) {
        if (settingToggle) {
          if (currentTrack) {
            actions.setCurrentTrack(null);
          } else {
            actions.setSettingToggle(false);
            setFocus("STVPlayer");
          }
        }
      }
    },
    [actions, settingToggle, currentTrack]
  );

  const activate = useCallback(
    (e: MouseEvent | KeyboardEvent) => {
      actionBack(e as KeyboardEvent);
      actions.setActivity(true);
      startActivityTimer(activity);
      if (!activity) e.stopPropagation();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activity, actions, startActivityTimer, settingToggle, currentTrack]
  );

  const deActivate = useCallback(() => {
    if (playing && activity) actions.setActivity(false);
  }, [playing, activity, actions]);

  useEffect(() => {
    startActivityTimer(activity);
  }, [activity, startActivityTimer]);

  useEffect(() => {
    document.addEventListener("click", activate);
    document.addEventListener("mousemove", activate);
    document.addEventListener("keydown", activate);
    document.addEventListener("mouseleave", deActivate);
    return () => {
      document.removeEventListener("click", activate);
      document.removeEventListener("mousemove", activate);
      document.removeEventListener("keydown", activate);
      document.removeEventListener("mouseleave", deActivate);
    };
  }, [activate, deActivate]);
};
