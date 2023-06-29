/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   AuthCredentials.dto.ts                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aptive <aptive@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/29 02:39:21 by aptive            #+#    #+#             */
/*   Updated: 2023/06/29 03:44:59 by aptive           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { ApiProperty } from "@nestjs/swagger";
import {IsEmail, IsNumber, IsString }from '@nestjs/class-validator';

export class AuthCredentialsDto {

	@ApiProperty({
		description: 'Unique ID autoincremente',
	})
	@IsNumber()
	readonly id : number;

	@ApiProperty({
		description: 'Unique Email',
	})
	@IsEmail()
	readonly email : string;

	@ApiProperty({
		description: 'name User',
	})
	@IsString()
	readonly name? : string;

	@ApiProperty({
		description: 'name User',
	})
	@IsString()
	password : string;
}
