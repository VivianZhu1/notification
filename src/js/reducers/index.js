import { combineReducers} from 'redux';
import { NtfReducer } from './NtfReducer';

export default combineReducers({
    ntfs: NtfReducer
    //... more reducers go here
});