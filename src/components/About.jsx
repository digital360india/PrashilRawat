const About = () => {
  return (
    <div className="bg-black text-white" id="about">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ffffff56]">
        <h1 className="text-[2rem] md:text-[2.5rem] text-center pt-8">
          ABOUT ME
        </h1>

        <div className="flex flex-col lg:flex-row justify-center items-center px-2 lg:px-10">
          <div
            style={{ backgroundImage: `url('/prashil.svg')` }}
            className="w-[20rem] h-96 md:w-[40.75rem] md:h-[40.75rem] bg-center bg-cover mb-8  lg:mb-0"
          ></div>
          <div className="flex flex-col w-full lg:w-auto px-6 lg:px-0">
            <div
              className="w-full lg:w-[12.813rem] h-28 bg-no-repeat relative  text-white mb-4 hidden lg:block"
              style={{ backgroundImage: `url('/anartist.svg')` }}
            >
              <h1 className="text-[2rem] px-12 lg:px-10 pt-3 absolute">
                Hi There
              </h1>
            </div>
            <div
            className="w-[7.813rem] h-16 bg-no-repeat realtive text-white lg:hidden"
            style={{ backgroundImage: `url('/Group 6.svg')` }}
          >
            <h1 className="text-[1rem] absolute px-5  pt-3">Hi There</h1>
          </div>
            <div className="w-full lg:w-[33.875rem] bg-transparent mb-4">
              <p className="text-[1rem] p-4 lg:p-5">
                I am Prashil Rawat, an actor and businessman by profession. I
                was born and bought up in Dehradun, Uttarakhand. Since
                childhood, I had a strong inclination for acting, which has
                propelled me to pursue it as a career. I have a strong
                relationship with the art of acting and am constantly striving
                to learn new skills and techniques to improve my performance as
                an actor. My favourite thing about being an actor is getting to
                play different characters and learning new things about the
                timeless art of acting. One thing that attracts me to acting is
                its power to create a new world where anything is possible
              </p>
            </div>
            <div className="bg-[#1E1E1E] w-full lg:w-[33.875rem] p-4 lg:p-10">
              <p className="text-[1rem]">
                Apart from acting, I am a fitness enthusiast and an influencer.
                I love to travel and explore new places. My dream destination is
                New York City because it&apos;s the city that never sleeps! I am
                blessed to have a wonderful family that has always supported me
                in achieving success in whatever I have set my mind to do.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="pt-10 px-4 lg:px-16 flex flex-col lg:flex-row justify-between"
        id="career"
      >
        <div className="mb-8 lg:mb-0 px-6 lg:px-0">
          <h1 className="text-[2rem] lg:text-[2.5rem] mb-4">Career</h1>
          <p className="lg:w-[30.063rem]">
            Prashil Rawat is an Indian actor who started his career in the film
            industry in 2016 with the movie &quot;72 Hours.&quot; The film was a
            blockbuster and received positive reviews from both critics and
            audiences. <br /> <br />
            He is determined to become a method actor and take his skills to the
            next level. In addition to acting, Prashil is also a fitness
            enthusiast and a youth icon inspiring many young people to adopt a
            healthy lifestyle. His dedication to fitness has helped him maintain
            a healthy physique, which has added to his on-screen presence.{" "}
            <br />
            <br />
            Prashil has honed so many feathers to his cap, along with being a
            versatile actor, he is also one of the vice chairpersons of JSR
            Group, a well-known business conglomerate in India. He has a
            multi-faceted personality and is a promising talent in the Indian
            entertainment industry
          </p>
        </div>
        <div className="bg-[#FF975C] w-1 h-64 mt-24 hidden lg:block"></div>
        <div className="text-[2rem] lg:text-[2.5rem] lg:w-[20rem] px-6 lg:px-0 bg-black w-auto h-auto">
          Awards
          <p className="text-[1rem] text-white pt-4  lg:hidden">
            Prashil Rawat has many awards to his credit. He won the prestigious
            &quot;Most Hospitable Hotelier&quot; award presented to him by the
            World Business Conclave. He added another accolade to his name,
            &quot;The Hospitality and Tourism Excellence Award.&quot; He was
            honoured by Hiteshi Sabha on behalf of brave martyr Jasvant Singh
            Rawat for his outstanding performance in &quot;72 Hours: Martyr Who
            Never Died.&quot;
          </p>
          <div className="realtive">
            <div className="mt-14 ">
              <div className="bg-white w-[16.8rem] h-[6rem] md:w-[40rem] lg:w-[20rem] lg:h-[9rem] md:h-[11.875rem] flex justify-center items-center">
                <img
                  src="award.svg"
                  alt="award"
                  width={550}
                  height={250}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
