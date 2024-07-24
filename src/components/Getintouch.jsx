const Getintouch = () => {
  return (
    <div id="contact">
      <div className="pt-16 sm:pt-20 md:pt-28 bg-black">
        <div
          className="w-full min-h-screen bg-no-repeat bg-cover bg-center flex flex-col justify-between"
          style={{ backgroundImage: `url('/pic15.svg')` }}
        >
          <div className="flex justify-center items-center mt-4 sm:mt-8">
            <div
              className="w-48 sm:w-52 h-24 sm:h-28 bg-no-repeat bg-contain bg-center relative text-white"
              style={{ backgroundImage: `url('/anartist.svg')` }}
            >
              <h1 className="text-[1.5rem] text-center pt-6 md:text-[1.8rem] md:pt-7">GET IN TOUCH</h1>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 md:mt-16 px-4 sm:px-8 md:px-16">
            <h1 className="text-white text-base sm:text-lg md:text-3xl text-center">
              Managed by JSR Production House
            </h1>
            <h1 className="text-white text-base sm:text-lg md:text-3xl text-center pt-5">
              For Any Enquiry <br />
              <p className="text-sm pt-5">

              info@jsrproductionhouse.com
              </p>
            </h1>
          </div>

          <div className="flex-grow flex items-center justify-center px-4 sm:px-8 md:px-16 mt-8 sm:mt-12 md:mt-16 mb-8">
            <div className="text-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                <div className="flex flex-col items-center">
                  <img src="pin.svg" alt="address" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                  <p className="w-full sm:w-64 md:w-80 text-center mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">
                    Shaheed Gireesh Bhadri, Mothrowala, Chowk, Banjarawala Rd,
                    Ajabpur Khurd, Dehradun, Uttarakhand 248001
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img src="phone-call.svg" alt="phone" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                  <p className="w-full sm:w-64 md:w-80 text-center mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">7830399111</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src="email.svg" alt="email" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                  <a
                    href="mailto:info@jsrproductionhouse.com"
                    className="cursor-pointer"
                  >
                    <p className="w-full sm:w-64 md:w-80 text-center mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">
                      info@jsrproductionhouse.com
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getintouch;