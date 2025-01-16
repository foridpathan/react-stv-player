import { init } from '@noriginmedia/norigin-spatial-navigation';
import { ReactStvPlayerContext } from './PlayerContext';
import { VideoPlayerPropsInterface } from './PlayerType';
import { STVPlayerUI } from './ui';

const STVPlayer = ({ videoJsOptions, children }: VideoPlayerPropsInterface) => {

    init({
        debug: false,
        visualDebug: false,
        throttle: 100,
        // options
    });

    return (
        <ReactStvPlayerContext videoJsOptions={videoJsOptions} >
            <STVPlayerUI />
            {children}
        </ReactStvPlayerContext>
    );
};

export default STVPlayer;