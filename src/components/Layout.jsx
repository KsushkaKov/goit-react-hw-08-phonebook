import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Footer } from './Footer/Footer';
import { Loader } from './Loader/Loader';

export const Layout = () => {
  return (
    <div style={{ padding: '0 16px' }}>
      <AppBar />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
