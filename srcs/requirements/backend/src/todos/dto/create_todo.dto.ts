/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   create_todo.dto.ts                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aptive <aptive@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/28 17:42:58 by aptive            #+#    #+#             */
/*   Updated: 2023/06/28 17:46:07 by aptive           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

export class CreateTotosDto {
	readonly id : number;
	readonly title : string;
	readonly done : boolean;
	readonly description? : string;
}
