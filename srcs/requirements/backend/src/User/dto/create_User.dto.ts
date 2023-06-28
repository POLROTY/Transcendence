/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   create_User.dto.ts                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aptive <aptive@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/28 17:42:58 by aptive            #+#    #+#             */
/*   Updated: 2023/06/29 00:18:06 by aptive           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

export class CreateUserDto {
	readonly id : number;
	readonly email : string;
	readonly name? : string;
}
