import chapters from "../../data/chapters.json";
import { useParams } from "react-router-dom";
import { HeaderTitle } from "./HeaderTitle";
import { MainLayout } from "../../layouts/Layout";
import { motion } from "framer-motion";

const SeasonContent = () => {
  // fetch the chapter data
  const { season } = useParams();
  const seasonObject = chapters.find((chapter) => chapter.season === season);
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <HeaderTitle />
        <article>
          <h1 className="my-5 text-center text-5xl font-light text-sky-950">{`Temporada ${seasonObject?.season}`}</h1>
          <h1 className="mt-6 text-left text-2xl font-semibold text-sky-950">
            {seasonObject?.titlePro}
          </h1>
          <div className="mb-2 border-b border-gray-400 pb-2"></div>
          <p className="text-md leading-7">{seasonObject?.contentPro}</p>
          <h1 className="mt-6 text-left text-2xl font-semibold text-sky-950">
            {seasonObject?.titleBases}
          </h1>
          <div className="mb-2 border-b border-gray-400 pb-2"></div>
          <p className="text-md leading-7">{seasonObject?.contentBases}</p>
        </article>
      </motion.div>
    </MainLayout>
  );
};

export default SeasonContent;
