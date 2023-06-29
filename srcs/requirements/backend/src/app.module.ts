/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   app.module.ts                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aptive <aptive@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/28 16:45:40 by aptive            #+#    #+#             */
/*   Updated: 2023/06/28 19:40:08 by aptive           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User/User.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
