import { Outlet } from 'react-router';

const HomeLayout = () => {
  return (
    <>
      <nav>
        <span>comfy</span>
      </nav>
      <Outlet />
    </>
  );
};
export default HomeLayout;
