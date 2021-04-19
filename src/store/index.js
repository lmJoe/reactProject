import { createStore } from 'redux';//引入 createStore方法

import reducer from './reducer'

const store = new createStore( reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//实例化这个方法，传入参数reducer

export default store