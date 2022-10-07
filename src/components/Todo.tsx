import React from 'react'
import { TodoProp } from '../utils/type'
import { BsXSquare } from "react-icons/bs";
type typetodo = {
	todo: TodoProp[],
	handleCheckd: (id: string) => void
}
const Todo = ({ todo, handleCheckd }: typetodo) => {
	return (
		<div>
			<ul>
				{
					todo.map(item => (
						<li key={item.id}>
							<div className={`flex w-full justify-between items-center rounded-xl gap-4  p-4 my-2 ${item.isCompleted ? 'bg-gray-400' : 'bg-green-300'}`}>
								<p className={` w-full text-ellipsis overflow-hidden ${item.isCompleted ? 'line-through text-white' : 'no-underline text-black-500'}`}>
									{item.task}
								</p>
								<div className='flex gap-4'>
									<BsXSquare className='bg-red-500 text-white' />
									<input type="checkbox" checked={item.isCompleted} onChange={() => handleCheckd(item.id)} />
								</div>
							</div>
						</li>
					))
				}
			</ul>
		</div>
	)
}

export default Todo