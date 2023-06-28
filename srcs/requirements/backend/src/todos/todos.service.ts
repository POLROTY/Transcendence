/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   todos.service.ts                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aptive <aptive@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/28 17:17:15 by aptive            #+#    #+#             */
/*   Updated: 2023/06/28 18:46:08 by aptive           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Injectable, NotFoundException } from '@nestjs/common';
import { Todos } from './interfaces/todos.interfaces'
import { CreateTotosDto } from './dto/create_todo.dto';


@Injectable()
export class TodosService {
	todos: Todos[] = [
		{
			id : 1,
			title: 'todos app',
			description: 'Create NesTJS todos APP',
			done: false,
		},
		{
			id : 2,
			title: 'bread',
			description: 'buy bread',
			done: true,
		},
		{
			id : 3,
			title: 'wine',
			description: 'buy wine',
			done: true,
		},
	];

	findOne(id : string ){
		return this.todos.find(todo => todo.id === Number(id));
	}

	findALL(): Todos[]{
		return this.todos;
	}

	create(todo: CreateTotosDto){
		this.todos = [...this.todos, todo];
	}

	update(id : string, todo: Todos) {
		const todoToUpdate = this.todos.find(t => t.id === Number(id))
		if (!todoToUpdate)
			return new NotFoundException ('Not found oups');

		// apply to granualry update

		if (todo.hasOwnProperty('done')){
			todoToUpdate.done = todo.done;
		}
		if (todo.title)
		{
			todoToUpdate.title = todo.title
		}
		if (todo.description)
		{
			todoToUpdate.description = todo.description
		}

		const updatedTodo = this.todos.map(t => t.id !== Number(id) ? t : todoToUpdate)
		this.todos = [...updatedTodo];
		return {updateTodo: 1, todo: todoToUpdate};
	}

	delete(id :string) {
		const lenTodos = this.todos.length;
		this.todos = [...this.todos.filter(t => t.id !== Number(id))]
		if (this.todos.length < lenTodos){
			return {deletedTodo : 1, nbTodos : this.todos.length};
		}
		else
			return {deletedTodo : 0, nbTodos : this.todos.length};


	}
}
