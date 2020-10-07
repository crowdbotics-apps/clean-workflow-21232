import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView132186Saga from '../features/CalendarView132186/redux/sagas';
import EmailAuth132161Saga from '../features/EmailAuth132161/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView132186Saga,
EmailAuth132161Saga,
    
  ]);
}