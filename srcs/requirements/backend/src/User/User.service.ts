/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   User.service.ts                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aptive <aptive@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/28 17:17:15 by aptive            #+#    #+#             */
/*   Updated: 2023/06/29 00:39:18 by aptive           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interfaces/User.interfaces'
import { CreateUserDto } from './dto/create_User.dto';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class UserService {

	constructor(private readonly prisma: PrismaService){

	}

	findALL(){
		return this.prisma.user.findMany();
	}

	findById(id : number){
		return this.prisma.user.findUnique({ where : { id }});
	}

	async create(createUserDTO: CreateUserDto){
		await this.prisma.user.create({
			data: createUserDTO,
		});
	}

	// update(id : string, todo: User) {
	// 	const todoToUpdate = this.todos.find(t => t.id === Number(id))
	// 	if (!todoToUpdate)
	// 		return new NotFoundException ('Not found oups');

	// 	// apply to granualry update

	// 	if (todo.hasOwnProperty('done')){
	// 		todoToUpdate.done = todo.done;
	// 	}
	// 	if (todo.title)
	// 	{
	// 		todoToUpdate.title = todo.title
	// 	}
	// 	if (todo.description)
	// 	{
	// 		todoToUpdate.description = todo.description
	// 	}

	// 	const updatedTodo = this.todos.map(t => t.id !== Number(id) ? t : todoToUpdate)
	// 	this.todos = [...updatedTodo];
	// 	return {updateTodo: 1, todo: todoToUpdate};
	// }
	async updateUser(id: number, updateUserDto: CreateUserDto): Promise<boolean> {
		try {
			const { email, name } = updateUserDto;
			const updatedUser = await this.prisma.user.update({
				where: { id },
				data: { email, name },
			});
			return !!updatedUser;
		} catch (error) {
			throw new Error(`Failed to update user: ${error.message}`);
		}
	}

	delete(id: number){
		return this.prisma.user.delete({where: {id}});
	}
}
