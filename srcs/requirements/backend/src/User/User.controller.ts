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
// import { User } from './interfaces/User.interfaces'
import { CreateUserDto } from './dto/create_User.dto';



// localhost:3000/User
@Controller('User')
export class UserController {
	constructor(private readonly UserServices: UserService) {}

	@Get(':id')
	findByID(@Param('id') id : string) {
		console.log('id', id);
		return this.UserServices.findById(Number(id));
	}

	@Get()
	findALL() {
		return this.UserServices.findALL();
	}

	@Post()
	createTodo(@Body() newUser: CreateUserDto ) {
		console.log('newUser', newUser);
		this.UserServices.create(newUser);
	}

	@Patch(':id')
	updateUser(@Param('id') id : string, @Body() CreateUserDTO: CreateUserDto) {
		console.log('updateUser', CreateUserDTO);
		this.UserServices.updateUser(Number(id), CreateUserDTO);
	}

	@Delete(':id')
	deleteTodo(@Param('id') id : string ) {
		return this.UserServices.delete(Number(id));
	}

}
