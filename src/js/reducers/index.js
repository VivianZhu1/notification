import { combineReducers} from 'redux';
import { NtfReducer } from './NtfReducer';
import { StatusReducer } from './StatusReducer'

export default combineReducers({
    ntfs: NtfReducer,
    status: StatusReducer
    //... more reducers go here
});