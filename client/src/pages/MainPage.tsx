import { MainNavigation, MainContent } from '../components';
import { MainLayout } from '../layouts/MainLayout';

export const MainPage = () => {
  return (
    <MainLayout>
      <MainNavigation />
      <MainContent />
    </MainLayout>
  );
};
