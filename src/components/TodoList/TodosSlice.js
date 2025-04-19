import {
    createSlice,
    createAsyncThunk,
} from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: "todolist",
    initialState: { status: "idle", todos: [] },
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
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.status = "idle";
            })
            .addCase(addNewTodos.fulfilled, (state, action) => {
                console.log({ action });
                state.todos.push(action.payload);
            })
            .addCase(updateTodos.fulfilled, (state, action) => {
                console.log('actionpayload', action.payload);

                let currentTodo = state.todos.find((todo) => todo.id == action.payload)
                currentTodo = action.payload
            });
    },
});

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    return data.todos;
});
export const addNewTodos = createAsyncThunk(
    "todos/addNewTodos",
    async (newTodo) => {
        const res = await fetch("/api/todos", {
            method: "POST",
            body: JSON.stringify(newTodo),
        });
        const data = await res.json();
        return data.todos;
    }
);
export const updateTodos = createAsyncThunk(
    "todos/updateTodos",
    async (newtodo) => {
        const res = await fetch("/api/updateTodo", {
            method: "POST",
            body: JSON.stringify(newtodo),
        });
        const data = await res.json();
        console.log('update', { data });

        return data.todos;
    }
);

export default todosSlice;
