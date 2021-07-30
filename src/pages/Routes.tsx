import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LazyLoad from '../components/Lazy-load';
import Result from '../components/Result';

const Dashboard = lazy(() => import('./Dashboard'));

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
        <Route path='/dashboard' component={Dashboard} />
        <Route
          path='/not-found'
          component={() => (
            <Result
              status='404'
              title='Not Found'
              subTitle='Page does not exists!'
            />
          )}
        />
        <Redirect from='/' exact to='/dashboard' />
        <Redirect to='/not-found' />
      </Switch>
    </Suspense>
  );
};

export default Routes;
