/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   todos.controller.ts                                :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aptive <aptive@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/28 17:17:23 by aptive            #+#    #+#             */
/*   Updated: 2023/06/28 18:46:44 by aptive           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todos } from './interfaces/todos.interfaces'
import { CreateTotosDto } from './dto/create_todo.dto';



// localhost:3000/todos
@Controller('todos')
export class TodosController {
	constructor(private readonly todosServices: TodosService) {}

	@Get(':id')
	findOne(@Param('id') id : string) {
		console.log('id', id);
		return this.todosServices.findOne(id);
	}

	@Get()
	findALL(): Todos[] {
		return this.todosServices.findALL();
	}

	@Post()
	createTodo(@Body() newTodo: CreateTotosDto ) {
		console.log('newTodo', newTodo);
		this.todosServices.create(newTodo);
	}

	@Patch(':id')
	updateTodo(@Param('id') id : string, @Body() todo: CreateTotosDto) {
		this.todosServices.update(id, todo);
	}

	@Delete(':id')
	deleteTodo(@Param('id') id : string ) {
		return this.todosServices.delete(id);
	}

}
