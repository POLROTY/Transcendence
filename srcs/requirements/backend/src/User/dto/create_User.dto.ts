/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   create_User.dto.ts                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aptive <aptive@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/28 17:42:58 by aptive            #+#    #+#             */
/*   Updated: 2023/06/29 02:46:38 by aptive           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { ApiProperty } from "@nestjs/swagger";
import {IsEmail, IsNumber, IsString }from '@nestjs/class-validator';
import { AuthCredentialsDto } from "./AuthCredentials.dto";

export class CreateUserDto extends AuthCredentialsDto{

	// @ApiProperty({
	// 	description: 'Unique ID autoincremente',
	// })
	// @IsNumber()
	// readonly id : number;

	// @ApiProperty({
	// 	description: 'Unique Email',
	// })
	// @IsEmail()
	// readonly email : string;

	// @ApiProperty({
	// 	description: 'name User',
	// })
	// @IsString()
	// readonly name? : string;

	// @ApiProperty({
	// 	description: 'name User',
	// })
	// @IsString()
	// password : string;
}
