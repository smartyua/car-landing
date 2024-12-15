import Home from '../screens/Home';
import Page404 from '../screens/Page404';

// ADMIN AREA

const Routes = [
  {
    path: '/:language?',
    element: Home,
    exact: true
  },
  {
    exact: false,
    path: '*',
    element: Page404
  }
];

export default Routes;
