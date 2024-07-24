import { useState, useEffect } from "react";
const ImageCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="relative w-full h-64 md:h-[30rem]">
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={img.alt}
          className={`absolute  w-full h-full object-contain transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

const Work = () => {
  const movieImages = [
    { src: "movie1.svg", alt: "movie" },
    { src: "movie2.svg", alt: "movie" },
    { src: "movie3.svg", alt: "movie" },
    { src: "movie4.svg", alt: "movie" },
  ];

  const albumImages = [
    { src: "pic16.jpeg", alt: "Siya Ram" },
    { src: "pic17.jpeg", alt: "Romeo" },
    { src: "pic18.jpeg", alt: "Khayalun Ma JSR" },
    { src: "pic19.jpeg", alt: "Khayalun Ma JSR" },
    { src: "pic20.jpeg", alt: "Khayalun Ma JSR" },
    { src: "pic21.jpeg", alt: "Khayalun Ma JSR" },
  ];

  const comingSoonImages = [
    { src: "coming1.svg", alt: "Coming Soon 1" },
    { src: "coming2.svg", alt: "Coming Soon 2" },
    { src: "coming3.svg", alt: "Coming Soon 3" },
  ];
  return (
    <>
      <div id="work" className="hidden  lg:block ">
        <div className="text-white bg-black pt-10 pb-10 px-3">
          <h1 className="text-[2rem] text-center">WORK</h1>

          <h1 className="text-[1.9rem] mx-20 pt-[2rem] pb-2">Movies</h1>
          <div className="flex justify-center space-x-11">
            <div className="h-[24.188rem]">
              <img src="movie1.svg" width={369} height={387} alt="movie" />
            </div>
            <div>
              <div className="flex space-x-11">
                <div className="">
                  <img src="movie2.svg" width={225} height={185} alt="movie" />
                </div>
                <div className="">
                  <img src="movie3.svg" width={225} height={185} alt="movie" />
                </div>
                <div className="">
                  <img src="movie4.svg" width={225} height={185} alt="movie" />
                </div>
              </div>
              <br />
              <p className="w-[46.563rem] h-[10.188px] text-[0.9rem]">
                Prahshil Rawat who is a well-trained actor is seen in a
                completely different avatar in the movie &quot;72 Hours&quot;
                The martyrs Who Never Died. He played the role of Rifleman Jeet
                Singh who fought like a true martyr to protect his motherland
                till his last breath. His constant efforts compelled the Chinese
                to step back and surrender as a result Indian army won the war
                after fighting continuously for 72 Hours. The movie was
                well-received by audiences and gained positive reviews from
                critics and audiences alike.
                <br /> <br />
                IMDB: 7.1/10
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-10 p-5">
            <div className="flex-col ">
              <h1 className="text-[2rem] ">Music Video</h1> <br />
              <p className="text-[1rem] w-[23.188rem]">
                Prashil Rawat&apos;s video song &quot;Vandemataram&quot; was
                beautifully captured and picturized in the movie &quot;72 Hours:
                Martyr Who Never Died.&quot; The song reminds us of the love and
                sacrifice of a martyr for his motherland. <br />
                The song has been written and directed by Avinash Dhyani, and
                produced by JS Rawat, Tarun Rawat, and Prashil Rawat.
              </p>
            </div>

            <div className="w-[45.125rem] h-[10.5rem] mb-16">
              <img src="pic22.svg" alt="img" />
            </div>
          </div>

          <h1 className="text-[1.9rem] mx-20 pt-[2rem] pb-4 ">Coming Soon</h1>
          <div className="bg-[#FF975C] w-[24.813rem] h-[2px] mx-[5rem] mb-[2.5rem]"></div>

          <div className="flex justify-between items-center mx-20 gap-2">
            <div className="mb-[1.75rem]">
              <div className="w-[20.375rem] h-[11rem] bg-[#2E2E2E] p-3">
                <p className="text-[1.3rem] ">
                  Prashil is a versatile actor and this time he has played a
                  different character altogether in his upcoming movie
                  &quot;Mussorie Boyz&quot;
                </p>
              </div>
              <div className="w-[21rem] h-[11.875rem] pt-4 ">
                <p className="text-[0.9rem] ">
                  which will leave you in a trip of emotions after witnessing
                  the everlasting bond between &quot; Four Friends&quot; , at
                  the same time hurt your stomachs seeing all the mess they end
                  up in. The movie falls under the category of comedy but has so
                  many elements to it like romance and action which will keep
                  you glued to your seats.
                </p>
              </div>
            </div>

            <div className="pt-[0.8rem] ">
              <img src="coming1.svg" width={267} height={410} alt="img" />
            </div>
            <div className="pt-[0.8rem]">
              <img src="coming2.svg" width={267} height={410} alt="img" />
            </div>
            <div className="pt-[0.8rem]">
              <img src="coming3.svg" width={267} height={410} alt="img" />
            </div>
          </div>

          <h1 className="text-[1.9rem] mx-20 pt-[2rem] pb-4 text-center m-5 ">
            LIFESTYLE
          </h1>

          <div className="flex justify-center items-center space-x-12">
            <div className="w-[19.25rem] h-[26.875rem]">
              <img
                src="pic17.jpeg"
                alt="img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[19.25rem] h-[26.875rem]">
              <img
                src="pic21.jpeg"
                alt="img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[19.25rem] h-[26.875rem]">
              <img
                src="pic20.jpeg"
                alt="img"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="  lg:hidden">
        <div
          id="work"
          className="text-white bg-black pt-10 pb-10 px-4 md:px-20"
        >
          <h1 className="text-[2rem] text-center mb-8">WORK</h1>

          <h2 className="text-[1.5rem] md:text-[1.9rem] mb-4 px-4">Movies</h2>
          <div className="mb-8 px-4">
            <ImageCarousel images={movieImages} />
          </div>

          <p className="text-[0.9rem] mb-8 px-4">
            Prahshil Rawat who is a well-trained actor is seen in a completely
            different avatar in the movie &quot;72 Hours&quot; The martyrs Who
            Never Died. He played the role of Rifleman Jeet Singh who fought
            like a true martyr to protect his motherland till his last breath.
            His constant efforts compelled the Chinese to step back and
            surrender as a result Indian army won the war after fighting
            continuously for 72 Hours. The movie was well-received by audiences
            and gained positive reviews from critics and audiences alike.
            <br />
            <br />
            IMDB: 7.1/10
          </p>

          <div className="flex justify-center items-center gap-10 p-5 ">
            <div className="flex-col ">
              <h1 className="text-[1.5rem] px-4">Music Video</h1> <br />
              <p className="text-[0.9rem]  px-4">
                Prashil Rawat&apos;s video song &quot;Vandemataram&quot; was
                beautifully captured and picturized in the movie &quot;72 Hours:
                Martyr Who Never Died.&quot; The song reminds us of the love and
                sacrifice of a martyr for his motherland. <br />
                The song has been written and directed by Avinash Dhyani, and
                produced by JS Rawat, Tarun Rawat, and Prashil Rawat.
              </p>
              <div className="flex justify-center items-center">

            <div className="w-[17.125rem] h-[17.5rem] pt-5 ">
              <img src="image 5.svg" alt="img" />
            </div>
              </div>
            </div>

          </div>

          <h2 className="text-[1.5rem] md:text-[1.9rem] mb-4 px-4 text-center p-5">
            LIFESTYLE
          </h2>
          <div className="mb-8">
            <ImageCarousel images={albumImages} />
          </div>

          <h2 className="text-[1.5rem] md:text-[1.9rem] mb-4 px-4">
            Coming Soon
          </h2>
          <div className="bg-[#FF975C] w-[11rem] md:w-[24.813rem] h-[2px] "></div>

          <div className="mb-8">
            <div className=" p-4 mb-4">
              <p className="text-[0.9rem] mb-4">
                Prashil is a versatile actor and this time he has played a
                different character altogether in his upcoming movie
                &quot;Mussorie Boyz&quot;. which will leave you in a trip of
                emotions after witnessing the everlasting bond between
                &quot;Four Friends&quot;, at the same time hurt your stomachs
                seeing all the mess they end up in. The movie falls under the
                category of comedy but has so many elements to it like romance
                and action which will keep you glued to your seats.
              </p>
            </div>
          </div>

          <div className="">
            <ImageCarousel images={comingSoonImages} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
