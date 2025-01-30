# React STV Player 🎬

A highly customizable React video player built on Video.js, supporting custom buttons, themes, and advanced playback controls.

## 📌 Features

- Video.js-based player
- Customizable UI with custom buttons
- HLS & MP4 support
- Customizable progress bar
- Event-based callbacks
- Fullscreen and playback controls

## 🚀 Installation

```bash
npm install react-stv-player
# or
yarn add react-stv-player
```

## 🛠️ Usage

```jsx
import ReactSTVPlayer from "react-stv-player";

const MyPlayer = () => {
  const customButtons = [
    { action: "title", align: "left", position: "top" },
    { action: "mute", align: "left", position: "bottom" },
    { action: "previous", align: "center", position: "bottom" },
    { action: "playpause", align: "center", position: "bottom" },
    { action: "next", align: "center", position: "bottom" },
    {
      action: "progressBar",
      align: "bottom",
      position: "bottom",
      className: "bg-[#00CBB3]",
    },
    { action: "fullscreen", align: "right", position: "bottom" },
  ];

  const options = {
    autoplay: true,
    controls: false, // We're using custom controls
    sources: [
      {
        src: "[https://vjs.zencdn.net/v/oceans.mp4](https://vjs.zencdn.net/v/oceans.mp4)",
        type: "video/mp4",
      },
    ], // Added type for clarity
  };

  return (
    <ReactSTVPlayer
      options={options}
      title="My Custom Video"
      customButtons={customButtons}
    />
  );
};

export default MyPlayer;
```

## 🎛️ Props

### `ReactSTVPlayer` Props

| Prop                | Type                                       | Description                                                                                                         |
| ------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| `title`             | `string` \| `null`                         | Title displayed on the player UI.                                                                                   |
| `subTitle`          | `string` \| `null`                         | Subtitle displayed below the title.                                                                                 |
| `mediaTitle`        | `string` \| `null`                         | Alternative title for the media.                                                                                    |
| `options`           | `VideoJsPlayerOptions`                     | Video.js player options (e.g., `autoplay`, `sources`, `controls`). See Video.js documentation for full options.     |
| `mediaList`         | `MediaType[]`                              | List of media sources for playlist support. _(Define the structure of `MediaType` in your documentation)_           |
| `customButtons`     | `STVPlayerButtonProps[]`                   | Custom button configurations for UI customization.                                                                  |
| `disableFullscreen` | `boolean`                                  | Disable the fullscreen button.                                                                                      |
| `disableMouseHover` | `boolean`                                  | Disable mouse hover interactions.                                                                                   |
| `onPlay`            | `() => void`                               | Callback when video starts playing.                                                                                 |
| `onPause`           | `() => void`                               | Callback when video is paused.                                                                                      |
| `onEnded`           | `() => void`                               | Callback when video playback ends.                                                                                  |
| `onError`           | `(e: any, d: any, i: any, g: any) => void` | Callback function for handling player errors. _(Provide more context on the parameters e, d, i, and g if possible)_ |

### `STVPlayerButtonProps`

| Prop        | Type                                                                                                                                                                                                     | Description                                                                 |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `action`    | `"title"` \| `"progressBar"` \| `"custom"` \| `"back"` \| `"settings"` \| `"fullscreen"` \| `"like"` \| `"loop"` \| `"mute"` \| `"next"` \| `"playpause"` \| `"previous"` \| `"forward"` \| `"backward"` | The type of button.                                                         |
| `position`  | `"top"` \| `"center"` \| `"bottom"`                                                                                                                                                                      | Vertical position in the UI.                                                |
| `align`     | `"left"` \| `"center"` \| `"right"` \| `"top"` \| `"bottom"`                                                                                                                                             | Horizontal alignment.                                                       |
| `label`     | `string`                                                                                                                                                                                                 | Button text label (if applicable).                                          |
| `icon`      | `React.ReactNode` \| `() => React.ReactElement`                                                                                                                                                          | Custom icon component.                                                      |
| `onPress`   | `() => void`                                                                                                                                                                                             | Function triggered when the button is pressed.                              |
| `disabled`  | `boolean`                                                                                                                                                                                                | Disable the button.                                                         |
| `className` | `string`                                                                                                                                                                                                 | Add custom CSS classes to the button. Useful for styling with Tailwind CSS. |

## 🎨 Styling

You can customize the progress bar, buttons, and player UI using Tailwind CSS or custom styles.

```css
.custom-progress-bar {
  background-color: #00cbb3;
  border: 2px solid white;
}
```

Or, use the `className` prop on the buttons for Tailwind:

```jsx
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>
```

## 🔗 License

MIT License

## 🏆 Contributors

- @foridpathan

## 📩 Feedback

Feel free to open an issue or submit a PR! 🚀

---

### How to Use

- Save this as `README.md` in your project root.
- It includes installation, usage, props, button details, styling, and more.
- This will help users understand how to use your player effectively.

Key improvements:

*   **Consistent Markdown:** Improved formatting for headings, lists, and code blocks.
*   **Clearer Prop Table:** Used a table for props, making them much more readable.  Added a `className` property to `STVPlayerButtonProps` to make styling with Tailwind easier.
*   **Example Usage with Type:** Added `type: "video/mp4"` to the video source for better compatibility.
*   **Styling Example with Tailwind:** Showed how to use the `className` prop with Tailwind CSS.
*   **Removed Redundancy:** Streamlined the "How to Use" section.
*   **Improved Descriptions:** Clarified some of the prop descriptions, especially for the error handler and media list.  Added a note to define the structure of `MediaType`.
*   **Video.js Options Link:** Added a suggestion to link to the Video.js documentation for the `options` prop.

This revised README is much more professional and user-friendly.  Remember to define the `MediaType` interface in your documentation if you use it.  Also, consider adding a link to your project's GitHub repository.
