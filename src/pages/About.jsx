const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 justify-center items-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight'>
          We love
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content font-bold text-4xl tracking-widest'>
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 mx-auto text-lg max-w-2xl leading-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit debitis
        ipsam assumenda alias dolorum voluptatem maxime magni praesentium
        inventore consequatur ad saepe quo, id sed doloremque ex pariatur
        dignissimos similique?
      </p>
    </>
  );
};
export default About;
