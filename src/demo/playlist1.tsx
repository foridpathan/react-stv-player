import ReactSTVPlayer, { MediaType, STVPlayerButtonProps, VideoJsPlayerOptions } from '../lib';

const Playlist1 = () => {

    const mediaList: MediaType[] = [
        {
            url: "https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8",
            title: "HLS Stream Bip",
            subTitle: "",
            preview:
                "https://mango.blender.org/wp-content/gallery/4k-renders/06_barley.jpg",
        },
        {
            url: "https://storage.googleapis.com/shaka-demo-assets/angel-one-hls/hls.m3u8",
            title: "HLS Stream Angel One",
            subTitle: "Tears of Steel",
            preview:
                "https://mango.blender.org/wp-content/gallery/4k-renders/06_barley.jpg",
        },
        {
            title: "Dash Stream Big Buck Bunny",
            subTitle: "Elephants Dream",
            url: "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd",
            preview:
                "https://orange.blender.org/wp-content/themes/orange/images/media/gallery/s1_proog.jpg",
        },
        {
            title: "Dash Stream Angel One",
            subTitle: "Elephants Dream",
            url: "https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd",
            preview:
                "https://orange.blender.org/wp-content/themes/orange/images/media/gallery/s1_proog.jpg",
        },
    ];
    const style1: STVPlayerButtonProps[] = [
        { action: "back", align: "left", position: "top", onPress: () => { console.log('click') } },
        { action: "title", align: "left", position: "top" },
        { action: "like", align: "right", position: "top" },
        { action: "settings", align: "right", position: "top" },
        { action: "previous", align: "center", position: "center" },
        { action: "playpause", align: "center", position: "center" },
        { action: "next", align: "center", position: "center" },
        {
            action: "progressBar",
            align: "bottom",
            position: "bottom",
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
            mediaList={mediaList}
            mediaTitle={"Related Videos"}
            mediaCount={mediaList.length}
            mediaIndex={0}
        />
    );
};

export default Playlist1;