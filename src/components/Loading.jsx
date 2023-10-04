import Lottie from "lottie-react";

import loadingAnimation from '../assets/loading/loadingBar1.json'

const Loading = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <Lottie className="h-[500px] w-[500px]" animationData={loadingAnimation} loop={true} />

        </div>
    );
};

export default Loading;