/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   todos.interfaces.ts                                :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aptive <aptive@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/28 17:17:21 by aptive            #+#    #+#             */
/*   Updated: 2023/06/28 17:17:23 by aptive           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

export interface Todos {
	id: number;
	title: string;
	done: boolean;
	description? : string;
}
