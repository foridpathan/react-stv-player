import { SyntaxHighlightedContent } from "../helper/SyntaxHighlighted";

const Install = () => {
    return (
        <div className="h-screen p-8 overflow-auto">
            <div className="w-full max-w-2xl mx-auto">
                <div className="mb-6">
                    <h1 className="text-2xl mb-3 font-bold">📺 react-stv-player</h1>
                    <p>react-stv-player is a flexible and customizable React video player component built on top of Video.js. It supports multiple media formats, customizable UI controls, and interactive features for an enhanced video playback experience.</p>

                    <h2 className="mt-3 text-lg">Installation</h2>
                    <SyntaxHighlightedContent
                        content="npm install react-stv-player"
                        language="bash"
                    />

                    <h2 className="mt-3 text-lg"> Usage</h2>
                    <SyntaxHighlightedContent
                        content={`import ReactSTVPlayer from "react-stv-player";

const MyVideoPlayer = () => {
  return (
    <ReactSTVPlayer
      options={{
        controls: true,
        autoplay: false,
        loop: false,
        muted: false,
        width: 640,
        height: 360,
        sources: [{ src: "https://example.com/video.mp4", type: "video/mp4" }],
      }}
    />
  );
};

export default MyVideoPlayer;`}
                        language="javascript"
                    />

                    <h2 className="mt-3 text-lg">Customize Buttons</h2>
                    <SyntaxHighlightedContent
                        content={`import ReactSTVPlayer, { STVPlayerButtonProps } from "react-stv-player";

const customButtons: STVPlayerButtonProps[] = [
  {
    action: "playpause",
    label: "Play/Pause",
    position: "bottom",
    align: "center",
  },
  {
    action: "fullscreen",
    label: "Fullscreen",
    position: "bottom",
    align: "right",
  },
];

const CustomVideoPlayer = () => {
  return <ReactSTVPlayer customButtons={customButtons} />;
};

export default CustomVideoPlayer;`}
                        language="javascript"
                    />
                </div>
                <h2 className="text-lg mt-4">Full options</h2>
                <table className="-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 gap-4 p-2">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th className="px-6 py-3">Prop</th>
                            <th className="px-6 py-3">Type</th>
                            <th className="px-6 py-3">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3" colSpan={3} align="center"><strong>🎥 General Player Options</strong></td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">title</td><td className="px-6 py-3">string | null</td><td className="px-6 py-3">Main title displayed on the player UI.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">subTitle</td><td className="px-6 py-3">string | null</td><td className="px-6 py-3">Subtitle shown below the title.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">mediaTitle</td><td className="px-6 py-3">string | null</td><td className="px-6 py-3">Alternative title for the media.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">options</td><td className="px-6 py-3">VideoJsPlayerOptions</td><td className="px-6 py-3">Video.js player options (autoplay, sources, controls, etc.).</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">mediaList</td><td className="px-6 py-3">MediaType[]</td><td className="px-6 py-3">Array of media items for playlist support.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">activity</td><td className="px-6 py-3">boolean</td><td className="px-6 py-3">Tracks user activity (e.g., mouse movement) for UI visibility.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">customToggle</td><td className="px-6 py-3">boolean</td><td className="px-6 py-3">Enables a custom toggle mechanism for play/pause.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">loop</td><td className="px-6 py-3">boolean</td><td className="px-6 py-3">Enables looping of the video.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">muted</td><td className="px-6 py-3">boolean</td><td className="px-6 py-3">Starts the video muted if true.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">playing</td><td className="px-6 py-3">boolean</td><td className="px-6 py-3">Controls whether the video is currently playing.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">duration</td><td className="px-6 py-3">number</td><td className="px-6 py-3">Duration of the video in seconds.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">fullscreen</td><td className="px-6 py-3">boolean</td><td className="px-6 py-3">Enables fullscreen mode.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">likeToggle</td><td className="px-6 py-3">boolean</td><td className="px-6 py-3">Toggles the like button state.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">settingToggle</td><td className="px-6 py-3">boolean</td><td className="px-6 py-3">Toggles the settings button state.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">mediaIndex</td><td className="px-6 py-3">number</td><td className="px-6 py-3">Index of the currently playing media in mediaList.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">mediaCount</td><td className="px-6 py-3">number</td><td className="px-6 py-3">Total number of media items available.</td></tr>

                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3" colSpan={3} align="center"><strong>🎛️ UI Customization</strong></td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">customButtons</td><td className="px-6 py-3">STVPlayerButtonProps[]</td><td className="px-6 py-3">Array of custom buttons to modify the player UI.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">disableFullscreen</td><td className="px-6 py-3">boolean</td><td className="px-6 py-3">Disables the fullscreen button.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">disableMouseHover</td><td className="px-6 py-3">boolean</td><td className="px-6 py-3">Disables showing controls on mouse hover.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">disableInitNav</td><td className="px-6 py-3">boolean</td><td className="px-6 py-3">Disables the initial navigation overlay.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">withTopCover</td><td className="px-6 py-3">boolean</td><td className="px-6 py-3">Adds a top cover (e.g., gradient or overlay).</td></tr>

                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3" colSpan={3} align="center"><strong>🎮 User Interaction & Controls</strong></td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">hideControlsOnArrowUp</td><td className="px-6 py-3">boolean</td><td className="px-6 py-3">Hides controls when the up arrow key is pressed.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">onLoopPress</td><td className="px-6 py-3">{`() => void`}</td><td className="px-6 py-3">Callback when the loop button is pressed.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">onLikePress</td><td className="px-6 py-3">{`() => void`}</td><td className="px-6 py-3">Callback when the like button is pressed.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">onPreviousPress</td><td className="px-6 py-3">{`() => void`}</td><td className="px-6 py-3">Callback for previous track action.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">onSkipBackPress</td><td className="px-6 py-3">{`() => void`}</td><td className="px-6 py-3">Callback for skipping backward.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">onSkipForwardPress</td><td className="px-6 py-3">{`() => void`}</td><td className="px-6 py-3">Callback for skipping forward.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">onSkipReleasePress</td><td className="px-6 py-3">{`() => void`}</td><td className="px-6 py-3">Callback for skipping release action.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">onNextPress</td><td className="px-6 py-3">{`() => void`}</td><td className="px-6 py-3">Callback for next track action.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">onMutePress</td><td className="px-6 py-3">{`() => void`}</td><td className="px-6 py-3">Callback for mute/unmute toggle.</td></tr>

                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3" colSpan={3} align="center"><strong>🔄 Events & Lifecycle Callbacks</strong></td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">onReady</td><td className="px-6 py-3">{`(player: Player | null) => void`}</td><td className="px-6 py-3">Called when the player is initialized.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">onPlay</td><td className="px-6 py-3">{`() => void`}</td><td className="px-6 py-3">Called when the video starts playing.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">onPause</td><td className="px-6 py-3">{`() => void`}</td><td className="px-6 py-3">Called when the video is paused.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">onEnded</td><td className="px-6 py-3">{`() => void`}</td><td className="px-6 py-3">Called when the video playback ends.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">onError</td><td className="px-6 py-3">{`(e: any, d: any, i: any, g: any) => void`}</td><td className="px-6 py-3">Handles player errors.</td></tr>

                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3" colSpan={3} align="center"><strong>📡 Track & Media Information</strong></td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">currentTrack</td><td className="px-6 py-3">"Quality" | "Language" | "Captions" | "Speed" | null</td><td className="px-6 py-3">Current track type being adjusted.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">audioTrack</td><td className="px-6 py-3">typeof videojs.AudioTrack | any</td><td className="px-6 py-3">Active audio track (if available).</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">videoTrack</td><td className="px-6 py-3">any</td><td className="px-6 py-3">Active video track information.</td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3">textTrack</td><td className="px-6 py-3">videojs.TextTrack | any</td><td className="px-6 py-3">Active text (subtitle) track.</td></tr>
                    </tbody>
                </table>

                <div className="">
                    <h2 className="text-lg mt-4">
                        General Button Properties
                    </h2>
                    <img src="/images/playerui.jpg" alt="" />
                </div>
                <table className="-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 gap-4 p-2">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">Prop</th>
                            <th className="px-6 py-3">Type</th>
                            <th className="px-6 py-3">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3" colSpan={3} align="center"><strong>🆕 </strong></td></tr> */}
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-3">action</td>
                            <td className="px-6 py-3">
                                "title" | "progressBar" | "custom" | "back" | "settings" | "fullscreen" | "like" | "loop" | "mute" | "next" | "playpause" | "previous" | "forward" | "backward"
                            </td>
                            <td className="px-6 py-3">The type of button and its function.</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-3">position</td>
                            <td className="px-6 py-3">"top" | "center" | "bottom"</td>
                            <td className="px-6 py-3">Vertical position of the button in the UI.</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-3">align</td>
                            <td className="px-6 py-3">"left" | "center" | "right" | "top" | "bottom"</td>
                            <td className="px-6 py-3">Horizontal alignment of the button.</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-3">label</td>
                            <td className="px-6 py-3">string</td>
                            <td className="px-6 py-3">Text label for the button (if applicable).</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-3">icon</td>
                            <td className="px-6 py-3">{`ReactNode | () => ReactElement`}</td>
                            <td className="px-6 py-3">Custom icon component or function for rendering an icon.</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-3">onPress</td>
                            <td className="px-6 py-3">{`() => void`}</td>
                            <td className="px-6 py-3">Function triggered when the button is pressed.</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-3">onRelease</td>
                            <td className="px-6 py-3">{`() => void`}</td>
                            <td className="px-6 py-3">Function triggered when the button is released.</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-3">isSelectedFill</td>
                            <td className="px-6 py-3">boolean</td>
                            <td className="px-6 py-3">If true, the button appears in a selected/filled state.</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-3">disabled</td>
                            <td className="px-6 py-3">boolean</td>
                            <td className="px-6 py-3">Disables the button (non-interactable).</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-3">style</td>
                            <td className="px-6 py-3">CSSProperties</td>
                            <td className="px-6 py-3">Custom inline styles for the button.</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-3">className</td>
                            <td className="px-6 py-3">string</td>
                            <td className="px-6 py-3">CSS class for styling the button.</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-3">selectedClass</td>
                            <td className="px-6 py-3">string</td>
                            <td className="px-6 py-3">CSS class applied when the button is selected.</td>
                        </tr>

                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"><td className="px-6 py-3" colSpan={3} align="center"><strong>📊 Progress Bar Specific Properties</strong></td></tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-3">progressClassName</td>
                            <td className="px-6 py-3">string</td>
                            <td className="px-6 py-3">CSS class for the progress bar styling.</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-3">progressSelectedClass</td>
                            <td className="px-6 py-3">string</td>
                            <td className="px-6 py-3">CSS class for the selected progress bar state.</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-3">timerStyle</td>
                            <td className="px-6 py-3">"leftRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom"</td>
                            <td className="px-6 py-3">Placement style for the progress bar timer.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Install;