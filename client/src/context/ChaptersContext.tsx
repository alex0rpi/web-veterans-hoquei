import { createContext, useState } from 'react';

export type TChapter = {
  id: string;
  season: string;
  titlePro: string;
  contentPro: string;
  titleBases: string;
  contentBases: string;
};

export interface IChaptersContext {
  chapters: TChapter[];
  // setUser: (user: TUser) => void;
  setChapters: React.Dispatch<React.SetStateAction<TChapter[]>>;
}

const defaultState = {
  chapters: [
    {
      id: '',
      season: '',
      titlePro: '',
      contentPro: '',
      titleBases: '',
      contentBases: '',
    },
  ],
  setChapters: () => {},
} as IChaptersContext;

// export const UserContext = createContext<Partial<IUserContext>>({})
export const ChapterContext = createContext(defaultState);

type TChapterProviderProps = {
  children: React.ReactNode;
};

export default function ChapterProvider({ children }: TChapterProviderProps) {
  const [chapters, setChapters] = useState<TChapter[]>([]);

  return (
    <ChapterContext.Provider value={{ chapters, setChapters }}>
      {children}
    </ChapterContext.Provider>
  );
}
