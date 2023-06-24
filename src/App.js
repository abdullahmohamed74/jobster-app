import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { LandingPage, ErrorPage, RegisterPage, ProtectedRoute } from './pages';
import {
  SharedLayout,
  AddJob,
  AllJobs,
  Profile,
  Stats,
} from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="landing" element={<LandingPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}
export default App;
