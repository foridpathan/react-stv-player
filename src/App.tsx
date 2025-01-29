import ReactSTVPlayer, { MediaType, STVPlayerButtonProps, VideoJsPlayerOptions } from "./lib";

const customButtons: STVPlayerButtonProps[] = [
  { action: "back", align: "left", position: "top" },
  { action: "title", align: "right", position: "top" },
  { action: "settings", align: "right", position: "top" },
  { action: "loop", align: "left", position: "bottom" },
  { action: "like", align: "left", position: "bottom" },
  { action: "previous", align: "center", position: "bottom" },
  { action: "playpause", align: "center", position: "bottom" },
  { action: "next", align: "center", position: "bottom" },
  { action: "mute", align: "right", position: "bottom" },
  { action: "progressBar", align: "bottom", position: "bottom", timerStyle:"rightTop" },
  { action: "backward", align: "left", position: "center",  },
  { action: "forward", align: "right", position: "center" },
];

function App() {

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
  const options: VideoJsPlayerOptions = {
    autoplay: true,
    controls: false,
    sources: [
      {
        src: "https://vjs.zencdn.net/v/oceans.mp4",
      },
    ],

  }

  return <ReactSTVPlayer
    options={options}
    mediaList={mediaList}
    disableMouseHover
    mediaTitle={"Related Videos"}
    mediaCount={mediaList.length}
    mediaIndex={0}
    customButtons={customButtons}
  />;
}

export default App
