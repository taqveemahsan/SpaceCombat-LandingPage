import React from "react";
import { Button } from "../../components/ui/button";

// Game feature data for mapping - Updated with layer images
const gameFeatures = [
  {
    title: "ADVANCED\nAI ENEMIES",
    description: "Fight intelligent foes that adapt to your playstyle.",
    background: "/src/Images/Posts/Layer_1.png",
  },
  {
    title: "Realistic Flight Physics",
    description: "Control your ship with inertia-based space mechanics.",
    background: "/src/Images/Posts/Layer_2.png",
  },
  {
    title: "VAST ENVIRONMENTS",
    description: "From asteroid fields to deep-space stations.",
    background: "/src/Images/Posts/Layer_3.png",
  },
  {
    title: "SINGLE OR MULTIPLAYER READY",
    description: "Designed to expand into any mode.",
    background: "/src/Images/Posts/Layer_4.png",
  },
];

// Game screenshots data
const gameScreenshots = [
  { src: "/src/Images/Posts/image 2.png", alt: "Game screenshot 1" },
  { src: "/src/Images/Posts/image 4.png", alt: "Game screenshot 2" },
  { src: "/src/Images/Posts/image 3.png", alt: "Game screenshot 3" },
  { src: "/src/Images/Posts/image 7.png", alt: "Game screenshot 4" },
  { src: "/src/Images/Posts/image 6.png", alt: "Game screenshot 5" },
  { src: "/src/Images/Posts/image 5.png", alt: "Game screenshot 6" },
];

