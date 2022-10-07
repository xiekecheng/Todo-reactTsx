import { FormEvent } from "react"
export type TodoProp = {
	id: string,
	task: string,
	isCompleted: boolean
}

export type AddTodoProps = {
	onSubmit: (e: FormEvent) => void,
	inputVal: string,
	setInputVal: (input: string) => void
}

