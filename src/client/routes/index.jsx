import Home from '../screens/Home';
import Brands from '../screens/Brands';
import CarPage from '../screens/CarPage';
import Page404 from '../screens/Page404';

// ADMIN AREA

const Routes = [
  {
    path: '/',
    element: Home,
    exact: true
  },
  {
    path: '/:language',
    element: Home,
    exact: true
  },
  {
    path: '/:language/:brand',
    element: Brands,
    exact: true
  },
  {
    path: '/:language/:brand/:slug',
    element: CarPage,
    exact: true
  },
  {
    exact: false,
    path: '/404',
    element: Page404
  },
  {
    exact: false,
    path: '*',
    element: Page404
  }
];

export default Routes;
