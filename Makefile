# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: aptive <aptive@student.42.fr>              +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2023/06/05 15:17:59 by aptive            #+#    #+#              #
#    Updated: 2023/06/09 02:29:33 by aptive           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

.PHONY: all re clean fclean

all:
	@docker compose -f ./srcs/docker-compose.yml up -d --build

re: fclean all


down :
	@docker compose -f ./srcs/docker-compose.yml down

clean:
	@docker compose -f ./srcs/docker-compose.yml down --remove-orphans

fclean: clean
	@docker volume rm srcs_front srcs_db-data srcs_back
	docker volume prune -f
	docker image prune -f -a
	@docker rmi -f srcs-front srcs-nest postgres


execDB:
	@docker exec -ti postgredb /bin/sh

execBack:
	@docker exec -ti backend /bin/sh

execFront:
	@docker exec -ti front /bin/sh
