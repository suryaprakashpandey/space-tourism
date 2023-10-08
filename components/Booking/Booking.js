import { useEffect } from "react";

const Booking = () => {
    useEffect(() => {
        const scrollAnimElements = document.querySelectorAll(
            "[data-animate-on-scroll]"
        );
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting || entry.intersectionRatio > 0) {
                        const targetElement = entry.target;
                        targetElement.classList.add("animate");
                        observer.unobserve(targetElement);
                    }
                }
            },
            {
                threshold: 0.15,
            }
        );

        for (let i = 0; i < scrollAnimElements.length; i++) {
            observer.observe(scrollAnimElements[i]);
        }

        return () => {
            for (let i = 0; i < scrollAnimElements.length; i++) {
                observer.unobserve(scrollAnimElements[i]);
            }
        };
    }, []);
    return (
        <div className="relative bg-black w-full h-[4286px] overflow-hidden text-left text-45xl text-white font-head">
            <img
                className="absolute top-[0px] left-[calc(50%_-_864px)] rounded-[695px] w-[707.82px] h-[1364.05px] object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0]"
                alt=""
                src="/unsplashxu4pz7gi9jy@2x.png"
                data-animate-on-scroll
            />
            <nav className="m-0 absolute top-[37px] left-[726px] rounded-[32px] bg-nav-bar-glass flex flex-row items-center justify-start py-[15px] px-[61px] gap-[149px] text-left text-13xl text-white font-head border-[1px] border-solid border-stokes-glass-nav">
                <div className="relative leading-[45.51px] font-medium">
                    Space Venture
                </div>
                <div className="relative leading-[45.51px] font-medium">Booking</div>
                <div className="relative leading-[45.51px] font-medium flex items-center w-48 h-[26px] shrink-0">
                    Know More
                </div>
            </nav>
            <div className="absolute w-full top-[3243px] right-[0px] left-[0px] bg-black h-[1043px]" />
            <div className="absolute top-[3217px] left-[0px] w-[1728px] overflow-hidden flex flex-col items-center justify-start pt-[62px] px-36 pb-0 box-border gap-[72px] text-mini-4">
                <div className="w-[1440px] flex flex-col items-start justify-start py-0 pr-[950.3999633789062px] pl-[28.799999237060547px] box-border max-w-[1440px] z-[0]">
                    <div className="w-full rounded-[7.2px] bg-gray-400 shadow-[0px_22.5px_45px_-10.8px_rgba(0,_0,_0,_0.25)] box-border overflow-hidden flex flex-col items-start justify-start p-[22.5px] relative max-w-[460.79998779296875px] border-[0.9px] border-solid border-gray-300">
                        <div className="self-stretch flex flex-col items-start justify-start pt-[14.399999618530273px] px-0 pb-0 z-[0]">
                            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[212.39999389648438px] pl-0">
                                <div className="relative tracking-[-0.08px] leading-[21.6px] font-medium inline-block max-w-[415.79998779296875px]">
                                    Updates from Mission Control
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch relative h-[262.8px] z-[1] text-gray-100">
                            <div className="absolute h-[calc(100%_-_225.1px)] top-[21.65px] bottom-[203.45px] left-[0px] w-[415.8px] flex flex-row items-start justify-start max-w-[415.79998779296875px]">
                                <div className="self-stretch w-[207.9px] flex flex-col items-start justify-start py-0 pr-[7.199999809265137px] pl-0 box-border">
                                    <div className="self-stretch rounded-7xs-4 flex flex-row items-start justify-start pt-[10.799999237060547px] px-[15.300000190734863px] pb-[9.90000057220459px] border-[0.9px] border-solid border-gray-200">
                                        <div className="overflow-hidden flex flex-col items-start justify-start py-0 pr-[90px] pl-0">
                                            <div className="relative font-medium">First name*</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch w-[207.9px] flex flex-col items-start justify-start py-0 pr-[7.199999809265137px] pl-0 box-border">
                                    <div className="self-stretch rounded-7xs-4 flex flex-row items-start justify-start pt-[10.799999237060547px] px-[15.300000190734863px] pb-[9.90000057220459px] border-[0.9px] border-solid border-gray-200">
                                        <div className="overflow-hidden flex flex-col items-start justify-start py-0 pr-[90.9000015258789px] pl-0">
                                            <div className="relative font-medium">Last name*</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute h-[calc(100%_-_225.1px)] top-[81.05px] bottom-[144.05px] left-[0px] w-[415.8px] flex flex-col items-start justify-start py-0 pr-[7.199999809265137px] pl-0 box-border max-w-[415.79998779296875px]">
                                <div className="self-stretch rounded-7xs-4 flex flex-row items-start justify-start pt-[10.799999237060547px] px-[15.300000190734863px] pb-[9.90000057220459px] border-[0.9px] border-solid border-gray-200">
                                    <div className="overflow-hidden flex flex-col items-start justify-start py-0 pr-[333px] pl-0">
                                        <div className="relative font-medium">Email*</div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute h-[calc(100%_-_226.2px)] w-full top-[226.5px] right-[0px] bottom-[-0.3px] left-[0px] flex flex-col items-start justify-start text-center text-black">
                                <div className="self-stretch rounded-8980xl-1 bg-white flex flex-row items-start justify-start py-[10.799999237060547px] pr-[183.50999450683594px] pl-[183.6900177001953px] border-[0.9px] border-solid border-black">
                                    <div className="relative leading-[14.4px] font-medium">
                                        Submit
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute my-0 mx-[!important] top-[20.7px] left-[22.5px] text-3xs-9 tracking-[0.5px] leading-[21.6px] lowercase flex items-center w-[60.23px] h-[9.9px] shrink-0 opacity-[0.9] max-w-[415.79998779296875px] z-[2]">
                            Newsletter
                        </div>
                    </div>
                </div>
                <div className="absolute my-0 mx-[!important] bottom-[0.4px] left-[0px] w-[1728px] h-[972px] z-[1]">
                    <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-hidden">
                        <img
                            className="absolute top-[0px] left-[0px] w-[1728px] h-[972px] object-cover"
                            alt=""
                            src="/footergradientwebp@2x.png"
                        />
                    </div>
                </div>
                <div className="relative w-[1440px] h-[590.4px] max-w-[1440px] z-[2] text-3xs-9">
                    <div className="absolute h-[calc(100%_-_136.2px)] top-[-0.3px] bottom-[136.5px] left-[28.8px] w-[518.4px] flex flex-col items-start justify-start pt-0 px-0 pb-[72px] box-border max-w-[518.3999633789062px]">
                        <div className="w-full flex flex-col items-start justify-start py-[72px] px-0 box-border gap-[7.2px] max-w-[288px]">
                            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[247.5px] pl-0 opacity-[0.9]">
                                <div className="relative tracking-[0.5px] leading-[21.6px] lowercase inline-block max-w-[288px]">
                                    Location
                                </div>
                            </div>
                            <div className="relative text-mini-4 tracking-[-0.08px] leading-[21.6px] font-medium inline-block max-w-[288px]">
                                <p className="m-0">1 Bristow Way</p>
                                <p className="m-0">Titusville, FL 32780</p>
                                <p className="m-0">United States</p>
                            </div>
                        </div>
                        <div className="self-stretch h-36 flex flex-row items-start justify-start gap-[21.6px] text-mini-4">
                            <div className="self-stretch relative w-[105.87px]">
                                <div className="absolute w-full top-[0px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-[62.66699981689453px] pl-0 box-border opacity-[0.9] text-3xs-9">
                                    <div className="relative tracking-[0.5px] leading-[21.6px] lowercase inline-block max-w-[105.86699676513672px]">
                                        Platform
                                    </div>
                                </div>
                                <div className="absolute w-full top-[28.8px] right-[0px] left-[0px] flex flex-col items-start justify-start py-[3.5999999046325684px] pr-[29.36699676513672px] pl-0 box-border">
                                    <div className="relative tracking-[-0.08px] leading-[21.6px] font-medium inline-block max-w-[105.86699676513672px]">
                                        Experience
                                    </div>
                                </div>
                                <div className="absolute w-full top-[57.6px] right-[0px] left-[0px] flex flex-col items-start justify-start py-[3.5999999046325684px] pr-[33.86699676513672px] pl-0 box-border">
                                    <div className="relative tracking-[-0.08px] leading-[21.6px] font-medium inline-block max-w-[105.86699676513672px]">
                                        Spaceship
                                    </div>
                                </div>
                                <div className="absolute w-full top-[86.4px] right-[0px] left-[0px] flex flex-col items-start justify-start py-[3.5999999046325684px] pr-[66.26699829101562px] pl-0 box-border">
                                    <div className="relative tracking-[-0.08px] leading-[21.6px] font-medium inline-block max-w-[105.86699676513672px]">
                                        Ethos
                                    </div>
                                </div>
                                <div className="absolute w-full top-[115.2px] right-[0px] left-[0px] flex flex-col items-start justify-start py-[3.5999999046325684px] pr-[67.16699981689453px] pl-0 box-border">
                                    <div className="relative tracking-[-0.08px] leading-[21.6px] font-medium inline-block max-w-[105.86699676513672px]">
                                        News
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch relative w-[82.6px]">
                                <div className="absolute w-full top-[0px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-[36.701995849609375px] pl-0 box-border opacity-[0.9] text-3xs-9">
                                    <div className="relative tracking-[0.5px] leading-[21.6px] lowercase inline-block max-w-[82.60199737548828px]">
                                        Company
                                    </div>
                                </div>
                                <div className="absolute w-full top-[28.8px] right-[0px] left-[0px] flex flex-col items-start justify-start py-[3.5999999046325684px] pr-[46.60199737548828px] pl-0 box-border">
                                    <div className="relative tracking-[-0.08px] leading-[21.6px] font-medium inline-block max-w-[82.60199737548828px]">
                                        Crew
                                    </div>
                                </div>
                                <div className="absolute w-full top-[57.6px] right-[0px] left-[0px] flex flex-col items-start justify-start py-[3.5999999046325684px] pr-[46.60199737548828px] pl-0 box-border">
                                    <div className="relative tracking-[-0.08px] leading-[21.6px] font-medium inline-block max-w-[82.60199737548828px]">
                                        FAQs
                                    </div>
                                </div>
                                <div className="absolute w-full top-[86.4px] right-[0px] left-[0px] flex flex-col items-start justify-start py-[3.5999999046325684px] pr-[27.701997756958008px] pl-0 box-border">
                                    <div className="relative tracking-[-0.08px] leading-[21.6px] font-medium inline-block max-w-[82.60199737548828px]">
                                        Contact
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch relative w-[167.74px]">
                                <div className="absolute w-full top-[0px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-[117.34200286865234px] pl-0 box-border opacity-[0.9] text-3xs-9">
                                    <div className="relative tracking-[0.5px] leading-[21.6px] lowercase inline-block max-w-[167.74200439453125px]">
                                        Resources
                                    </div>
                                </div>
                                <div className="absolute w-full top-[28.8px] right-[0px] left-[0px] flex flex-col items-start justify-start py-[3.5999999046325684px] pr-[117.34200286865234px] pl-0 box-border">
                                    <div className="relative tracking-[-0.08px] leading-[21.6px] font-medium inline-block max-w-[167.74200439453125px]">
                                        Privacy
                                    </div>
                                </div>
                                <div className="absolute w-full top-[57.6px] right-[0px] left-[0px] flex flex-col items-start justify-start py-[3.5999999046325684px] pr-[34.5420036315918px] pl-0 box-border">
                                    <div className="relative tracking-[-0.08px] leading-[21.6px] font-medium inline-block max-w-[167.74200439453125px]">{`Terms & Conditions`}</div>
                                </div>
                            </div>
                            <div className="self-stretch relative w-[97.4px]">
                                <div className="absolute w-full top-[0px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-[55.99800109863281px] pl-0 box-border opacity-[0.9] text-3xs-9">
                                    <div className="relative tracking-[0.5px] leading-[21.6px] lowercase inline-block max-w-[97.39800262451172px]">
                                        Connect
                                    </div>
                                </div>
                                <div className="absolute w-full top-[28.8px] right-[0px] left-[0px] flex flex-col items-start justify-start py-[3.5999999046325684px] pr-[48.79800033569336px] pl-0 box-border">
                                    <div className="relative tracking-[-0.08px] leading-[21.6px] font-medium inline-block max-w-[97.39800262451172px]">
                                        Twitter
                                    </div>
                                </div>
                                <div className="absolute w-full top-[57.6px] right-[0px] left-[0px] flex flex-col items-start justify-start py-[3.5999999046325684px] pr-[29.898000717163086px] pl-0 box-border">
                                    <div className="relative tracking-[-0.08px] leading-[21.6px] font-medium inline-block max-w-[97.39800262451172px]">
                                        Facebook
                                    </div>
                                </div>
                                <div className="absolute w-full top-[86.4px] right-[0px] left-[0px] flex flex-col items-start justify-start py-[3.5999999046325684px] pr-[28.998001098632812px] pl-0 box-border">
                                    <div className="relative tracking-[-0.08px] leading-[21.6px] font-medium inline-block max-w-[97.39800262451172px]">
                                        Instagram
                                    </div>
                                </div>
                                <div className="absolute w-full top-[115.2px] right-[0px] left-[0px] flex flex-col items-start justify-start py-[3.5999999046325684px] pr-[39.79800033569336px] pl-0 box-border">
                                    <div className="relative tracking-[-0.08px] leading-[21.6px] font-medium inline-block max-w-[97.39800262451172px]">
                                        LinkedIn
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute h-[calc(100%_-_529.2px)] w-[calc(100%_-_57.6px)] top-[471.6px] right-[32.4px] bottom-[57.6px] left-[25.2px] flex flex-col items-start justify-start pt-0 pb-[31.5px] pr-[1239.73193359375px] pl-0 box-border text-[12.6px]">
                        <div className="rounded-8980xl-1 flex flex-row items-start justify-start pt-[6.300000190734863px] pb-[5.399999618530273px] pr-[23.86800193786621px] pl-[22.5px] border-[0.9px] border-solid border-white">
                            <div className="relative tracking-[-0.08px] leading-[18px] font-medium">
                                Join our team  ↗
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-[161px] left-[787px] leading-[61.51px] font-medium">
                <p className="m-0">{`Book `}</p>
                <p className="m-0">{`& Travel`}</p>
            </div>
            <div className="absolute top-[303px] left-[787px] text-13xl leading-[45.51px] font-medium">
                Your Ultimate Space Adventure Planner
            </div>
            <div className="absolute top-[379px] left-[795px] rounded-3xl bg-nav-bar-glass box-border w-[836px] h-[695px] border-[1px] border-solid border-stokes-glass-nav" />
            <div className="absolute top-[379px] left-[795px] w-[836px]" />
            <div className="absolute top-[429px] left-[848px] w-[730px] flex flex-col items-start justify-start gap-[36px] text-13xl">
                <div className="flex flex-col items-start justify-start gap-[20px]">
                    <div className="relative leading-[45.51px] font-medium">
                        Destination
                    </div>
                    <div className="rounded-sm bg-nav-bar-glass flex flex-row items-center justify-center py-5 px-2.5 text-5xl border-[1px] border-solid border-stokes-glass-nav">
                        <div className="relative leading-[45.51px] font-medium">
                            {" "}
                            Moon, Titanium
                        </div>
                    </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                    <div className="relative leading-[45.51px] font-medium">Check-in</div>
                    <div className="rounded-sm bg-nav-bar-glass flex flex-row items-center justify-center py-5 px-2.5 gap-[12px] text-5xl border-[1px] border-solid border-stokes-glass-nav">
                        <div className="relative leading-[45.51px] font-medium">
                            Friday, 27 Oct,2023
                        </div>
                        <img
                            className="relative w-[17.36px] h-[9.47px]"
                            alt=""
                            src="/group-2.svg"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[20px]">
                    <div className="relative leading-[45.51px] font-medium">People</div>
                    <div className="rounded-sm bg-nav-bar-glass flex flex-row items-center justify-center py-5 px-2.5 gap-[12px] text-5xl border-[1px] border-solid border-stokes-glass-nav">
                        <div className="relative leading-[45.51px] font-medium">2</div>
                        <img
                            className="relative w-[17.36px] h-[9.47px]"
                            alt=""
                            src="/group-2.svg"
                        />
                    </div>
                </div>
            </div>
            <div className="absolute top-[894px] left-[848px] rounded-sm bg-nav-bar-glass box-border w-[730px] flex flex-row items-center justify-center py-5 px-2.5 text-5xl border-[1px] border-solid border-stokes-glass-nav">
                <div className="relative leading-[45.51px] font-medium">
                    Explore More
                </div>
            </div>
            <div className="absolute top-[1162px] left-[102px] leading-[45.51px] font-medium">
                Explore
            </div>
            <div className="absolute top-[1245px] left-[95px] flex flex-col items-end justify-start gap-[36px]">
                <div className="rounded-3xl bg-nav-bar-glass flex flex-row items-center justify-start py-12 pr-[183px] pl-[60px] gap-[136px] border-[1px] border-solid border-stokes-glass-nav">
                    <img
                        className="relative w-[330px] h-[330px] object-cover"
                        alt=""
                        src="/unsplash9dtg44qhx1q@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start gap-[40px]">
                        <div className="flex flex-col items-start justify-start gap-[24px]">
                            <div className="relative leading-[45.51px] font-medium">Moon</div>
                            <div className="relative text-7xl leading-[45.51px] font-medium flex items-center w-[450px]">
                                Lorem ipsum dolor sit amet consectetur. Fusce ornare tortor sit
                                elementum suspendisse in. Sed varius massa facilisi dolor. Sit
                                bibendum in dui velit.
                            </div>
                        </div>
                        <div className="bg-black flex flex-row items-center justify-center py-3 px-6 text-13xl">
                            <div className="relative leading-[45.51px] font-medium">
                                Book now
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-3xl bg-nav-bar-glass flex flex-row items-center justify-start py-12 pr-[183px] pl-[60px] gap-[136px] border-[1px] border-solid border-stokes-glass-nav">
                    <img
                        className="relative w-[330px] h-[330px] object-cover"
                        alt=""
                        src="/mars-1@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start gap-[40px]">
                        <div className="flex flex-col items-start justify-start gap-[24px]">
                            <div className="relative leading-[45.51px] font-medium">Mars</div>
                            <div className="relative text-7xl leading-[45.51px] font-medium flex items-center w-[450px]">
                                Lorem ipsum dolor sit amet consectetur. Fusce ornare tortor sit
                                elementum suspendisse in. Sed varius massa facilisi dolor. Sit
                                bibendum in dui velit.
                            </div>
                        </div>
                        <div className="bg-black flex flex-row items-center justify-center py-3 px-6 text-13xl">
                            <div className="relative leading-[45.51px] font-medium">
                                Book now
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-3xl bg-nav-bar-glass flex flex-row items-center justify-start py-12 pr-[183px] pl-[60px] gap-[136px] border-[1px] border-solid border-stokes-glass-nav">
                    <img
                        className="relative w-[330px] h-[330px] object-cover"
                        alt=""
                        src="/unsplash9dtg44qhx1q@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start gap-[40px]">
                        <div className="flex flex-col items-start justify-start gap-[24px]">
                            <div className="relative leading-[45.51px] font-medium">Moon</div>
                            <div className="relative text-7xl leading-[45.51px] font-medium flex items-center w-[450px]">
                                Lorem ipsum dolor sit amet consectetur. Fusce ornare tortor sit
                                elementum suspendisse in. Sed varius massa facilisi dolor. Sit
                                bibendum in dui velit.
                            </div>
                        </div>
                        <div className="bg-black flex flex-row items-center justify-center py-3 px-6 text-13xl">
                            <div className="relative leading-[45.51px] font-medium">
                                Book now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
