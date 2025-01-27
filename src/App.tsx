import ReactStvPlayer from "./lib/Player";


export type MediaType = {
  url: string | string[] | MediaStream;
  title?: string;
  subTitle?: string;
  preview?: string | boolean;
};

const mediaList: MediaType[] = [
  {
    url: "https://www.youtube.com/watch?v=SkVqJ1SGeL0",
    title: "YouTube Video Sample",
    subTitle: "Caminandes 3: Llamigos",
    preview: true,
  },
  {
    url: "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
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

function App() {
  const videoJsOptions = {
    options: {
      autoplay: true,
      controls: false,
      sources: [
        {
          src: "https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8",
        },
      ],
    },
    onReady: (player) => {
      console.log("Player is ready:", player);
    },
  };

  return <ReactStvPlayer videoJsOptions={videoJsOptions} />;
}

export default App
