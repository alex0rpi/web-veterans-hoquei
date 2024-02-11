import { toast } from "react-toastify";
import { urls } from "../constants";

type TCreateChapterProps = {
  season: string | undefined;
  titlePro: string | undefined;
  contentPro: string | undefined;
  titleBases: string | undefined;
  contentBases: string | undefined;
};

const CreateChapterService = async (props: TCreateChapterProps) => {
  console.log("CreateChapterService");
  const { season, titlePro, contentPro, titleBases, contentBases } = props;
  try {
    const response = await fetch(urls.createChapter, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        season,
        titlePro,
        contentPro,
        titleBases,
        contentBases,
      }),
    });
    console.log("response", response);

    if (!response.ok) {
      const error = await response.json();
      toast.warning(error.message);
      return false;
    }
    return true;
  } catch (error) {
    toast.warning("Alguna cosa ha fallat, sisplau torna-ho a provar més tard.");
    return false;
  }
};

export default CreateChapterService;
