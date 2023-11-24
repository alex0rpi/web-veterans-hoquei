import { AdminContent } from '../components';
import { AdminNavigation } from '../components/admin/AdminNavigation';
import { MainLayout } from '../layouts/MainLayout';

export const AdminPage = () => {
  return (
    <MainLayout>
      <AdminNavigation />
      <AdminContent />
    </MainLayout>
  );
};
