# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Dockerfile                                         :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: aptive <aptive@student.42.fr>              +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2023/06/29 17:44:21 by aptive            #+#    #+#              #
#    Updated: 2023/06/29 17:44:22 by aptive           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# # Installation de npm
# RUN apk add --no-cache npm

# # COPY ./srcs /app
# RUN mkdir /app

# # RUN mkdir /app
# WORKDIR /app

# EXPOSE	3002

# COPY ./tools/entrypoint.sh /entrypoint.sh
# RUN chmod +x /entrypoint.sh

# # définir le point d'entrée pour le conteneur
# ENTRYPOINT [ "../entrypoint.sh" ]
# # CMD		["/bin/bash", "-c", "npm install && npm start"]
FROM    node:16.17

WORKDIR /app

RUN npm install npm@9.7.1
RUN npm install -g @angular/cli

EXPOSE  4200

COPY ./tools/entrypoint.sh /app/entrypoint.sh
RUN chmod +x ./entrypoint.sh

# définir le point d'entrée pour le conteneur
ENTRYPOINT ["npm", "start"]

# CMD ["npm", "start"]
