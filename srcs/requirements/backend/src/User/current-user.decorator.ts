/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   current-user.decorator.ts                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aptive <aptive@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/29 15:23:07 by aptive            #+#    #+#             */
/*   Updated: 2023/06/29 15:36:38 by aptive           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { createParamDecorator } from "@nestjs/common";

export const CurrentUser = createParamDecorator((_, req) => {
	const user =req.args[0].user;

	user.password = undefined;

	return user;
});
