import { filtersReducer } from "../components/Filters/FilterSlice";
import { todoListReducer } from "../components/TodoList/TodosSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer,
});
export default rootReducer;
