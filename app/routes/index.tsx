import blob from "~/images/blob.webp";
import pageKeys from "~/content/pageKeys.json";

const Index = () => (
  <div className="bg-gradient-to-r from-black to-[#212358] w-full h-screen">
    <img
      src={blob}
      alt=""
      className="w-[50%] h-auto absolute blur-[24px] md:blur-[32px] lg:blur-[48px] xl:blur-[56px] 2xl:blur-[80px]"
    />
    <div className="absolute h-screen flex w-screen flex-col items-start xl:pl-24 xl:pt-40 pl-10 pt-16 pr-10">
      <div className="hero-big drop-shadow-md">
        {pageKeys.titles.heroGreeting}
      </div>
      <div className="flex flex-col items-start space-y-2 xl:space-y-4 mt-6 xl:mt-10 hero-body">
        <p>{pageKeys.titles.heroIntro}</p>
        <p>{pageKeys.titles.heroSubIntro[0]}</p>
      </div>
    </div>
  </div>
);

export default Index;
