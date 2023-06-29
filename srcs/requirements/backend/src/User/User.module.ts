/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   User.module.ts                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aptive <aptive@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/28 19:24:00 by aptive            #+#    #+#             */
/*   Updated: 2023/06/29 03:50:41 by aptive           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Module } from '@nestjs/common';
import { UserController } from './User.controller';
import { UserService } from './User.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';


@Module({
  imports: [JwtModule.register({
      signOptions: {expiresIn: '30d'},
    }),
  ],
  controllers: [UserController],
  providers: [UserService, PrismaService, JwtStrategy, JwtAuthGuard, JwtService]
})
export class UserModule {}
