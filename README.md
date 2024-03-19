# Fintech Portfolio Tracker

The Fintech Portfolio Tracker is a full-stack application designed to help users track their investments in stocks and cryptocurrencies, providing real-time valuation based on current market prices. This application utilizes React for the frontend, Node.js for the backend, and MySQL for data storage, all containerized with Docker for ease of setup and deployment.

## Prerequisites

Before you begin, ensure you have installed all of the following prerequisites on your development machine:

- Docker and Docker Compose
- Git (for cloning the repository)
- Node.js and yarn (if you plan to run the setup or application outside of Docker)

## Getting Started

These instructions will get your copy of the Fintech Portfolio Tracker up and running on your local machine for development and testing purposes.

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/WavenureGit/interview-exercise.git
cd fintech-portfolio-tracker
```

### Setup the Application

You can set up the application environment using the provided Makefile commands. This will create the necessary Docker images and containers for the frontend, backend, and database:

```bash
make build
```

### Build and Run the Application

To build and run the Docker containers for the application, use the following command:

```bash
make up
```

This command will start all the services defined in your `docker-compose.yml` file. The frontend should be accessible at `http://localhost:3000`, and the backend API at `http://localhost:4000`.


### Stopping the Application

To stop and remove the Docker containers, use:

```bash
make down
```

## Using the Application

After starting the application, navigate to `http://localhost:3000` in your browser to access the Fintech Portfolio Tracker frontend and `http://localhost:4000` for the backend. From there, you can add, update, and track your investment portfolio.
```
