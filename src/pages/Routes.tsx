import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LazyLoad from '../components/Lazy-load';
import Result from '../components/Result';

const Home = lazy(() => import('./Home'));

const Routes: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className='h-screen'>
          <LazyLoad fullHeight />
        </div>
      }
    >
      <Switch>
        <Route path='/home' component={Home} />
        <Route
          path='/not-found'
          component={() => (
            <Result
              status='404'
              title='Not Found'
              subTitle='Page does not exists!'
              screenHeight
            />
          )}
        />
        <Redirect from='/' exact to='/home' />
        <Redirect to='/not-found' />
      </Switch>
    </Suspense>
  );
};

export default Routes;
