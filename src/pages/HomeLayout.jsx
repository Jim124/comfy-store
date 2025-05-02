import { Outlet } from 'react-router';

const HomeLayout = () => {
  return (
    <>
      <nav>
        <span>comfy</span>
      </nav>
      <section className='align-element py-20'>
        <Outlet />
      </section>
    </>
  );
};
export default HomeLayout;
