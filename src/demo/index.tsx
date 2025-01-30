import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Player1 from "./player1";
import Player2 from './player2';
import Playlist1 from "./playlist1";

const pl1 = `const style1: STVPlayerButtonProps[] = [
    { action: "title", align: "left", position: "top" },
    { action: "mute", align: "left", position: "bottom" },
    { action: "previous", align: "center", position: "bottom" },
    { action: "playpause", align: "center", position: "bottom" },
    { action: "next", align: "center", position: "bottom" },
    { action: "progressBar", align: "bottom", position: "bottom", progressSelectedClass: "bg-[#00CBB3]", className: "bg-[#00CBB3] border-2 border-white", },
    {
        action: "custom",
        align: "right",
        position: "bottom",
        label: "Share",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48" fill="none">
            <path d="M31.8306 17.0188C31.9 16.9819 31.9844 16.9894 32.0478 17.0358C32.8751 17.642 33.8958 18 35 18C37.7614 18 40 15.7614 40 13C40 10.2386 37.7614 8 35 8C32.2386 8 30 10.2386 30 13C30 13.1071 30.0034 13.2135 30.01 13.3189C30.0151 13.3992 29.9739 13.4757 29.9029 13.5135L16.0377 20.8858C15.9703 20.9216 15.8886 20.9157 15.8257 20.8725C15.0218 20.3208 14.0486 19.998 13 19.998C10.2386 19.998 8 22.2366 8 24.998C8 27.7595 10.2386 29.998 13 29.998C14.1197 29.998 15.1534 29.63 15.9868 29.0083C16.0462 28.964 16.1248 28.954 16.1924 28.9841L29.8864 35.0811C29.9569 35.1124 30.0027 35.1818 30.0066 35.2589C30.1413 37.9 32.3254 40 35 40C37.7614 40 40 37.7614 40 35C40 32.2386 37.7614 30 35 30C33.689 30 32.4959 30.5045 31.6042 31.33C31.5441 31.3857 31.4567 31.4017 31.3818 31.3683L18.1132 25.4607C18.0357 25.4262 17.9888 25.3466 17.9932 25.2619C17.9977 25.1745 18 25.0865 18 24.998C18 24.8397 17.9926 24.683 17.9782 24.5284C17.9706 24.4461 18.0118 24.3664 18.0848 24.3276L31.8306 17.0188Z" fill="#F5F5F5" />
        </svg>,
        onPress: () => {
            window.location.href = "https://github.com/foridpathan/react-stv-player";
        },
    },
    { action: "settings", align: "right", position: "bottom" },
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
);`

export type DemoType = {
    title: string;
    description: string;
    img: string;
    component: JSX.Element;
}

const Demo = ({ setPlayer }: { setPlayer: (p: DemoType) => void }) => {
    const [code, setCode] = useState(null)

    const AllDemo: DemoType[] = [
        {
            title: "Player 1",
            description: "A basic playlist with HLS, DASH, and MP4 streams",
            img: "/images/player1.png",
            component: <Player1 />
        },
        {
            title: "Player 2",
            description: "A basic playlist with HLS, DASH, and MP4 streams",
            img: "/images/player2.png",
            component: <Player2 />
        },
        {
            title: "Playlist 1",
            description: "A basic playlist with HLS, DASH, and MP4 streams",
            img: "/images/playlist1.png",
            component: <Playlist1 />
        }
    ]

    return (
        <div className="p-6">
            <h2 className="text-xl">Smart TV Player Demos</h2>
            <div className="py-4 grid grid-cols-3 gap-6">
                {
                    AllDemo.map((player) => (
                        <div className="bg-gray-950 p-2 rounded-lg">
                            <img src={player.img} alt={player.title} />
                            <div className="p-3">
                                <h3 className="text-lg font-bold">{player.title}</h3>
                                <p>{player.description}</p>
                                <div className="flex gap-4 pt-5">
                                    <button className="border border-white w-full p-2 rounded-lg" onClick={() => setPlayer(player)}>View Demo</button>
                                    <button className="border border-white w-full p-2 rounded-lg">Download Code</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {code &&
                <div className="fixed w-screen h-screen z-10 top-0 left-0 flex items-center justify-center">
                    <div className="absolute top-0 left-0 w-full h-full bg-gray-950 bg-opacity-80" onClick={() => setCode(null)}></div>
                    <div className="w-[600px] h-[90%] p-6 relative bg-white text-black rounded-lg overflow-auto">
                        <h2 className="text-lg font-bold">Smart TV Player Code</h2>
                        <div className="pt-4">
                            <SyntaxHighlighter language="javascript" style={a11yDark} wrapLongLines>
                                {pl1}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Demo;