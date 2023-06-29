/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   jwt-auth.guard.ts                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aptive <aptive@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/29 03:32:30 by aptive            #+#    #+#             */
/*   Updated: 2023/06/29 03:39:22 by aptive           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { AuthGuard } from "@nestjs/passport";
import { ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){
	canActivate(context: ExecutionContext){
		return super.canActivate(context);
	}

	handleRequest(err: any, user: any) {
		if (err || !user){
			throw err || new UnauthorizedException();
		}

	return user;
	}
}
