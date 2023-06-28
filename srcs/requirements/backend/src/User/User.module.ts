/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   User.module.ts                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aptive <aptive@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/28 19:24:00 by aptive            #+#    #+#             */
/*   Updated: 2023/06/28 19:40:24 by aptive           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Module } from '@nestjs/common';
import { UserController } from './User.controller';
import { UserService } from './User.service';
import { PrismaService } from '../prisma/prisma.service';


@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService]
})
export class UserModule {}
