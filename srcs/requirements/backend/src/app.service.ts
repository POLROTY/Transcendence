/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   app.service.ts                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aptive <aptive@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/28 16:45:45 by aptive            #+#    #+#             */
/*   Updated: 2023/06/28 16:49:56 by aptive           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    Logger.debug("Logger Ok");
    return 'Hello World!\n';
  }
}
