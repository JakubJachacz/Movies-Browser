import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import { toMovies, toPeople, toMovie, toProfile } from "../routes";
import { TopBar } from "../../TopBar";
import { MoviesList } from "../../features/movies/MoviesList";
import { PeopleList } from "../../features/people/PeopleList";
import { MoviePage } from "../../features/movies/MoviePage";
import { Profile } from "../../features/people/Profile";
import { useEffect } from "react";
import { fetchMovieGenresLoading } from "../../features/movies/movieGenresSlice";
import { useDispatch } from "react-redux";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieGenresLoading());
  }, []);

  return (
    <HashRouter>
      <TopBar />

      <Switch>
      <Route path={toMovie()}>
          <MoviePage />
        </Route>
        <Route path={toMovies()}>
          <MoviesList />
        </Route>
        <Route path={toProfile()}>
          <Profile />
        </Route>
        <Route path={toPeople()}>
          <PeopleList />
        </Route>
        <Route>
          <Redirect to={toMovies()} />
        </Route>
      </Switch>
    </HashRouter>
  );
};
