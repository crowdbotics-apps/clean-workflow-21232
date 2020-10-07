import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth132188Reducer from '../features/EmailAuth132188/redux/reducers';
import CalendarView132186Reducer from '../features/CalendarView132186/redux/reducers';
import EmailAuth132161Reducer from '../features/EmailAuth132161/redux/reducers';
import SignIn1132115Reducer from '../features/SignIn1132115/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth132188: EmailAuth132188Reducer,
CalendarView132186: CalendarView132186Reducer,
EmailAuth132161: EmailAuth132161Reducer,
SignIn1132115: SignIn1132115Reducer,

});