import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../app/containers/main/MainPage';
import { MainProvider } from '../app/modules/main';
import { AdminPage } from '../app/containers/admin/AdminPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainProvider>
            <MainPage />
          </MainProvider>
        }
      />

      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};
