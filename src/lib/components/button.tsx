/* eslint-disable @typescript-eslint/no-explicit-any */
import { FocusableComponentLayout, FocusDetails, KeyPressDetails, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { CSSProperties, useEffect } from "react";
import { useSTVPlayerStore } from "../store";
import { cn } from "../ui/utils";

type ControlButtonProps = {
    children?: React.ReactNode;
    handlePress?: (props: object, details: KeyPressDetails) => void | undefined;
    onFocus?: (
        layout: FocusableComponentLayout,
        props: object,
        details: FocusDetails
    ) => void;
    handleRelease?: () => void | undefined;
    handleArrowPress?: (dir: string) => boolean;
    focusKey: string;
    className?: string;
    activeClass?: string;
    style?: CSSProperties;
    disabled?: boolean;
};

export function Button(props: ControlButtonProps) {
    const {
        children,
        handlePress,
        handleRelease,
        handleArrowPress = () => true,
        focusKey,
        className,
        style,
        disabled,
        onFocus,
        activeClass
    } = props;
    const { ref, focused, focusSelf } = useFocusable({
        onFocus,
        onEnterPress: !disabled ? handlePress : undefined,
        onEnterRelease: !disabled ? handleRelease : undefined,
        onArrowPress: handleArrowPress,
        focusKey,
        extraProps: {
            focusKey
        }
    });
    const disableMouseHover = useSTVPlayerStore((s) => s.disableMouseHover);
    useEffect(() => {
        if (focusKey === "playpause" || focusKey === "qualityTrack") focusSelf();
    }, [focusSelf, focusKey]);

    return (
        <button
            style={style}
            className={cn(className, focused && activeClass, { focused, disabled })}
            onMouseUp={!disableMouseHover ? handleRelease : undefined}
            onMouseEnter={!disableMouseHover ? focusSelf : undefined}
            onMouseDown={handlePress as any}
            ref={ref}
            disabled={disabled}
        >
            {children}
        </button >
    );
}