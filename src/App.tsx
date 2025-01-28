import ReactSTVPlayer, { MediaType, VideoJsPlayerOptions } from "./lib";

function App() {

  const mediaList: MediaType[] = [
    {
      url: "https://vjs.zencdn.net/v/oceans.mp4",
      title: "HLS Stream Sample",
      subTitle: "Tears of Steel",
      preview:
        "https://mango.blender.org/wp-content/gallery/4k-renders/06_barley.jpg",
    },
    {
      title: "Dash Stream Sample",
      subTitle: "Elephants Dream",
      url: "https://rdmedia.bbc.co.uk/elephants_dream/1/client_manifest-all.mpd",
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

  return <ReactSTVPlayer options={options} mediaList={mediaList} mediaCount={mediaList.length} mediaIndex={0} />;
}

export default App
