import { useLoaderData } from 'react-router-dom';
import { fetchData } from '../helpers/LocalStorage';
import { MainContent } from '../components';
import { MainLayout } from '../layouts/Layout';

// loader
export const mainPageLoader = () => {
  const userName: string = fetchData('userName');
  return {
    userName,
  };
};

type TLoaderData = {
  userName: string;
};

export const MainPage = () => {
  const { userName } = useLoaderData<TLoaderData>();

  return (
    <MainLayout>
      <MainContent loggedUser={userName} />
    </MainLayout>
  );
};
