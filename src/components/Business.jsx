
const BusinessCard = ( {title, description, year} ) => (
    <div className="w-[20.375rem] h-[20.375rem] bg-[#2E2E2E] m-4">
      <h1 className="text-[1.25rem] px-5 pt-8">{title}</h1>
      <br />
      <div className="bg-[#FF975C] w-[16.5rem] h-[2px] "></div>
      <br />
      <p className="text-[0.9rem] px-5">
        {description}
        <br />
        <br />
        Estd. year : {year}
      </p>
    </div>
  );
const Business = () => {
  const businesses = [
    {
      title: "J.S.R. Group of Hotels",
      description: "J.S.R. Group of Hotels was started in 2013 for serving the nation with the belief of \"Atithi Devo bhava, we strive to achieve a milestone in the service industry and become an inspiration in the hospitality sector.\"",
      year: "2013"
    },
    {
      title: "J.S.R. Production House",
      description: "J.S.R. Production House is a group of headstrong, talented, and ideologist youngsters who can transform imaginations into reality. We are a production house that believes",
      year: "2017"
    },
    {
      title: "J.S.R. Trading company",
      description: "J.S.R. Trading company was introduced in 2018 to trade goods, including FMCGS, Hospital and wellness Equipment, Industrial Materials, Consumer Products, and more.",
      year: "2018"
    },
    {
      title: "J.S.R. Counsellor",
      description: "J.S.R. Counsellor Pvt. Ltd is a business and management consultancy company that commenced on 28 June 2019 in Dehradun. It offers a wide range of services to businesses,",
      year: "2019"
    },
    {
      title: "J.S.R. Record label",
      description: "J.S.R. Group of Hotels was started in 2013 for serving the nation with the belief of \"Atithi Devo bhava, we strive to achieve a milestone in the service industry and become an inspiration in the hospitality sector.\"",
      year: "2013"
    },
    {
      title: "VHS Media LLP",
      description: "J.S.R. Group of Hotels was started in 2013 for serving the nation with the belief of \"Atithi Devo bhava, we strive to achieve a milestone in the service industry and become an inspiration in the hospitality sector.\"",
      year: "2013"
    }
  ];

  return (
    <div className="text-white bg-[#101010] pt-10 pb-10" id="business">
      <h1 className="text-center text-[2rem] mb-8">BUSINESS</h1>
      <div className="flex flex-wrap justify-center">
        {businesses.map((business, index) => (
          <BusinessCard
            key={index}
            title={business.title}
            description={business.description}
            year={business.year}
          />
        ))}
      </div>
    </div>
  );
};

export default Business;


