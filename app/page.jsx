import Feed from "@components/Feed";



const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text_center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text center">Ai-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        MeroSound is an open-source AI prompting tools for modern world to discover and share creactive prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
