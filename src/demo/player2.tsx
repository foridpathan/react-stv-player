import ReactSTVPlayer, { STVPlayerButtonProps, VideoJsPlayerOptions } from '../lib';

const Player2 = () => {
    const style1: STVPlayerButtonProps[] = [
        { action: "title", align: "top", position: "bottom" },
        { action: "playpause", align: "left", position: "bottom" },
        { action: "mute", align: "left", position: "bottom" },
        { action: "settings", align: "left", position: "bottom" },
        { action: "like", align: "left", position: "bottom" },
        {
            action: "progressBar",
            align: "bottom",
            position: "bottom",
            timerStyle: "rightBottom",
            progressSelectedClass: "bg-[#FF3888]",
            className: "bg-[#FF3888] border-2 border-white",
        },
    ];
    const options: VideoJsPlayerOptions = {
        autoplay: true,
        controls: false,
        sources: [
            {
                src: "https://vjs.zencdn.net/v/oceans.mp4",
            },
        ],

    }
    return (
        <ReactSTVPlayer
            options={options}
            disableMouseHover
            title={"HLS Stream Bip"}
            customButtons={style1}
        />
    );
};

export default Player2;