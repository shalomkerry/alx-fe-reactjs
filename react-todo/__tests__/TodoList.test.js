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
fireEvent.change(input,{target:{value:'yes'}})
  
    expect(screen.getByRole('textbox'))
    expect(screen.getByText('completed'))
    // expect(screen.getByText('yes'))
})