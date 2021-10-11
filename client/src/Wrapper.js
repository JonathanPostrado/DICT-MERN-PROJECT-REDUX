import { BrowserRouter, Route, Switch, useRouteMatch } from "react-router-dom";
import Home from "./components/Homepage/Home";
import Movies from "./components/Movies/Index";
import MovieDetailsPage from "./components/Movies/MovieDetailsPage/MovieDetailsPage";
// import Blog from "./components/BlogPage/index";
import NavigationBarComponent from "./components/NavigationBarComponent/NavigationBarComponent";

const Wrapper = () => {
  const { path } = useRouteMatch();

  return (
    <BrowserRouter>
      <NavigationBarComponent />
      <Switch>
        <Route exact path={path}>
          <Home />
        </Route>
        <Route exact path={`${path}movies`}>
          <Movies />
        </Route>
        <Route exact path={`${path}movies/:id`} component={MovieDetailsPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Wrapper;
