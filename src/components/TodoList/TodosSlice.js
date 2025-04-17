const initState = [
    { id: 1, name: "Learn ReactJS", completed: false, priority: "High" },
    { id: 2, name: "Learn Node JS", completed: false, priority: "Medium" },
    { id: 3, name: "Learn redux", completed: true, priority: "Low" },
];

export const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case "todoList/addTodo":
            return [...state, action.payload];
        case "todoList/toggleTodoStatus":
            return state.map((todo) => {
                return todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo;
            });
        default:
            return state;
    }
};
