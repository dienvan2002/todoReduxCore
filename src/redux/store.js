import { configureStore } from '@reduxjs/toolkit'
import filterSlice from '../components/Filters/filterSlice'
import todosSlice from '../components/TodoList/todosSlice'

const store = configureStore({
    reducer: {
        filters: filterSlice.reducer,
        todoList: todosSlice.reducer,
    },
})

export default store
