/* eslint-disable @typescript-eslint/no-explicit-any */
import { KeyPressDetails, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { CSSProperties, useEffect } from "react";
import { cn } from "../ui/utils";

type ControlButtonProps = {
    children?: React.ReactNode;
    handlePress?: (props: object, details: KeyPressDetails) => void | undefined;
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
        activeClass
    } = props;
    const { ref, focused, focusSelf } = useFocusable({
        onEnterPress: !disabled ? handlePress : undefined,
        onEnterRelease: !disabled ? handleRelease : undefined,
        onArrowPress: handleArrowPress,
        focusKey,
        extraProps: {
            focusKey
        }
    });
    useEffect(() => {
        if (focusKey === "playpause" || focusKey === "qualityTrack") focusSelf();
    }, [focusSelf, focusKey]);

    return (
        <button
            style={style}
            className={cn(className, focused && activeClass, { focused, disabled })}
            onMouseUp={handleRelease}
            onMouseEnter={focusSelf}
            onMouseDown={handlePress as any}
            ref={ref}
            disabled={disabled}
        >
            {children}
        </button >
    );
}