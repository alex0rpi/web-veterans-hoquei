export type TChapterListItem = {
  id: string;
  season: string;
  titlePro: string;
  titleBases: string;
};

export interface Theme {
  darkTheme: boolean;
}

export type TSeason = {
  id: string;
  season: string;
  titlePro: string;
  contentPro: string;
  titleBases: string;
  contentBases: string;
};
