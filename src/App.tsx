import { Route, Switch } from 'react-router-dom';
import Pages from './pages';

function App() {
  return (
    <Switch>
      <Route path='/form' component={Pages} />
    </Switch>
  );
}

export default App;
