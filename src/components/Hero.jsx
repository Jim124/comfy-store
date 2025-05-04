import { Link } from 'react-router';
import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';
const carouselImages = [hero1, hero2, hero3, hero4];
const Hero = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl'>
          We’re changing the way people shop.
        </h1>
        <p className='max-w-xl text-lg leading-8 mt-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni
          similique nulla modi. Architecto commodi incidunt, magnam laudantium
          beatae numquam.
        </p>
        <div className='mt-10'>
          <Link to='products' className='btn btn-primary'>
            our products
          </Link>
        </div>
      </div>
      <div className='hidden lg:carousel carousel-center h-[28rem]  p-4 space-x-4 rounded-box bg-neutral'>
        {carouselImages.map((hero) => {
          return (
            <div key={hero} className='carousel-item'>
              <img
                src={hero}
                alt='hero'
                className='h-full w-80 object-cover rounded-box'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
