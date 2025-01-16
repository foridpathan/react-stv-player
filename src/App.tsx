import ReactStvPlayer from "./lib/Player";

function App() {
  const videoJsOptions = {
    options: {
      autoplay: true,
      controls: false,
      sources: [
        {
          src: "https://storage.googleapis.com/shaka-demo-assets/sintel/dash.mpd",
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
