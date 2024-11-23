import {render,screen,fireEvent} from '@testing-library/jest-dom'
import TodoList from '../src/pages/TodoList'
test('render homePage',()=>{
    render(TodoList)
    expect(screen.getAllByRole('paragraph')).toBeInTheDocument();
    expect(screen.getByText('Eat Water')).toBeInTheDocument();
})
test('check if action can be added',()=>{
    render(TodoList)
    const input = screen.getByRole('textbox'); 

    fireEvent.keyDown(input, {key: 'A', code: 'KeyA', charCode: 13})
    fireEvent.click(screen.getByText('add'))
    expect(screen.getByText('A'))
})