
const Introduction = () => {
    return (
        <div className="h-screen p-8 overflow-auto">
            <div className="w-full max-w-2xl mx-auto">
                <div className="mb-6">
                    <h1 className="text-2xl mb-3 font-bold">📺 react-stv-player</h1>
                    <p>react-stv-player is a flexible and customizable React video player component built on top of Video.js. It supports multiple media formats, customizable UI controls, and interactive features for an enhanced video playback experience.</p>

                    <h2 className="mt-3 text-lg">✨ Features</h2>
                    <ul className="space-y-2 pt-2">
                        <li>
                            <b>🎬 Built on Video.js –</b> Leverages the powerful Video.js library for smooth playback.
                        </li>
                        <li>
                            <b>🎛️ Highly Customizable UI –</b> Add custom buttons, modify the progress bar, and style the player with Tailwind CSS.
                        </li>
                        <li>
                            <b>🔁 Playback Controls –</b> Play, pause, mute, loop, fullscreen, and speed control.
                        </li>
                        <li>
                            <b>🔤 Multi-language Support –</b> Supports multiple audio tracks, subtitles, and captions.
                        </li>
                        <li>
                            <b>🎥 Multiple Media Sources –</b> Play videos from URLs, streams, or multiple quality sources.
                        </li>
                        <li>
                            <b>🎮 User Interaction Options –</b> Hotkeys, click events, and dynamic UI updates.
                        </li>
                        <li><b>📡 Live & VOD Support –</b> Works with live streams and on-demand videos.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Introduction;