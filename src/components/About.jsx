import React from "react";
import useGsapTextEffect from "../utils/textEffect";
const AboutMe = () => {
  useGsapTextEffect(".fade-text");
  return (
    <section id="about">
      <div className="w-3/4  h-[1px] bg-black mx-auto"></div>
      <div className="py-32 relative">
        <div
          className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-24 bg-neutral-500 z-10"
          style={{
            clipPath:
              "polygon(70.71% 100%, 73.45% 81.73%, 50% 50%, 81.72% 73.45%, 100% 70.71%, 87.81% 56.77%, 50% 50%, 87.97% 44.23%, 100% 29.29%, 81.51% 26.07%, 50% 50%, 75.94% 17.75%, 70.71% 0%, 55.87% 10.11%, 50% 50%, 44.18% 10.99%, 29.29% 0%, 25.01% 18.93%, 50% 50%, 18.93% 25.01%, 0% 29.29%, 10.47% 42.93%, 49.75% 49.8%, 13.73% 54.15%, 0% 70.71%, 20% 70.71%, 50% 50%, 26.36% 80.38%, 29.29% 100%, 42.45% 86.28%, 50% 50%, 55.51% 86.72%)",
          }}
        ></div>

        <div className="w-full overflow-hidden">
          <h1 className="pb-24 text-center w-full tracking-tighter space-x-4 md:space-x-10 font-h text-[16vw] leading-[0.8] z-0">
            <span>ABOUT</span>
            <span>ME</span>
          </h1>
        </div>

        <div className="px-12 w-full text-zinc-500 flex justify-center relative">
          <div className="max-w-7xl flex flex-col items-start space-y-12 z-0">
            <div className="relative">
              {/*Left Polygon */}
              <div
                className="hidden 2xl:block 2xl:absolute  2xl:left-[-8vw] w-24 h-24 bg-neutral-400 z-10 transform rotate-180"
                style={{
                  clipPath:
                    "polygon(100% 50%, 83% 60.17%, 50% 50%, 59.1% 61.2%, 59.1% 67.36%, 53.79% 64.23%, 50% 50%, 40.55% 85.57%, 25% 93.3%, 22.79% 75.28%, 49.9% 50%, 35.05% 53.73%, 30.94% 50.19%, 35.05% 46.64%, 49.94% 50%, 50% 50%, 22.79% 23.3%, 25% 6.7%, 39.99% 14.16%, 49.87% 50%, 55.7% 35.68%, 60.96% 35.68%, 60.96% 40.65%, 50% 50%, 83% 40.19%)",
                }}
              ></div>
              {/*Right Polygon */}
              <div
                className="hidden 2xl:block 2xl:absolute  2xl:right-[-8vw] w-24 h-24 bg-neutral-400 z-10"
                style={{
                  clipPath:
                    "polygon(100% 50%, 83% 60.17%, 50% 50%, 59.1% 61.2%, 59.1% 67.36%, 53.79% 64.23%, 50% 50%, 40.55% 85.57%, 25% 93.3%, 22.79% 75.28%, 49.9% 50%, 35.05% 53.73%, 30.94% 50.19%, 35.05% 46.64%, 49.94% 50%, 50% 50%, 22.79% 23.3%, 25% 6.7%, 39.99% 14.16%, 49.87% 50%, 55.7% 35.68%, 60.96% 35.68%, 60.96% 40.65%, 50% 50%, 83% 40.19%)",
                }}
              ></div>

              <p className="fade-text text-left tracking-tight text-4xl leading-none space-y-5 whitespace-normal break-normal text-wrap-normal hyphens-none ">
                <span className="space-y-3">
                  Hello there, I’m Rohit — a passionate developer currently
                  pursuing my B.Tech in Information Technology from Delhi
                  Technological University. I enjoy building complete web
                  solutions that merge creative front-end design with strong
                  backend architecture and efficient database management.
                </span>
                <br />
                <span className="space-y-3">
                  Beyond coding, I’m drawn to art and design — sketching,
                  experimenting with visuals, and exploring how creativity can
                  enhance technology. I see development as a blend of logic and
                  expression, where every project is an opportunity to craft
                  something both functional and meaningful.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
