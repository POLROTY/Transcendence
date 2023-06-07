# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Dockerfile                                         :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: aptive <aptive@student.42.fr>              +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2023/06/07 16:09:16 by aptive            #+#    #+#              #
#    Updated: 2023/06/07 16:32:50 by aptive           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

FROM node:16.13.2-alpine

RUN mkdir /app
# COPY ./srcs /srcs
# COPY ./srcs /app
COPY ./prisma /prisma
WORKDIR /app


EXPOSE 3000
EXPOSE 5555

COPY ./tools/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# définir le point d'entrée pour le conteneur
ENTRYPOINT [ "../entrypoint.sh" ]

# CMD [ "npm", "run", "start:prod" ]
