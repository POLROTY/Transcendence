/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   jwt.strategy.ts                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aptive <aptive@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/29 03:20:40 by aptive            #+#    #+#             */
/*   Updated: 2023/06/29 15:49:28 by aptive           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Prisma } from "@prisma/client";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(private readonly prisma: PrismaService) {
		super({
			jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: 'my-secret',
		})
	}

	async validate(payload : any) {
		const { userId } = payload;

		if (!userId || typeof userId !== 'number') {
			throw new UnauthorizedException('invalid token');
		}

		const user = await this.prisma.user.findUnique({where: {id: userId }});

		if (!user) {
			throw new UnauthorizedException('invalid token');
		}

		return user ;
	}
}
