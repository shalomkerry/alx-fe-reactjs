import { render, screen, fireEvent, getByRole } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../src/components/TodoList';
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

test('check if toggling todos',()=>{
    render(<TodoList/>)
    const input = getByRole('checkbox')
    fireEvent.change(input)
    expect(input.checked).isEqual(true)

})
test('check if deleting tasks is possible',()=>{
    render(<TodoList/>)
    const input = getByRole('button')
    fireEvent.change(input)
    expect(screen.getByText('alert'))
})