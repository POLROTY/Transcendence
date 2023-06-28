/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   User.controller.ts                                :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aptive <aptive@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/28 17:17:23 by aptive            #+#    #+#             */
/*   Updated: 2023/06/28 19:33:58 by aptive           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { UserService } from './User.service';
import { User } from './interfaces/User.interfaces'
import { CreateUserDto } from './dto/create_User.dto';



// localhost:3000/User
@Controller('User')
export class UserController {
	constructor(private readonly UserServices: UserService) {}

	// @Get(':id')
	// findOne(@Param('id') id : string) {
	// 	console.log('id', id);
	// 	return this.UserServices.findOne(id);
	// }

	@Get()
	findALL() {
		return this.UserServices.findALL();
	}

	// @Post()
	// createTodo(@Body() newTodo: CreateTotosDto ) {
	// 	console.log('newTodo', newTodo);
	// 	this.UserServices.create(newTodo);
	// }

	// @Patch(':id')
	// updateTodo(@Param('id') id : string, @Body() todo: CreateTotosDto) {
	// 	this.UserServices.update(id, todo);
	// }

	// @Delete(':id')
	// deleteTodo(@Param('id') id : string ) {
	// 	return this.UserServices.delete(id);
	// }

}