export const LandingPage = (): JSX.Element => {
  return (
    <div className="bg-black flex flex-col items-center w-full overflow-hidden min-h-screen">
      <div className="relative w-full max-w-[1920px]">
        {/* Main Background - Group 11.png - NO SCALING */}
        <div className="fixed inset-0 z-0">
          <img
            className="h-full w-full object-cover object-center"
            alt="Space combat background"
            src="/src/Images/Group 11.png"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
        </div>

        {/* Navigation with improved styling */}
        <header className="relative z-10 flex justify-center pt-8 pb-4">
          <div className="flex items-center group cursor-pointer transition-all duration-300 hover:scale-105">
            <img
              className="w-[35px] h-[45px] filter drop-shadow-lg"
              alt="Galaxion logo"
              src="/src/Images/Logo/Group 1.png"
            />
            <span className="ml-3 [font-family:'Audiowide',Helvetica] font-normal text-white text-[26.1px] tracking-wider drop-shadow-lg">
              Galaxion
            </span>
          </div>
        </header>

        {/* Hero Section with enhanced visual effects */}
        <section className="relative z-10 mt-32 px-4 md:px-8 lg:px-[155px]">
          {/* Enhanced blurred text effect */}
          <div className="absolute w-full max-w-[753px] top-[323px] left-1/2 transform -translate-x-1/2 lg:left-[155px] lg:transform-none blur-[8px] [font-family:'Audiowide',Helvetica] font-normal text-[#f8572d] text-3xl md:text-5xl lg:text-[67.1px] leading-tight opacity-60">
            UNLEASH CHAOS AMONG THE STARS
          </div>

          <h1 className="relative w-full max-w-[753px] mx-auto lg:mx-0 [font-family:'Audiowide',Helvetica] font-normal text-white text-3xl md:text-5xl lg:text-[67.1px] leading-tight tracking-wide drop-shadow-2xl">
            UNLEASH CHAOS AMONG THE STARS
          </h1>

          <p className="w-full max-w-[721px] mx-auto lg:mx-0 mt-8 [font-family:'Montserrat',Helvetica] font-normal text-white text-lg md:text-2xl lg:text-3xl leading-relaxed drop-shadow-lg">
            Master your ship. Crush enemy fleets. Become the galaxy&apos;s most
            feared pilot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center lg:justify-start">
            <Button className="h-[52px] px-[42px] py-3.5 bg-gradient-to-r from-[#f8572d] to-[#e04d27] rounded-[68px] [font-family:'Audiowide',Helvetica] text-lg font-medium tracking-wide shadow-2xl hover:shadow-[#f8572d]/50 hover:scale-105 transition-all duration-300 border-2 border-[#f8572d]/30 flex items-center gap-3">
              <img
                className="w-[33.01px] h-[21.7px] filter drop-shadow-md"
                alt="Play icon"
                src="/src/Images/Icons/Frame 4.png"
              />
              Play Now
            </Button>

            <Button
              variant="outline"
              className="h-[52px] px-[23px] py-3.5 rounded-[68px] border-2 border-[#f8572d] bg-transparent backdrop-blur-sm [font-family:'Audiowide',Helvetica] text-[#f8572d] text-lg font-medium tracking-wide hover:bg-[#f8572d]/20 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Watch Trailer
            </Button>
          </div>
        </section>

        {/* Game Features Section with layer images */}
        <section className="relative z-10 mt-[200px] md:mt-[300px] lg:mt-[400px] px-4 md:px-8 lg:px-[155px]">
          <h2 className="text-center [font-family:'Audiowide',Helvetica] font-normal text-white text-3xl md:text-5xl lg:text-[67.1px] mb-8 tracking-wide drop-shadow-2xl">
            GAME FEATURES
          </h2>

          <p className="w-full max-w-[1037px] mx-auto text-center [font-family:'Montserrat',Helvetica] font-normal text-white text-lg md:text-2xl lg:text-3xl mb-16 leading-relaxed drop-shadow-lg">
            Explore a high-speed space shooter packed with adrenaline, strategy,
            and chaos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 justify-items-center">
            {gameFeatures.map((feature, index) => (
              <div key={index} className="relative w-[351px] h-[433px] group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl"></div>
                
                <img
                  className="absolute w-[347px] h-[433px] top-0 left-0 rounded-lg filter drop-shadow-xl object-cover"
                  alt={`Feature card background ${index + 1}`}
                  src={feature.background}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg"></div>

                <h3 className="absolute w-full top-[280px] left-0 text-center [font-family:'Audiowide',Helvetica] font-normal text-white text-[24px] md:text-[28px] lg:text-[30.7px] tracking-wide drop-shadow-lg whitespace-pre-line px-4">
                  {feature.title}
                </h3>

                <p className="absolute w-full top-[340px] left-0 [font-family:'Montserrat',Helvetica] font-normal text-white text-lg text-center leading-relaxed drop-shadow-md px-4">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* In-Game Experience Section with improved grid */}
        <section className="relative z-10 mt-[200px] md:mt-[300px] lg:mt-[400px] px-4 md:px-8 lg:px-[155px]">
          <h2 className="text-center [font-family:'Audiowide',Helvetica] font-normal text-white text-3xl md:text-5xl lg:text-[67.1px] mb-8 tracking-wide drop-shadow-2xl">
            IN-GAME EXPERIENCE
          </h2>

          <p className="w-full max-w-[1037px] mx-auto text-center [font-family:'Montserrat',Helvetica] font-normal text-white text-lg md:text-2xl lg:text-3xl mb-16 leading-relaxed drop-shadow-lg">
            Witness the combat, chaos, and cosmic beauty from the cockpit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameScreenshots.map((screenshot, index) => (
              <div key={index} className="group cursor-pointer overflow-hidden rounded-lg">
                <img
                  className="w-full h-[200px] md:h-[250px] lg:h-[308px] object-cover transition-all duration-500 group-hover:scale-110 filter drop-shadow-xl"
                  alt={screenshot.alt}
                  src={screenshot.src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Trailer Section with enhanced play button */}
        <section className="relative z-10 mt-[200px] md:mt-[300px] lg:mt-[400px] px-4 md:px-8 lg:px-[155px]">
          <h2 className="text-center [font-family:'Audiowide',Helvetica] font-normal text-white text-3xl md:text-5xl lg:text-[67.1px] mb-8 tracking-wide drop-shadow-2xl">
            WATCH THE TRAILER
          </h2>

          <p className="w-full max-w-[1037px] mx-auto text-center [font-family:'Montserrat',Helvetica] font-normal text-white text-lg md:text-2xl lg:text-3xl mb-16 leading-relaxed drop-shadow-lg">
            Experience the thrill before you take control.
          </p>

          <div className="relative mx-auto w-full max-w-[1314px] h-[300px] md:h-[500px] lg:h-[739px] group cursor-pointer overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 filter drop-shadow-2xl"
              alt="Game trailer thumbnail"
              src="/src/Images/Posts/image.png"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:scale-110">
              <img 
                className="w-32 h-32 md:w-40 md:h-40 filter drop-shadow-2xl" 
                alt="Play button" 
                src="/src/Images/Icons/Frame 5.png" 
              />
            </div>
          </div>
        </section>

        {/* Call to Action Section with improved buttons */}
        <section className="relative z-10 mt-[200px] md:mt-[300px] lg:mt-[400px] px-4 md:px-8 lg:px-[155px]">
          <h2 className="text-center [font-family:'Audiowide',Helvetica] font-normal text-white text-3xl md:text-5xl lg:text-[67.1px] mb-8 tracking-wide drop-shadow-2xl">
            READY TO TAKE FLIGHT?
          </h2>

          <p className="w-full max-w-[1037px] mx-auto text-center [font-family:'Montserrat',Helvetica] font-normal text-white text-lg md:text-2xl lg:text-3xl mb-16 leading-relaxed drop-shadow-lg">
            Available on Web, PC, and more.
            <br /> Join now and lead your fleet to victory.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="h-[52px] px-[57px] py-3.5 bg-gradient-to-r from-[#f8572d] to-[#e04d27] rounded-[68px] [font-family:'Audiowide',Helvetica] text-lg font-medium tracking-wide shadow-2xl hover:shadow-[#f8572d]/50 hover:scale-105 transition-all duration-300 flex items-center gap-[21px] border-2 border-[#f8572d]/30">
              <img
                className="w-[33.01px] h-[21.7px] filter drop-shadow-md"
                alt="Play icon"
                src="/src/Images/Icons/Frame 4.png"
              />
              Play Now
            </Button>

            <Button
              variant="outline"
              className="h-[52px] px-[51px] py-[13px] bg-white/95 backdrop-blur-sm rounded-[68px] [font-family:'Audiowide',Helvetica] text-[#f9582d] text-lg font-medium tracking-wide hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-[21px] shadow-xl"
            >
              <img
                className="w-6 h-6"
                alt="Download icon"
                src="/src/Images/Logo/Group 9.png"
              />
              Download
            </Button>
          </div>
        </section>

        {/* Footer with enhanced styling */}
        <footer className="relative z-10 mt-[200px] md:mt-[300px] lg:mt-[400px]">
          <div className="w-full h-auto min-h-[290px] bg-gradient-to-b from-[#222222] via-[#111111] to-black flex flex-col items-center justify-center py-12 px-4">
            <div className="flex items-center mb-8 group cursor-pointer transition-all duration-300 hover:scale-105">
              <img
                className="w-[63px] h-[81px] filter drop-shadow-lg"
                alt="Galaxion logo"
                src="/src/Images/Logo/Group 1.png"
              />
              <span className="ml-4 [font-family:'Audiowide',Helvetica] font-normal text-white text-[32px] md:text-[46.4px] tracking-wider drop-shadow-lg">
                Galaxion
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="h-[35px] px-[38px] py-2.5 bg-gradient-to-r from-[#f8572d] to-[#e04d27] rounded-[45.15px] [font-family:'Audiowide',Helvetica] text-xs font-medium tracking-wide shadow-lg hover:shadow-[#f8572d]/50 hover:scale-105 transition-all duration-300 flex items-center gap-[9px]">
                <img
                  className="w-[22px] h-3.5 filter drop-shadow-sm"
                  alt="Play icon"
                  src="/src/Images/Icons/Frame 4.png"
                />
                Play Now
              </Button>

              <Button
                variant="outline"
                className="h-[35px] px-[34px] py-[9px] bg-white/95 backdrop-blur-sm rounded-[45.15px] [font-family:'Audiowide',Helvetica] text-[#f9582d] text-xs font-medium tracking-wide hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg"
              >
                <img
                  className="w-4 h-4"
                  alt="Download icon"
                  src="/src/Images/Logo/Group 9.png"
                />
                Download
              </Button>
            </div>

            <p className="[font-family:'Montserrat',Helvetica] font-normal text-white/80 text-sm text-center leading-relaxed">
              Copyright © 2025 Space Combat All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};