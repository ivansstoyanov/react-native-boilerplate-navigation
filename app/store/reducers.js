/* 
 * combines all th existing reducers
 */
import * as loginReducer from '../pages/login/reducers';
import * as sidebarReducer from '../components/SideBar/reducers';

export default Object.assign({}, loginReducer, sidebarReducer);
