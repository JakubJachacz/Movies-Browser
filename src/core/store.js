import { configureStore } from "@reduxjs/toolkit";
import moviesReducers from "../features/movies/MoviesList/moviesSlice";
import moviePageReducers from "../features/movies/MoviePage/moviePageSlice";
import peopleReducers from "../features/people/PeopleList/peopleSlice";
import profileReducers from "../features/people/Profile/profileSlice";
import searchReducers from "../TopBar/Search/searchSlice";
import movieGenresReducers from "../features/movies/movieGenresSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    moviesList: moviesReducers,
    moviePage: moviePageReducers,
    peopleList: peopleReducers,
    profilePage: profileReducers,
    searchModule: searchReducers,
    movieGenres: movieGenresReducers,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
