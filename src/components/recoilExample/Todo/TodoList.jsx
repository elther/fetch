import React from 'react'
import { useRecoilValue } from 'recoil'
import { filteredTodoListState, todoListState } from './TodoStore'
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoListCreator';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilters';

export default function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState);

    return (
        <>
            <div>
                <TodoItemCreator />
                <TodoListStats />
                <TodoListFilters />
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
