import React from 'react'
// import { useRecoilValue } from 'recoil'
// import { filteredTodoListState, todoListState } from './TodoStore'
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoListCreator';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilters';
import { useStore } from "./TodoStore"

export default function TodoList() {
    const todoList = useStore((state) => state.filteredTodoListState());

    return (
        <>
            <div>
                <TodoListStats />
                <TodoListFilters />
                <TodoItemCreator />
                {todoList.map((item) => (
                    <TodoItem key={item.id} item={item} />
                ))}
                {/* {todoList.map((todoItem) => (
                    <TodoItem key={todoItem.id} item={todoItem} />
                ))} */}
            </div>
        </>
    )
}
