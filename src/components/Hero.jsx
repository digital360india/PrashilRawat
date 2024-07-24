import { useState, useEffect } from "react";

const Hero = () => {
  const [bgImage, setBgImage] = useState("/Prashilrawat.svg");

  useEffect(() => {
    const updateBgImage = () => {
      if (window.innerWidth < 768) {
        setBgImage("/bg.svg");
      } else {
        setBgImage("/Prashilrawat.svg");
      }
    };

    // Initial check
    updateBgImage();

    // Add event listener for window resize
    window.addEventListener("resize", updateBgImage);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateBgImage);
  }, []);
  return (
    <>
      <div
        className="w-full h-[130vh] md:h-[150vh] bg-no-repeat bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="px-10 pt-32 lg:px-16 lg:pt-44">
          <h1 className="text-[2rem] lg:text-[6rem] text-white pb-8 lg:pb-0">
            I AM <br /> PRASHIL RAWAT
          </h1>

          <div
            className="w-[12.813rem] h-28 bg-no-repeat relative text-white hidden lg:block"
            style={{ backgroundImage: `url('/anartist.svg')` }}
          >
            <h1 className="text-[2rem] text-center pt-3">An Artist</h1>
          </div>
          <div
            className="w-[12.813rem] h-20 bg-no-repeat relative text-white lg:hidden"
            style={{ backgroundImage: `url('/Group 6.svg')` }}
          >
            <h1 className="text-[1rem] absolute px-5 pt-3">An Artist</h1>
          </div>

          <div className="hidden md:block lg:block">
            <div className="flex gap-5">
              <h1 className="text-white text-[2rem]">IMDB: 7.1/10</h1>
              <a href="https://www.instagram.com/prashil_rawat?igsh=MWZ6MDZ6cnJ0djQ1MA==" className="cursor-pointer" target="_blank">
              <img src="instagram.svg" height={44} width={44} alt="insta" /></a>
              <a href="https://www.facebook.com/PrashilRawatddn?mibextid=ZbWKwL" className="cursor-pointer target:_blank" target="_blank">
              <img src="facebook.svg" height={44} width={44} alt="fb" /></a>
            </div>
          </div>
          <div className="md:hidden lg:hidden">
            <div className="flex gap-3">
              <a href="https://www.instagram.com/prashil_rawat?igsh=MWZ6MDZ6cnJ0djQ1MA==" className="cursor-pointer" target="_blank">
              <img src="instagram.svg" height={24} width={24} alt="insta" /></a>
              <a href="https://www.facebook.com/PrashilRawatddn?mibextid=ZbWKwL" className="cursor-pointer" target="_blank">
              <img src="facebook.svg" height={24} width={24} alt="fb"  /></a>
            </div>
            <h1 className="text-white text-[1rem]">IMDB: 7.1/10</h1>
          </div>
        </div>
      </div>
      {/* <div
        className="w-full h-[150vh] bg-no-repeat bg-cover bg-center relative "
        style={{ backgroundImage: `url('/Prashilrawat.svg')`}}
      >
        <div className="px-10 pt-32 lg:px-16 lg:pt-44">
          <h1 className="text-[2rem] lg:text-[6rem] text-white pb-8 lg:pb-0">
            I AM <br /> PRASHIL RAWAT
          </h1>

          <div
            className="w-[12.813rem] h-28 bg-no-repeat realtive text-white hidden lg:block"
            style={{ backgroundImage: `url('/anartist.svg')` }}
          >
            <h1 className="text-[2rem] text-center  pt-3">An Artist</h1>
          </div>
          <div
            className="w-[12.813rem] h-20 bg-no-repeat realtive text-white lg:hidden"
            style={{ backgroundImage: `url('/Group 6.svg')` }}
          >
            <h1 className="text-[1rem] absolute px-5  pt-3">An Artist</h1>
          </div>

          <div className="hidden md:block lg:block">
            <div className="flex gap-5 ">
              <h1 className="text-white text-[2rem]">IMDB: 7.1/10 </h1>
              <img src="instagram.svg" height={44} width={44} alt="insta" />
              <img src="facebook.svg" height={44} width={44} alt="fb" />
            </div>
          </div>
          <div className=" md:hidden lg:hidden">
            <div className="flex gap-3 ">
              <img src="instagram.svg" height={24} width={24} alt="insta" />
              <img src="facebook.svg" height={24} width={24} alt="fb" />
            </div>
            <h1 className="text-white text-[1rem]">IMDB: 7.1/10 </h1>
          </div>
        </div>
      </div> */}

      <div className="md:hidden w-full flex justify-center items-center bg-black">
        <video
          className=" object-fill"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/ROMEO_PRASHIL_02.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hidden md:block w-full flex justify-center items-center bg-black">
        <video
          className="w-full h-full object-center  object-fill"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default Hero;
