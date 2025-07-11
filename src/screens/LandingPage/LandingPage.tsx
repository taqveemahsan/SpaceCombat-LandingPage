import React from "react";

const heroBackground = new URL("../../Images/Group 11.png", import.meta.url).href;
const logoImage = new URL("../../Images/Logo/Group 1.png", import.meta.url).href;
const downloadLogo = new URL("../../Images/Logo/Group 9.png", import.meta.url).href;
const playIcon = new URL("../../Images/Icons/Frame 4.png", import.meta.url).href;
const playButton = new URL("../../Images/Icons/play.png", import.meta.url).href;
const trailerThumbnail = new URL("../../Images/Posts/image.png", import.meta.url).href;
const footerDivider = new URL("../../Images/Footer/Layer_1.png", import.meta.url).href;
const planeImage = new URL("../../Images/Footer/plane.png", import.meta.url).href;
import { Button } from "../../components/ui/button";
import { Twitter, BookOpen } from "lucide-react";

// Game feature card images with text baked in
const gameFeatures = [
  {
    background: new URL("../../Images/Posts/Layer_1.png", import.meta.url).href,
    alt: "Advanced AI Enemies",
  },
  {
    background: new URL("../../Images/Posts/Layer_2.png", import.meta.url).href,
    alt: "Realistic Flight Physics",
  },
  {
    background: new URL("../../Images/Posts/Layer_3.png", import.meta.url).href,
    alt: "Vast Environments",
  },
  {
    background: new URL("../../Images/Posts/Layer_4.png", import.meta.url).href,
    alt: "Single or Multiplayer Ready",
  },
];

// Game screenshots data
const gameScreenshots = [
  {
    src: new URL("../../Images/Posts/image 2.png", import.meta.url).href,
    alt: "Game screenshot 1",
  },
  {
    src: new URL("../../Images/Posts/image 4.png", import.meta.url).href,
    alt: "Game screenshot 2",
  },
  {
    src: new URL("../../Images/Posts/image 3.png", import.meta.url).href,
    alt: "Game screenshot 3",
  },
  {
    src: new URL("../../Images/Posts/image 7.png", import.meta.url).href,
    alt: "Game screenshot 4",
  },
  {
    src: new URL("../../Images/Posts/image 6.png", import.meta.url).href,
    alt: "Game screenshot 5",
  },
  {
    src: new URL("../../Images/Posts/image 5.png", import.meta.url).href,
    alt: "Game screenshot 6",
  },
];

