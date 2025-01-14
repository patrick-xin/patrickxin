import GlowingDots from "../glowing-dots";

const Hero = () => {
  return (
    <div className="relative mx-auto flex h-[60vh] lg:h-[90vh] w-full flex-col justify-center">
      <GlowingDots />
      <div className="relative mx-auto">
        <div className="text-sm lg:text-xl font-medium">
          <div className="relative overflow-hidden text-start font-code">
            <div className="relative inline-block">Hello</div>{" "}
            <div className="relative inline-block">from</div>{" "}
            <div className="relative inline-block">Patrick</div>
          </div>
        </div>
        <div className="relative pt-8 font-black text-4xl md:text-6xl lg:text-8xl">
          <div>
            <div className="absolute z-20 inline-block rotate-[-2deg]">
              <Gradient />
              <div className="overflow-hidden">
                <span className="relative block text-primary leading-[4rem] md:leading-[6rem] lg:leading-[8rem]">
                  Crafting
                </span>
              </div>
              <Clog />
            </div>
            <div className="relative z-10 leading-[4rem] md:leading-[6rem] lg:leading-[8rem]">
              <div>
                <span className="inline-block rotate-[-2deg] text-primary">
                  Crafting
                </span>{" "}
                <span className="inline-block bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Digital
                </span>{" "}
              </div>
              <div className="overflow-hidden bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-start text-transparent">
                <span className="inline-block bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Experiences
                </span>{" "}
                <span className="inline-block bg-gradient-to-tr from-muted-foreground to-foreground bg-clip-text text-transparent">
                  Beyond
                </span>{" "}
              </div>
              <span className="inline-block bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
                Expectations
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const Gradient = () => {
  return (
    <div className="-sm:-top-2 -sm:-inset-x-2 absolute -inset-x-3 -top-3 bottom-0 z-0 bg-gradient-to-l from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-md md:-left-5 md:-right-6 md:-top-4" />
  );
};

const Clog = () => {
  return (
    <div className="absolute -right-6 -top-6 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 md:-right-12 md:-top-12 md:h-12 md:w-12">
      <div className="h-3 w-3 md:h-6 md:w-6">
        <svg
          style={{
            transitionDuration: "400",
          }}
          className="animate-spin"
          viewBox="0 0 10 10"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m3.871 8.473 1.819.255.225-1.604-.064-1.1.016-.107.099.069.727.838 1.278.998 1.13-1.45-1.277-.997-.994-.495-.1-.068.146-.061 1.065-.205 1.503-.607-.688-1.705-1.503.606-.93.606-.115.038.02-.133.363-1.04.226-1.604L4.999.451l-.226 1.605.064 1.1-.023.16-.122-.1-.7-.834-1.278-.997-1.131 1.45 1.278.997.967.49.122.1-.114.038-1.092.2-1.503.607.687 1.706 1.503-.607.93-.606.115-.038-.015.107-.364 1.04-.226 1.604Z" />
        </svg>
      </div>
    </div>
  );
};
