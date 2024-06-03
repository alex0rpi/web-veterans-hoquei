export type TChapterListItem = {
  id: string;
  season: string;
  titlePro: string;
  titleBases: string;
};

export interface Theme {
  darkTheme: boolean;
}

export type TChapter = {
  id: string;
  season: string;
  titlePro: string;
  contentPro: string;
  titleBases: string;
  contentBases: string;
};

export type TBoardMemberInfos = {
  name: string;
  role: string;
  imageUrls: string[];
  lowResimageUrls: string[];
  pictures?: string[];
  playerSeasons: string[];
  trajectory: string;
  anecdote?: string;
  otherComment?: string;
};

export type SeasonFotosType = {
  [key: string]: {
    pro: TImageWithMiniature[];
    bases?: TImageWithMiniature[];
  };
};

export type TImageWithMiniature = {
  name: string;
  src: string;
  lowResSrc?: string;
};

export type TUser = {
  id: string;
  name: string;
  isAuthenticated: boolean;
};
