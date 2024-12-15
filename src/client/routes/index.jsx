import Home from '../screens/Home';
import Dodge from '../screens/Dodge';
import Mustang from '../screens/Mustang';
import Page404 from '../screens/Page404';

// ADMIN AREA

const Routes = [
  {
    path: '/:language?',
    element: Home,
    exact: true
  },
  {
    path: '/:language?/mustang',
    element: Mustang,
    exact: true
  },
  {
    path: '/:language?/dodge',
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
