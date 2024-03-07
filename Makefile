# Define default make command
all: up

# Build Docker containers
build:
	docker compose -f docker-compose.yml build

# Start Docker containers
up:
	docker compose -f docker-compose.yml up

# Start Docker containers with live reload
up-dev:
	docker compose -f docker-compose.yml up client server

# Stop Docker containers
down:
	docker compose -f docker-compose.yml down

# Rebuild and start Docker containers
rebuild: down build up

.PHONY: setup build up up-dev down rebuild
