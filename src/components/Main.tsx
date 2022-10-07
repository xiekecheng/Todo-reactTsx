import { useState, FormEvent, } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { TodoProp } from '../utils/type'
import AddTodo from './AddTodo';
import Todo from './Todo';
const Main = () => {
	const [inputVal, setInputVal] = useState<string>('')
	const [todo, setTodo] = useState<TodoProp[]>([])

	// 增加todo
	const handleAddTodo = (todoParam: TodoProp) => {
		setTodo([todoParam, ...todo])
	}

	const handleCheckd = (id: string) => {
		const updateTodo = todo.map(item => {
			if (item.id === id) {
				return {
					...item,
					isCompleted: !item.isCompleted
				}
			}
			return item
		})
		setTodo(updateTodo)
	}

	// 提交表单
	const onSubmit = (e: FormEvent) => {
		e.preventDefault()
		const todoParam: TodoProp = {
			id: uuidv4(),
			task: inputVal,
			isCompleted: false
		}
		inputVal && handleAddTodo(todoParam)
		setInputVal('')
	}

	return (
		<div className='w-full h-screen flex justify-center items-center'>
			<div className=' w-full max-w-[80%] sm:max-w-[500px]'>
				<h1 className=' text-center text-3xl my-10 text-gray-600'>Todo List</h1>
				<AddTodo onSubmit={onSubmit} inputVal={inputVal} setInputVal={setInputVal} />
				<Todo todo={todo} handleCheckd={handleCheckd} />
			</div>
		</div>
	)
}

export default Main