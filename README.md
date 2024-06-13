## Objective :
This project implements a robust and scalable backend system that manages requests from multiple users using a queue structure. Each client connected to the system has its own queue where all requests are processed sequentially. The system uses Node.js for the server, Redis for queue management, MongoDB for data storage, jest for testing, and Prometheus with Grafana for monitoring.

## Features
- User Authentication: Securely authenticate users before they can enqueue requests.
- Request Queueing: Implement a FIFO queue for each client to handle requests.
- Request Processing: Execute requests sequentially using worker processes.
- Concurrency Management: Handle multiple clients and queues concurrently.
- Scalability: Efficiently scale to manage increasing numbers of users and requests.
- Robustness: Error handling and recovery mechanisms to manage failures.
- Logging and Monitoring: Track request handling and monitor performance metrics.

## Architecture
- Client Interface: Users interact with the system and send requests to the server.
- Server: Receives requests, authenticates users, and enqueues requests.
- Queue Management: Each client has a dedicated queue in Redis.
- Worker Processes: Process tasks from queues sequentially.
- Database: MongoDB for data storage.
- Monitoring: Prometheus for metrics collection and Grafana for visualization.

## Diagram
![Flowcharts - Color](https://github.com/ManishGupta03/gAstroAssignment1/assets/117648576/18a20fa6-d964-438c-a2fd-f6aae18ed883)

## Technology Used
- Node-js
- MongoDB
- Jest
- Docker Centralization
- Express-Js
- Javascript
- Redis
- Promethus

## Installation
- Clone the repository: git clone https://github.com/your_username/gAstroAssignment1.git
- Navigate to the project directory: cd gAstroAssignment1
- Install dependencies: npm install
- configure database
- configure .env file

## Usage
- Start the server: npm run start
- Access the  application through a web browser by visiting http://localhost:8085

## Requirements(Should Installed in your local computer)
- Node -js
- MongoDB
- Docker

## API endpoints
- ResgisterUser(POST) ----> http://localhost:8085/auth/register
- Login(POST) ---> http://localhost:8085/auth/login
- Logout(POST) ---> http://localhost:8085/auth/logout
- Enqueue(POST) ---> http://localhost:8085/enqueue

## Pages
![grafanaDashBoard](https://github.com/ManishGupta03/gAstroAsssignmentl1/assets/117648576/28dc3f33-3824-49dd-8daf-bed99b986ada)
![grafanaDashBoard-2](https://github.com/ManishGupta03/gAstroAsssignmentl1/assets/117648576/d329316d-dcee-433b-bb3d-bafc3c785306)

# Grafana Dashboard

![redisConnection](https://github.com/ManishGupta03/gAstroAsssignmentl1/assets/117648576/d3f3a891-7c0e-4f69-9b3c-dba6c4fa750a)
# Redis Connection Server

![PrometheousDashboard](https://github.com/ManishGupta03/gAstroAsssignmentl1/assets/117648576/850ffd8e-7f90-4974-8472-7afee6f0bd55)
# Prometheous Dashboard

![dockerCenteralization](https://github.com/ManishGupta03/gAstroAsssignmentl1/assets/117648576/be2d333b-b9d1-41fd-aefc-d1f50c415167)
# Grafana DashBoard







