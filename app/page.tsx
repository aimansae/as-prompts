import { text } from "@app/constants";
import { Feed } from "@components";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      {text.map((t) => (
        <>
          <h1 className="head_text text-center">
            {t.title}
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">{t.span}</span>
          </h1>
          <p className="desc text-center">{t.description}</p>
          {/*Feed*/}
          <Feed />
        </>
      ))}{" "}
    </section>
  );
};

export default Home;
