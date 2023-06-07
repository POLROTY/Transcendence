# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: aptive <aptive@student.42.fr>              +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2023/06/05 15:17:59 by aptive            #+#    #+#              #
#    Updated: 2023/06/06 18:31:04 by aptive           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

.PHONY: all re clean fclean

all:
	@if [ ! -d /home/transcendence/data/postgresql ]; then \
		sudo mkdir -p /home/transcendence/data/postgresql;\
		echo "Creation du dossier volumes ! OK ";\
	fi
	@if [ ! -d /home/transcendence/data/back ]; then \
		sudo mkdir -p /home/transcendence/data/back;\
		echo "Creation du dossier volumes ! OK ";\
	fi
	@if [ ! -d /home/transcendence/data/front ]; then \
		sudo mkdir -p /home/transcendence/data/front;\
		echo "Creation du dossier volumes ! OK ";\
	fi
	@docker compose -f ./srcs/docker-compose.yml up -d --build

re: fclean all


down :
	@docker compose -f ./srcs/docker-compose.yml down

clean:
	@docker compose -f ./srcs/docker-compose.yml down --remove-orphans

fclean: clean
	@docker volume rm srcs_front srcs_db-data
	docker volume prune -f
	docker image prune -f -a
	@docker rmi -f s srcs-front srcs-nest
	@sudo rm -rf /home/transcendence/data


execDB:
	@docker exec -ti postgredb /bin/sh

# execNginx:
# 	@docker exec -ti nginx /bin/sh

execNest:
	@docker exec -ti nest /bin/sh

execFront:
	@docker exec -ti front /bin/sh