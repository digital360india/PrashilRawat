import { useState } from "react";

const Newsletter = () => {
  const images = [
    "/pic14.svg",
    "/pic25.svg",
    "/pic26.svg",
    "/pic27.svg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div>
        <div className="bg-black pt-12">
          <h1 className="text-[1.8rem] md:text-[2rem] text-[#FFFFFF] text-center">
            NEWSLETTER
          </h1>

          <div className="flex justify-center items-center">
            <p className="w-[19.375rem]  text-[0.7rem] md:text-[1rem] text-[#FFFFFF]  pt-5 text-center md:w-[66rem] md:mx-[10rem] ">
              Prashil is identified as an actor, businessman, and influencer.
              His portfolio speaks volumes about his commitment to work. He has
              acted in diverse genres, which displays his command over his
              acting skills. He is adamant about excelling in his acting career
              through hard work and dedication
            </p>
          </div>

          <div className="flex justify-between     items-center pt-12 lg:mx-10">
            <div
              className="bg-[#424242] w-[0.9rem] h-[0.9rem] md:w-[2.5rem] md:h-[2.5rem] rounded-full cursor-pointer"
              onClick={goToPrevious}
            >
              <img src="lefti.svg" alt="left arrow" width={50} height={50} />
            </div>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out w-[19.375rem] h-[14.635rem] md:w-[800px] md:h-[600px]"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`slide ${index + 1}`}
                    className="w-full h-auto flex-shrink-0"
                  />
                ))}
              </div>
            </div>

            <div
              className="bg-[#424242] w-[0.9rem] h-[0.9rem] md:w-[2.5rem] md:h-[2.5rem] rounded-full cursor-pointer"
              onClick={goToNext}
            >
              <img src="righti.svg" alt="right arrow" width={50} height={50} />
            </div>
          </div>
          {/* <div className="flex justify-center items-center pt-8 pb-10 bg-black">
            <div className="bg-[#FF975C] rounded-3xl w-[9.813rem] h-[2.75rem] flex justify-center items-center">
              <h1 className="text-white text-[1rem]  ">Read More</h1>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Newsletter;
