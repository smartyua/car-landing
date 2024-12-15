import React from 'react';
import _ from 'lodash';
import { Route, Routes, useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import ReactGA from 'react-ga4';

import AppRoutes from './routes';
// import { getFacets } from './store/actions/home';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './app.module.scss';

const isServer = typeof window === 'undefined';

ReactGA.initialize('298742057');

const App = () => {
  if (!isServer) {
    const { pathname } = useLocation();
    ReactGA.send({ hitType: 'pageview', page: pathname });
    // const common = useSelector(state => state.common);
    // const dispatch = useDispatch();
    // const token =
    //   !isServer && localStorage ? localStorage.getItem('userJWT') : null;
    // if (token) {
    //   const user = useSelector(state => state.user);
    //   const {
    //     isPending: isPendingUser,
    //     isRejected: isRejectedUser,
    //     userData
    //   } = user;
    //   // if (!userData && !isPendingUser && !isRejectedUser) {
    //   //   dispatch(getUserData());
    //   // }
    // }
    // const { isPending: isPendingData, data } = common;
    // if (!data && !isPendingData) {
    //   // dispatch(getFacets());
    // }
  }

  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.main}>
        <Routes>
          {_.map(AppRoutes, (route, index) => {
            const { element: Element } = route;

            // if (route.protected) {
            //   return (
            //     <ProtectedRoute {...route} key={index}>
            //       {component}
            //     </ProtectedRoute>
            //   );
            // }

            return <Route {...route} key={index} element={<Element />} />;
          })}
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
