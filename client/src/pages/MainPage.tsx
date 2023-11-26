import { useLoaderData } from 'react-router-dom';
// import { fetchData } from '../helpers/LocalStorage';
import { MainContent } from '../components';
import { MainLayout } from '../layouts/Layout';

export const MainPage = () => {
  // const { userName } = useLoaderData<TLoaderData>();

  return <MainContent loggedUser={userName} />;
};
