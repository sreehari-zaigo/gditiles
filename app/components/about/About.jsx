import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import AnimatedElement from "../AnimatedElement";
import { slideInfromBottom } from "@/utils/motions";

const About = () => {
  const circleAnimation = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };
  


  const itemVariants = slideInfromBottom("0.3")
  const itemVariants2 = slideInfromBottom("0.5")
  const itemVariants3 = slideInfromBottom("0.6")
  const itemVariants4 = slideInfromBottom("0.7")

  return (
    <>
      <section className="pt-10 lg:pt-[140px] pb-12 lg:pb-[90px] overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <AnimatedElement animationProperties={circleAnimation}>
                      <img
                        src="/GreyVein-1920-Statuario-ls.jpg"
                        alt=""
                        className="w-full rounded-2xl object-cover h-[17rem]"
                      />
                    </AnimatedElement>
                  </div>
                  <div className="py-3 sm:py-4">
                    <AnimatedElement animationProperties={circleAnimation}>
                      <img
                        src="/Newport-1920-Harbour-ls.jpg"
                        alt=""
                        className="w-full rounded-2xl"
                      />
                    </AnimatedElement>
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <AnimatedElement animationProperties={circleAnimation}>
                      <img
                        src="/TerazzoStone-Jelly-White-ls1.jpg"
                        alt=""
                        className="w-full rounded-2xl object-cover h-[19rem]"
                      />
                    </AnimatedElement>
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <AnimatedElement animationProperties={circleAnimation}>
                        <svg
                          width={134}
                          height={106}
                          viewBox="0 0 134 106"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="1.66667"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 1.66667 104)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="16.3333"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 16.3333 104)"
                            fill="#FF6600"
                          />
                          <circle
                            cx={31}
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 31 104)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="45.6667"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 45.6667 104)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="60.3334"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 60.3334 104)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="88.6667"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 88.6667 104)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="117.667"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 117.667 104)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="74.6667"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 74.6667 104)"
                            fill="#FF6600"
                          />
                          <circle
                            cx={103}
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 103 104)"
                            fill="#FF6600"
                          />
                          <circle
                            cx={132}
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 132 104)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="1.66667"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 89.3333)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="16.3333"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 89.3333)"
                            fill="#FF6600"
                          />
                          <circle
                            cx={31}
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 31 89.3333)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="45.6667"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 89.3333)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="60.3333"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 60.3333 89.3338)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="88.6667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 88.6667 89.3338)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="117.667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 117.667 89.3338)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="74.6667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 74.6667 89.3338)"
                            fill="#FF6600"
                          />
                          <circle
                            cx={103}
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 103 89.3338)"
                            fill="#FF6600"
                          />
                          <circle
                            cx={132}
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 132 89.3338)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="1.66667"
                            cy="74.6673"
                            r="1.66667"
                            transform="rotate(-90 1.66667 74.6673)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="1.66667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 31.0003)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="16.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 16.3333 74.6668)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="16.3333"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 31.0003)"
                            fill="#FF6600"
                          />
                          <circle
                            cx={31}
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 31 74.6668)"
                            fill="#FF6600"
                          />
                          <circle
                            cx={31}
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 31 31.0003)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="45.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 45.6667 74.6668)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="45.6667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 31.0003)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="60.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 60.3333 74.6668)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="60.3333"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 60.3333 30.9998)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="88.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 88.6667 74.6668)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="88.6667"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 88.6667 30.9998)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="117.667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 117.667 74.6668)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="117.667"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 117.667 30.9998)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="74.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 74.6667 74.6668)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="74.6667"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 74.6667 30.9998)"
                            fill="#FF6600"
                          />
                          <circle
                            cx={103}
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 103 74.6668)"
                            fill="#FF6600"
                          />
                          <circle
                            cx={103}
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 103 30.9998)"
                            fill="#FF6600"
                          />
                          <circle
                            cx={132}
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 132 74.6668)"
                            fill="#FF6600"
                          />
                          <circle
                            cx={132}
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 132 30.9998)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="1.66667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 60.0003)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="1.66667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 16.3333)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="16.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 60.0003)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="16.3333"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 16.3333)"
                            fill="#FF6600"
                          />
                          <circle
                            cx={31}
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 31 60.0003)"
                            fill="#FF6600"
                          />
                          <circle
                            cx={31}
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 31 16.3333)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="45.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 60.0003)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="45.6667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 16.3333)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="60.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 60.3333 60.0003)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="60.3333"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 60.3333 16.3333)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="88.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 88.6667 60.0003)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="88.6667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 88.6667 16.3333)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="117.667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 117.667 60.0003)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="117.667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 117.667 16.3333)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="74.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 74.6667 60.0003)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="74.6667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 74.6667 16.3333)"
                            fill="#FF6600"
                          />
                          <circle
                            cx={103}
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 103 60.0003)"
                            fill="#FF6600"
                          />
                          <circle
                            cx={103}
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 103 16.3333)"
                            fill="#FF6600"
                          />
                          <circle
                            cx={132}
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 132 60.0003)"
                            fill="#FF6600"
                          />
                          <circle
                            cx={132}
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 132 16.3333)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="1.66667"
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 45.3333)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="1.66667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 1.66667 1.66683)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="16.3333"
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 45.3333)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="16.3333"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 16.3333 1.66683)"
                            fill="#FF6600"
                          />
                          <circle
                            cx={31}
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 31 45.3333)"
                            fill="#FF6600"
                          />
                          <circle
                            cx={31}
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 31 1.66683)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="45.6667"
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 45.3333)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="45.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 45.6667 1.66683)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="60.3333"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 60.3333 45.3338)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="60.3333"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 60.3333 1.66683)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="88.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 88.6667 45.3338)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="88.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 88.6667 1.66683)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="117.667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 117.667 45.3338)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="117.667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 117.667 1.66683)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="74.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 74.6667 45.3338)"
                            fill="#FF6600"
                          />
                          <circle
                            cx="74.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 74.6667 1.66683)"
                            fill="#FF6600"
                          />
                          <circle
                            cx={103}
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 103 45.3338)"
                            fill="#FF6600"
                          />
                          <circle
                            cx={103}
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 103 1.66683)"
                            fill="#FF6600"
                          />
                          <circle
                            cx={132}
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 132 45.3338)"
                            fill="#FF6600"
                          />
                          <circle
                            cx={132}
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 132 1.66683)"
                            fill="#FF6600"
                          />
                        </svg>
                      </AnimatedElement>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <AnimatedElement animationProperties={itemVariants}>
                  <span className="block mb-2 text-lg font-semibold text_orange">
                    Why Choose Us
                  </span>
                </AnimatedElement>
                <AnimatedElement animationProperties={itemVariants2}>
                  <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
                    Make our customers happy by giving services.
                  </h2>
                </AnimatedElement>
                <AnimatedElement animationProperties={itemVariants3}>
                  <p className="mb-8 text-base text-body-color">
                    At GDI Tiles, our mission is clear: to infuse elegance into every space, transcending construction categories,
                    from budget homes to luxurious design masterpieces. We firmly believe that regardless of budget constraints, every
                    space deserves the distinctive touch of sophistication that only our premium tiles can deliver.
                  </p>
                </AnimatedElement>
                {/* <a
                  href="/#"
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-normal text-center text-white rounded-lg bg-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
                > */}
                <AnimatedElement animationProperties={itemVariants4}>
                  <Button radius="sm" className="bg-orange text-white">
                    <Link href={"/about"} >Know more</Link>
                  </Button>
                </AnimatedElement>
                {/* </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
