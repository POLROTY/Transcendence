.PHONY: all re clean fclean

all:
	cd srcs && docker-compose up --build -d

re: fclean all

clean:
	cd srcs && docker-compose down --remove-orphans

fclean: clean
	docker volume prune -f
	docker image prune -f -a