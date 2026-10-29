// import './Loading.css';
import Lottie from 'lottie-react';
import Home from '../../Anim/Home.json';

const Loading = () => {
    return (
        <div className="flex items-center justify-center flex-col min-h-dvh bg-[#EAEAEA] ">
            {/* <div className="loader">
                <div>
                    <div>
                        <span className="one h6"></span>
                        <span className="two h3"></span>
                    </div>
                </div>
                <div>
                    <div>
                        <span className="one h1"></span>
                    </div>
                </div>
                <div>
                    <div>
                        <span className="two h2"></span>
                    </div>
                </div>
                <div>
                    <div>
                        <span className="one h4"></span>
                    </div>
                </div>
            </div> */}
            <Lottie animationData={Home} className="w-32 mx-auto" />
            <p className="text-[#053146] font-bold px-2 text-2xl md:text-3xl font-EB">
                Welcome to<span className="text-primary tracking-widest"> INBS </span>Real Estate
            </p>
        </div>
    );
};

export default Loading;
