import { createStore } from 'redux';
import rootReducer from './reducer'; // Import your root reducer
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composeEnhancers);

export default store;
// import { configureStore } from '@reduxjs/toolkit'
// import { filtersReducer } from '../components/Filters/FilterSlice'
// import { todoListReducer } from '../components/TodoList/TodosSlice'

// const store = configureStore({
//     reducer: {
//         filters: filtersReducer,
//         todoList: todoListReducer,
//     },
// })

// export default store
