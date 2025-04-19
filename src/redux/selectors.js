import { createSelector } from "@reduxjs/toolkit";

export const todoListSelector = (state) => state.todoList.todos;
export const searchTextSelector = (state) => state.filters.search;
export const statusFilterSelector = (state) => state.filters.status;
export const priorityFilterSelector = (state) => state.filters.priority;

export const todosRemainingSelector = createSelector(
    todoListSelector,
    statusFilterSelector,
    priorityFilterSelector,
    searchTextSelector,
    (todoList, status, priorities, searchText) => {
        return todoList.filter((todo) => {
            if (status === "All") {
                return priorities.length
                    ? todo.name.toLowerCase().includes(searchText.toLowerCase()) && priorities.includes(todo.priority)
                    : todo.name.toLowerCase().includes(searchText.toLowerCase())

            } else {
                return (
                    todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
                    (status === "Completed" ? todo.completed : !todo.completed) &&
                    (priorities.length ? priorities.includes(todo.priority) : true)
                );
            }
        });


    }



);