export const LandingPage = (): JSX.Element => {
  return (
    <div className="relative flex flex-col items-center w-full overflow-hidden min-h-screen">
      {/* Page background */}
      <div className="absolute inset-0 -z-10 h-full">
        <img
          className="w-full h-full object-cover object-top"
          alt="Space combat background"
          src={heroBackground}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
      </div>

      <div className="relative w-full max-w-screen-2xl mx-auto">
        {/* Navigation */}
        <header className="relative z-10 flex items-center justify-between pt-8 pb-4 px-4 md:px-8">
          <div className="flex items-center group cursor-pointer transition-all duration-300 hover:scale-105">
            <img src={logoImage} alt="Galaxion logo" />
          </div>
          <Button
            asChild
            variant="outline"
            className="h-10 px-5 bg-white/90 backdrop-blur-sm rounded-[68px] [font-family:'Audiowide',Helvetica] text-[#f9582d] text-sm md:text-base font-medium tracking-wide hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <a
              href="https://galaxion-fun.gitbook.io/galaxion.fun"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gitbook
            </a>
          </Button>
        </header>

        {/* Hero Section */}
        <section className="relative z-10 mt-16 px-4 md:px-8 lg:px-[155px] text-center lg:text-left">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center lg:justify-start">
            <h1 className="max-w-[753px] blur-[8px] [font-family:'Audiowide',Helvetica] text-[#f8572d] text-3xl md:text-5xl lg:text-[67.1px] leading-tight opacity-60">
              UNLEASH CHAOS AMONG THE STARS
            </h1>
          </div>

          <h1 className="relative max-w-[753px] mx-auto lg:mx-0 [font-family:'Audiowide',Helvetica] font-normal text-white text-3xl md:text-5xl lg:text-[67.1px] leading-tight tracking-wide drop-shadow-2xl">
            UNLEASH CHAOS AMONG THE STARS
          </h1>

          <p className="w-full max-w-[721px] mx-auto lg:mx-0 mt-8 [font-family:'Montserrat',Helvetica] font-normal text-white text-lg md:text-2xl lg:text-3xl leading-relaxed drop-shadow-lg">
            Master your ship. Crush enemy fleets. Become the galaxy's most feared pilot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center lg:justify-start">
            <Button
              asChild
              className="h-[52px] px-[42px] py-3.5 bg-gradient-to-r from-[#f8572d] to-[#e04d27] rounded-[68px] [font-family:'Audiowide',Helvetica] text-lg font-medium tracking-wide shadow-2xl hover:shadow-[#f8572d]/50 hover:scale-105 transition-all duration-300 border-2 border-[#f8572d]/30 flex items-center gap-3"
            >
              <a
                href="https://app.galaxion.fun/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Play Now
              </a>
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                document
                  .getElementById('trailer-section')?.scrollIntoView({
                    behavior: 'smooth',
                  })
              }
              className="h-[52px] px-[42px] py-3.5 bg-white/95 backdrop-blur-sm rounded-[68px] [font-family:'Audiowide',Helvetica] text-[#f9582d] text-lg font-medium tracking-wide hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-xl"
            >
              {/* <img className="w-6 h-6" alt="Download icon" src={downloadLogo} /> */}
              Watch Trailer
            </Button>
          </div>
        </section>

        {/* Game Features Section */}
        <section
          className="relative z-10 mt-[100px] md:mt-[150px] lg:mt-[200px] px-4 md:px-8 lg:px-[155px]"
        >
          <h2 className="text-center [font-family:'Audiowide',Helvetica] font-normal text-white text-3xl md:text-5xl lg:text-[67.1px] mb-8 tracking-wide drop-shadow-2xl">
            GAME FEATURES
          </h2>

          <p className="w-full max-w-[1037px] mx-auto text-center [font-family:'Montserrat',Helvetica] font-normal text-white text-lg md:text-2xl lg:text-3xl mb-16 leading-relaxed drop-shadow-lg">
            Explore a high-speed space shooter packed with adrenaline, strategy, and chaos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 justify-items-center">
            {gameFeatures.map((feature, index) => (
              <div
                key={index}
                className="relative w-full max-w-xs aspect-[347/433] group cursor-pointer overflow-hidden rounded-lg"
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover rounded-lg filter drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
                  alt={feature.alt}
                  src={feature.background}
                />
              </div>
            ))}
          </div>
        </section>

        {/* In-Game Experience Section */}
        <section className="relative z-10 mt-[100px] md:mt-[150px] lg:mt-[200px] px-4 md:px-8 lg:px-[155px]">
          <h2 className="text-center [font-family:'Audiowide',Helvetica] font-normal text-white text-3xl md:text-5xl lg:text-[67.1px] mb-8 tracking-wide drop-shadow-2xl">
            IN-GAME EXPERIENCE
          </h2>

          <p className="w-full max-w-[1037px] mx-auto text-center [font-family:'Montserrat',Helvetica] font-normal text-white text-lg md:text-2xl lg:text-3xl mb-16 leading-relaxed drop-shadow-lg">
            Witness the combat, chaos, and cosmic beauty from the cockpit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameScreenshots.map((screenshot, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-lg"
              >
                <img
                  className="w-full aspect-video object-cover transition-all duration-500 group-hover:scale-110 filter drop-shadow-xl"
                  alt={screenshot.alt}
                  src={screenshot.src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Trailer Section */}
        <section
        id="trailer-section"
        className="relative z-10 mt-[100px] md:mt-[150px] lg:mt-[200px] px-4 md:px-8 lg:px-[155px]">
          <h2 className="text-center [font-family:'Audiowide',Helvetica] font-normal text-white text-3xl md:text-5xl lg:text-[67.1px] mb-8 tracking-wide drop-shadow-2xl">
            WATCH THE TRAILER
          </h2>

          <p className="w-full max-w-[1037px] mx-auto text-center [font-family:'Montserrat',Helvetica] font-normal text-white text-lg md:text-2xl lg:text-3xl mb-16 leading-relaxed drop-shadow-lg">
            Experience the thrill before you take control.
          </p>

          <div className="relative mx-auto w-full max-w-[1314px] aspect-video group cursor-pointer overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 filter drop-shadow-2xl"
              alt="Game trailer thumbnail"
              src={trailerThumbnail}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:scale-110">
              <img
                className="w-32 h-32 md:w-40 md:h-40 filter drop-shadow-2xl"
                alt="Play button"
                src={playButton}
              />
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative z-10 mt-[100px] md:mt-[150px] lg:mt-[200px] px-4 md:px-8 lg:px-[155px]">
          <div className="relative flex flex-col items-center">
          <img
            src={planeImage}
            alt=""
            className="hidden lg:block absolute right-[-363px] top-1/2 -translate-y-1/2 w-[860px] h-[600px] object-contain pointer-events-none"
          />

            <div className="flex-1">
              <h2 className="text-center [font-family:'Audiowide',Helvetica] font-normal text-white text-3xl md:text-5xl lg:text-[67.1px] mb-8 tracking-wide drop-shadow-2xl">
                READY TO TAKE THE FLIGHT?
              </h2>

              <p className="w-full max-w-[1037px] mx-auto text-center [font-family:'Montserrat',Helvetica] font-normal text-white text-lg md:text-2xl lg:text-3xl mb-16 leading-relaxed drop-shadow-lg">
                Available on Web, PC, and more.
                <br /> Join now and lead your fleet to victory.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button
                  asChild
                  className="h-[52px] px-[57px] py-3.5 bg-gradient-to-r from-[#f8572d] to-[#e04d27] rounded-[68px] [font-family:'Audiowide',Helvetica] text-lg font-medium tracking-wide shadow-2xl hover:shadow-[#f8572d]/50 hover:scale-105 transition-all duration-300 flex items-center gap-[21px] border-2 border-[#f8572d]/30"
                >
                  <a
                    href="https://app.galaxion.fun/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Play Now
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="h-[52px] px-[51px] py-[13px] bg-white/95 backdrop-blur-sm rounded-[68px] [font-family:'Audiowide',Helvetica] text-[#f9582d] text-lg font-medium tracking-wide hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-[21px] shadow-xl"
                >
                  Buy Token
                </Button>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full mt-[100px] md:mt-[150px] lg:mt-[200px]">
        <div className="relative w-full">
          <img
            src={footerDivider}
            alt=""
            className="absolute top-0 left-0 w-full -translate-y-1/2 pointer-events-none"
          />
          <div className="w-full h-auto min-h-[290px] bg-gradient-to-b from-[#222222] via-[#111111] to-black flex flex-col items-center justify-center py-12 px-4">
            <div className="flex items-center mb-8 group cursor-pointer transition-all duration-300 hover:scale-105">
              <img src={logoImage} alt="Galaxion logo" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                asChild
                className="h-[52px] px-[57px] py-3.5 bg-gradient-to-r from-[#f8572d] to-[#e04d27] rounded-[68px] [font-family:'Audiowide',Helvetica] text-lg font-medium tracking-wide shadow-2xl hover:shadow-[#f8572d]/50 hover:scale-105 transition-all duration-300 flex items-center gap-[21px] border-2 border-[#f8572d]/30"
              >
                <a
                  href="https://app.galaxion.fun/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play Now
                </a>
              </Button>

              <Button
                variant="outline"
                className="h-[52px] px-[51px] py-[13px] bg-white/95 backdrop-blur-sm rounded-[68px] [font-family:'Audiowide',Helvetica] text-[#f9582d] text-lg font-medium tracking-wide hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-[21px] shadow-xl"
              >
                Buy Token
              </Button>
            </div>

            <div className="flex gap-6 mb-8">
              <a
                href="https://x.com/Galaxiondotfun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#f8572d]"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://galaxion-fun.gitbook.io/galaxion.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#f8572d]"
              >
                <BookOpen className="w-6 h-6" />
              </a>
            </div>

            <p className="[font-family:'Montserrat',Helvetica] font-normal text-white/80 text-sm text-center leading-relaxed">
              Copyright © 2025 Space Combat All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>
  );
};
