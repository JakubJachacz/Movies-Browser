import { watchFetchMovies } from "../features/movies/moviesSaga"
import { watchFetchPeople } from "../features/people/peopleSaga";
import { watchFetchProfile } from "../features/people/profileSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([
        watchFetchMovies(),
        watchFetchPeople(),
        watchFetchProfile(),
    ]);
};