import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FullPostsPage from './pages/FullPostsPage';
import AboutMePage from './pages/AboutMePage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={FullPostsPage} exact />
        <Route path="/post/:number" component={PostPage} exact />
        <Route path="/about" component={AboutMePage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
