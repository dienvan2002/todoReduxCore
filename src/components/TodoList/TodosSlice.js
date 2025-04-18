import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: "todolist",
    initialState: [
        { id: 1, name: "Learn ReactJS", completed: false, priority: "High" },
        { id: 2, name: "Learn Node JS", completed: false, priority: "Medium" },
        { id: 3, name: "Learn redux", completed: true, priority: "Low" },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        toggleTodoStatus: (state, action) => {
            return state.map((todo) => {
                return todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo;
            });
        },
    },
});
