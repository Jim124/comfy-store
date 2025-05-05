import { Link, useLoaderData } from 'react-router';
const ProductGrid = () => {
  const { products } = useLoaderData();
  return (
    <div className='pt-12 grid md:grid-cols-2 gap-4 lg:grid-cols-3 shadow-xl hover:shadow-2xl transition duration-300'>
      {products.map((product) => {
        const { image, title, price } = product.attributes;

        return (
          <Link
            className='card w-full'
            key={product.id}
            to={`/products/${product.id}`}
          >
            <figure className='px-4 pt-4'>
              <img
                src={image}
                alt={title}
                className='object-cover h-64 w-full md:h-48 rounded-xl'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title tracking-wide capitalize'>{title}</h2>
              <span className='text-secondary'>{price}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductGrid;
