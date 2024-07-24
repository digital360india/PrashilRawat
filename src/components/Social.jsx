const Social = () => {
  return (
    <>
      <div className="hidden  lg:block ">
        <div className="bg-[#1E1E1E] text-white px-10">
          <h1 className="text-[2.25rem] text-center p-10">
            SOCIAL INITIATIVES
          </h1>

          <div className="flex justify-center items-center gap-8">
            <div>
              <img src="pic24.svg" alt="pic24" />
            </div>
            <div>
              <p className="w-[37.25rem]">
                As a fitness enthusiast, Prashil Rawat is passionate about
                helping people find a more active and healthier lifestyle. He
                has started a movement to spread awareness across the world.
              </p>
            </div>
          </div>
          <br />
          <div className="flex justify-center items-center gap-8 pb-10">
            <div>
              <p className="w-[40.25rem]">
                Prashil is driven by social initiatives from an early age, which
                has resulted him in contributing for many social causes, one of
                which is NAYA, an internationally collaborative initiative to
                employee and empower indian women at large. <br />
                Naya organization is built on a vision of empowering women
                through education, employment and entrepreneurship. This vision
                is achieved through training programs on aerial labelling.
                Through this program NAYA has been able to provide employment
                opportunities to over 50 women. This has led to an increase in
                earnings for these women,thereby improving their quality of
                life.
              </p>
            </div>
            <div>
              <img src="pic23.svg" alt="pic" />
            </div>
          </div>
        </div>
      </div>

      <div className=" lg:hidden bg-black">
        <h1 className="text-[1rem] text-center p-8 text-white">
          SOCIAL INITIATIVES
        </h1>
        <div className="text-white  flex justify-center items-center">
          <div className="bg-[#1E1E1E] w-[15.5rem] h-[15.813rem] md:w-[30rem] md:h-[22rem]   p-4">
            <div className="px-4">
              <img src="pic24.svg" alt="pic24" />
            </div>
            <div>
              <p className="text-[0.8rem] text-center pt-5">
                As a fitness enthusiast, Prashil Rawat is passionate about
                helping people find a more active and healthier lifestyle. He
                has started a movement to spread awareness across the world.
              </p>
            </div>
          </div>
        </div>
        <div className="text-white bg-black flex justify-center items-center pt-10">
          <div className="bg-[#1E1E1E] w-[15.5rem] h-[35.813rem] md:w-[30rem] md:h-[34rem]  p-4">
            <div className="px-2">
              <img src="pic23.svg" alt="pic" />
            </div>
            <div>
              <p className="text-[0.8rem] text-center pt-5">
                Prashil is driven by social initiatives from an early age, which
                has resulted him in contributing for many social causes, one of
                which is NAYA, an internationally collaborative initiative to
                employee and empower indian women at large. <br />
                Naya organization is built on a vision of empowering women
                through education, employment and entrepreneurship. This vision
                is achieved through training programs on aerial labelling.
                Through this program NAYA has been able to provide employment
                opportunities to over 50 women. This has led to an increase in
                earnings for these women,thereby improving their quality of
                life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Social;
