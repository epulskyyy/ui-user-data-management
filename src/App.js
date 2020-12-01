import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { history } from './history';
import { routes } from './routes';
import Loading from './containers/layout/loading';
// const Loading = React.lazy(()=> import('./containers/layout/loading'))

function App() {
  return (
    <Router history={history}>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
          {/* {protectTedRoute.map((route, i) => (
            <ProtectedRoute key={i} {...route} />
          ))} */}
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
