import { Layout } from '@org/shared/ui';
import { Route, Routes } from 'react-router-dom';
import { DashbordPage, HomePage, ProjectsPage } from './pages';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/dashbord" element={<DashbordPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Route>
    </Routes>
  );
}
export default AppRoutes
