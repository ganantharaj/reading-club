import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../app/containers/main/MainPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};
