# Project Name

Project Name is a micro-frontend-nx application developed using Express, TypeORM, MongoDB, and React. It follows a microservice architecture for the backend.

## Overview

The main objective of this project was to implement a microservice architecture along with Dockerization. By adopting a microservice architecture, the application achieves better scalability, modularity, and independent development of each service. Dockerizing the services enables easy deployment and ensures consistency across different environments.

The project's codebase has been organized into smaller, reusable libraries that encapsulate specific functionality. This approach promotes code maintainability and allows for the separation of concerns based on business logic domains. The libraries can be shared and utilized across different applications, enhancing code reuse and reducing development time.


## Features

1. **Microservice Architecture**: The application is built using a microservice architecture, allowing for modular development and scalability. Each microservice focuses on a specific functionality of the application and communicates with other services through well-defined APIs.

2. **Dockerization**: The services are Dockerized, enabling easy deployment and management of the application. Docker containers provide consistency across different environments and simplify the setup process.

3. **Frontend Library**: The frontend codebase is organized into reusable libraries, promoting code modularity and reusability. These libraries encapsulate specific functionality, making it easier to develop and maintain different components of the frontend application.

4. **Backend Library**: The backend codebase is structured using smaller libraries, following a domain-driven design approach. Each library represents a specific business logic domain, allowing for better separation of concerns and easier maintenance of the backend code.

5. **Business Logic Domains**: The project is divided into separate libraries based on different business logic domains. This approach ensures that each library focuses on a specific aspect of the application's functionality, making the codebase more organized and maintainable.

6. **Code Reusability**: The modular libraries in both the frontend and backend allow for code reuse. Common functionalities can be abstracted into reusable components or modules, reducing redundancy and improving development efficiency.

7. **Scalability**: The microservice architecture and Dockerization provide a scalable foundation for the application. Each microservice can be independently scaled based on demand, allowing for efficient resource allocation and improved performance.

8. **Easy Deployment**: The Dockerized services simplify the deployment process. The application can be easily deployed to various environments, ensuring consistent behavior across different platforms and reducing deployment-related issues.


## Architecture

The project is built using the following technologies:

- **Frontend**: React, Typescript, HTML, CSS, Tailwind
- **Backend**: Express.js, Node.js
- **Database**: MongoDB
- **ORM**: TypeORM


## Prerequisites

To run this application, you have the following options:

### Running with Docker Compose

- Docker
- Docker Compose

### Running without Docker Compose (local MongoDB)

- Node.js
- MongoDB

## Getting Started

Choose one of the following methods to get the project up and running on your local machine.

### Running with Docker Compose

1. Clone the repository: `git clone <repository-url>`
2. Change to the project directory: `cd project-directory`
3. Build and start the containers: `docker-compose up --build`
4. The retrieval post service application will be accessible at `http://localhost:3000`
5. The management post service application will be accessible at `http://localhost:3001`
6. The react app application will be accessible at `http://localhost:4200`


### Running without Docker Compose (local MongoDB)

1. Clone the repository: `git clone <repository-url>`
2. Change to the project directory: `cd project-directory`
3. Install dependencies: `npm install`
4. Install Nx cli: `npm i nx -g`
5. Start the backend service server: `nx serve <projectName>`
6. The application will be accessible at `http://localhost:<appPort>`

### Database

If you are running the application without Docker Compose, follow these additional steps to set up the MongoDB database:

1. Install and configure MongoDB on your machine via docker [Mongodb installation](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-community-with-docker/).
2. run `docker run --name mongo -d mongodb/mongodb-community-server:latest` in the terminal.
3. Update the database connection settings in the backend configuration files.

## Configuration

The project configuration can be found in the following files:

- `apps/services/post-management-service/.env.local` - post-management-service variables
- `apps/services/post-retrieval-service/.env.local` - post-management-service variables
-`apps/libs/post/utility/.env.local` - dataSource variables

Make sure to update the configuration files with the appropriate values for your environment.
