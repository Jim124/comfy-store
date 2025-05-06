import { Link, useLoaderData } from 'react-router';
import { formatPrice, generateOption } from '../utils';
import { useState } from 'react';
const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, company, price, colors, description } =
    product.attributes;
  const euroAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  console.log(generateOption(10));
  return (
    <section>
      <div className='breadcrumbs text-md'>
        <ul>
          <li>
            <Link to='/' className='capitalize'>
              home
            </Link>
          </li>
          <li>
            <Link to='/products' className='capitalize'>
              products
            </Link>
          </li>
        </ul>
      </div>
      {/* Product */}
      <div className='grid lg:grid-cols-2 gap-y-8 lg:gap-x-16 mt-6'>
        {/* image */}
        <img
          src={image}
          alt={title}
          className='h-96 w-96 lg:w-full rounded-lg object-cover'
        />
        {/* information */}
        <div>
          <h1 className='text-3xl capitalize font-bold'>{title}</h1>
          <h4 className='text-xl text-neutral-content font-bold mt-2'>
            {company}
          </h4>
          <p className='mt-3 text-xl'>{euroAmount}</p>
          <p className='mt-6 leading-8'>{description}</p>
          {/* colors */}
          <div className='mt-6'>
            <h4 className='text-md font-medium tracking-wider capitalize'>
              colors
            </h4>
            <div className='mt-2'>
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type='button'
                    className={`badge w-6 h-6 mr-2 ${
                      color == productColor && 'border-2 border-secondary'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
            {/* amount */}
            <div className='mt-2 w-full max-w-xs'>
              <label>
                <h4 className='text-md font-medium  tracking-wider capitalize'>
                  amount
                </h4>
                <select
                  className='select select-secondary select-md mt-2'
                  value={amount}
                  onChange={(e) => setAmount(parseInt(e.target.value))}
                >
                  {/* <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option> */}
                  {generateOption(5)}
                </select>
              </label>
            </div>
            {/* add to cart */}
            <div className='mt-10'>
              <button
                className='btn btn-secondary btn-md uppercase'
                onClick={() => console.log('add to cart...')}
              >
                Add to bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
