import { createBrowserRouter, RouterProvider } from 'react-router';
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from './pages';

import { ErrorElement } from './components';
import { landingLoad, singleProductLoad } from './load';
// loaders

// actions
const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Landing,
        errorElement: <ErrorElement />,
        loader: landingLoad,
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: 'products',
        Component: Products,
      },
      {
        path: 'products/:id',
        Component: SingleProduct,
        errorElement: <ErrorElement />,
        loader: singleProductLoad,
      },
      {
        path: 'orders',
        Component: Orders,
      },
      {
        path: 'checkout',
        Component: Checkout,
      },
      {
        path: 'cart',
        Component: Cart,
      },
    ],
  },
  {
    path: '/login',
    Component: Login,
    errorElement: <Error />,
  },
  {
    path: '/register',
    Component: Register,
    errorElement: <Error />,
  },
]);
function App() {
  return <RouterProvider router={router}>Hello world</RouterProvider>;
}

export default App;
