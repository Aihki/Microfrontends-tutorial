import TopBar from '@/components/TopBar';
// import useUserContext from mediastore mfe
import { useUserContext } from 'mediastore/ContextHooks';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const { user, handleAutoLogin } = useUserContext();

  if (!user) {
    handleAutoLogin();
  }

  return (
    <>
      <TopBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
