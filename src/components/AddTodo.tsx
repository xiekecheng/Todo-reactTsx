import React from 'react'
import { BsPlusCircle, BsXSquare } from "react-icons/bs";
import { AddTodoProps } from '../utils/type'
const AddTodo = ({ onSubmit, inputVal, setInputVal }: AddTodoProps) => {
	return (
		<>
			<form onSubmit={onSubmit}>
				<div className='flex items-center gap-2'>
					<input className='p-4 rounded-xl border-gray-200 grow' type="text" placeholder='请输入待办事项...' value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
					<button type='submit'><BsPlusCircle className=' text-gray-700 bg-orange-300 rounded-full' size={56} /></button>
				</div>
			</form>
		</>
	)
}

export default AddTodo