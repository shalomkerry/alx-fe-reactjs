import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../src/components/TodoLists';
test('render toDoList',()=>{
    render(<TodoList/>)
    expect(screen.getByText('Tasks')).toBeInTheDocument();
})
test('check if action can be added',()=>{
    render(<TodoList/>)
    const input = screen.getByRole('textbox'); 

    fireEvent.keyDown(input, {key: 'A', code: 'KeyA', charCode: 13})
    fireEvent.click(screen.getByText('submit'))
    expect(screen.getByText('A')).toBeInTheDocument();
})