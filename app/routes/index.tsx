import blob from "~/images/blob.webp";

const Index = () => (
  <div className="bg-gradient-to-r from-black to-[#212358] w-full h-screen">
    <img
      src={blob}
      alt=""
      className="w-[50%] h-full absolute blur-[16px] md:blur-[32px] lg:blur-[48px] xl:blur-[56px] 2xl:blur-[80px]"
    />
  </div>
);

export default Index;
