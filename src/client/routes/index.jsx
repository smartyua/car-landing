import Home from '../screens/Home';
import Brands from '../screens/Brands';
import Dodge from '../screens/_Dodge';
import Mustang from '../screens/_Mustang';
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
    path: '/:language/mustang',
    element: Mustang,
    exact: true
  },
  {
    path: '/:language/dodge',
    element: Dodge,
    exact: true
  },
  {
    exact: false,
    path: '*',
    element: Page404
  }
];

export default Routes;
