# SyncBoard

SyncBoard is a collaborative project management web application developed as a full-stack group project. It provides project, task, team-member, profile, settings, and authentication functionality through a React/Vite frontend and a Node.js/Express backend connected to MongoDB Atlas.

## Assignment 03 – Working Full-Stack Application

This version extends the earlier static frontend and REST API work into a database-backed full-stack application.

### Team Members and Responsibilities

The following member order and responsibilities are based on the team allocation provided for the project:

| Team Member | Role | Main Responsibilities |
|---|---|---|
| **A.R Kapuru Bandara (Aniketh)** | Project Setup, Authentication & Final Integration | React/Vite project setup, project coordination, authentication API, login/register frontend integration and final integration. |
| **D.I. Liyanage (Dinindu)** | Projects Management | Projects REST API and Projects frontend integration, including project retrieval and CRUD operations. |
| **P.B.C. Dewnitha (Chanithu)** | Task Management & Kanban Board | Tasks REST API, task CRUD operations and Kanban/task-board frontend integration. |
| **G.K.C. Dulara (Chamidu)** | Team, Profile & Settings | Members API, Profiles API, Settings API and corresponding Members, Profile and Settings frontend integration. |
| **D.P. Fonseka (Dewmina)** | Testing & API Documentation | Postman API testing, API test-result documentation, OpenAPI specification and README/API documentation support. |

## Technologies

### Frontend
- React
- Vite
- JavaScript
- HTML/CSS

### Backend
- Node.js
- Express.js
- REST APIs
- CORS
- dotenv

### Database
- MongoDB Atlas Free Tier
- Mongoose

### Authentication
- Database-backed user registration and login
- bcryptjs password hashing

### API Documentation and Testing
- Postman
- OpenAPI 3.0.3

## Project Structure

```text
SyncBoard/
├── client/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── projectController.js
│   │   ├── taskController.js
│   │   ├── memberController.js
│   │   ├── profileController.js
│   │   └── settingsController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Project.js
│   │   ├── Task.js
│   │   ├── Member.js
│   │   ├── Profile.js
│   │   └── Settings.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── projectRoutes.js
│   │   ├── taskRoutes.js
│   │   ├── memberRoutes.js
│   │   ├── profileRoutes.js
│   │   └── settingsRoutes.js
│   ├── data/
│   ├── seedUsers.js
│   ├── seedProjects.js
│   ├── seedTasks.js
│   ├── seedMembers.js
│   ├── seedProfiles.js
│   ├── seedSettings.js
│   ├── server.js
│   ├── .env
│   └── .gitignore
│
├── docs/
│   ├── API-TEST-RESULTS-ASSIGNMENT-03.md
│   └── SyncBoard-API-Assignment-03.openapi.yaml
│
└── README.md
```

## Application Architecture

```text
React / Vite Frontend
        |
        | HTTP REST API
        v
Node.js / Express Backend
        |
        | Mongoose
        v
MongoDB Atlas
```

The frontend communicates with the Express backend through REST endpoints. The backend uses Mongoose models and controllers to read and write data in MongoDB Atlas.

## Prerequisites

Install the following before running the project:

- Node.js
- npm
- Git
- A MongoDB Atlas account

## Clone the Repository

```bash
git clone https://github.com/AnikethRansalu/SyncBoard.git
cd SyncBoard
```

## Backend Setup

Open a terminal in the `server` directory:

```bash
cd server
npm install
```

Create a `.env` file inside `server/`:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_ATLAS_CONNECTION_STRING
```

Do not commit `.env` or expose the MongoDB connection string.

The backend uses:

```text
server/.gitignore
```

to exclude `.env` and `node_modules`.

## MongoDB Atlas Setup

1. Create a MongoDB Atlas account.
2. Create a Free Tier cluster.
3. Configure a database user.
4. Configure the network access/IP address required for local development.
5. Copy the MongoDB connection string.
6. Place it in `server/.env` as `MONGO_URI`.
7. Start the backend and confirm the MongoDB connection message.

Example:

```text
MongoDB Atlas connected successfully
```

## Seed the Database

The project includes seed scripts for the database-backed resources.

From the `server` directory:

```bash
node seedUsers.js
node seedProjects.js
node seedTasks.js
node seedMembers.js
node seedProfiles.js
node seedSettings.js
```

The seed scripts populate the corresponding collections with development/test data.

## Start the Backend

From `server/`:

```bash
node server.js
```

The backend runs on:

```text
http://localhost:5000
```

### Health Check

Open:

```text
http://localhost:5000/api/health
```

Expected response:

```json
{
  "status": "OK",
  "message": "SyncBoard backend is healthy"
}
```

## Frontend Setup

Open another terminal:

```bash
cd client
npm install
npm run dev
```

The frontend is configured for local development on:

```text
http://localhost:3000
```

## Application Pages

The application includes the following routes:

- `/login`
- `/register`
- `/dashboard`
- `/projects`
- `/tasks`
- `/task/:id`
- `/members`
- `/profile`
- `/settings`

## Authentication API

### Register

```http
POST /api/auth/register
```

### Login

```http
POST /api/auth/login
```

Passwords are hashed with bcryptjs before database storage.

The current implementation provides database-backed authentication. JWT/token-based authentication is not claimed as part of this Assignment 03 implementation.

## REST API Endpoints

### Projects

```http
GET    /api/projects
GET    /api/projects/:id
POST   /api/projects
PUT    /api/projects/:id
DELETE /api/projects/:id
```

### Tasks

```http
GET    /api/tasks
GET    /api/tasks/:id
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

### Members

```http
GET /api/members
GET /api/members/:id
```

### Profiles

```http
GET /api/profiles
GET /api/profiles/:id
```

### Settings

```http
GET /api/settings
GET /api/settings/:userId
PUT /api/settings/:userId
```

## Database Collections

The application uses Mongoose models for the following resources:

- `User`
- `Project`
- `Task`
- `Member`
- `Profile`
- `Settings`

These models provide the database persistence layer for the application.

## Persistence

Assignment 03 replaces the earlier in-memory API persistence with MongoDB Atlas persistence for the implemented resources.

Data created or modified through the database-backed APIs remains available after restarting the backend, provided the same MongoDB Atlas database is used.

## API Documentation

Assignment 03 API testing and documentation are available in the `docs/` directory:

```text
docs/API-TEST-RESULTS-ASSIGNMENT-03.md
docs/SyncBoard-API-Assignment-03.openapi.yaml
```

The OpenAPI document currently focuses on the Projects API.

## API Testing

The implemented database-backed APIs were tested using Postman.

Testing included:

- GET operations
- POST operations
- PUT operations
- DELETE operations
- Retrieval by ID where implemented
- MongoDB Atlas persistence
- Persistence after backend restart

The detailed Assignment 03 API testing results are documented in:

```text
docs/API-TEST-RESULTS-ASSIGNMENT-03.md
```

## GitHub Repository

Repository:

https://github.com/AnikethRansalu/SyncBoard

### Assignment Tags

```text
assignment-01-static-frontend
assignment-02-working-rest-apis
assignment-03-working-full-stack-application
```

The Assignment 03 tag represents the completed database-backed full-stack checkpoint.

## Team Contributions

### 1. Aniketh – Project Setup, Authentication & Final Integration
- React/Vite project setup and coordination
- MongoDB Atlas connection integration
- User database model
- Database-backed registration/login
- Password hashing with bcryptjs
- Final full-stack integration and coordination

### 2. Dinindu – Projects Management
- Project Mongoose model
- Database-backed Projects CRUD API
- Project seed data
- Projects API persistence testing

### 3. Chanithu – Task Management & Kanban Board
- Task REST API work
- Task database persistence
- Task CRUD testing
- Kanban/task-board integration work

### 4. Chamidu – Team, Profile & Settings
- Members database model/API
- Profiles database model/API
- Settings database model/API
- Corresponding persistence testing

### 5. Dewmina – Testing & API Documentation
- Postman API testing
- Assignment 03 API test-result documentation
- OpenAPI specification
- README/API documentation support

## Complete Run Procedure

### Terminal 1 – Backend

```bash
cd SyncBoard/server
npm install
node server.js
```

If the database needs seed data:

```bash
node seedUsers.js
node seedProjects.js
node seedTasks.js
node seedMembers.js
node seedProfiles.js
node seedSettings.js
```

### Terminal 2 – Frontend

```bash
cd SyncBoard/client
npm install
npm run dev
```

Then open the frontend at:

```text
http://localhost:3000
```

## Troubleshooting

### MongoDB connection fails

Check:

- `MONGO_URI` is present in `server/.env`.
- The MongoDB Atlas cluster is running.
- The database user credentials are correct.
- Your current IP/network is allowed in MongoDB Atlas.
- The connection string has been copied correctly.

### Backend does not start

Check that:

```bash
npm install
```

has been completed inside `server/`.

Then run:

```bash
node server.js
```

### Frontend does not start

Check that:

```bash
npm install
```

has been completed inside `client/`.

Then run:

```bash
npm run dev
```

### API requests fail

Confirm that the backend is running on:

```text
http://localhost:5000
```

and that the frontend is running on:

```text
http://localhost:3000
```

Also check the browser console and backend terminal for errors.

## Current Scope and Limitations

This README describes the features actually implemented and tested for the Assignment 03 database-backed checkpoint.

The following items are **not claimed as completed here unless implemented separately**:

- JWT/token-based authentication
- Automated Jest/React Testing Library/Supertest test suites
- CI pipeline
- WebSocket/Socket.io realtime synchronization
- Docker/docker-compose deployment
- Public production deployment
- Full offline/local-storage synchronization
- Advanced concurrent-edit conflict resolution

These can be addressed in later project milestones if required by the overall project brief.

## Summary

SyncBoard Assignment 03 provides a working full-stack foundation consisting of:

- React/Vite frontend
- Node.js/Express REST backend
- MongoDB Atlas database
- Mongoose models
- Database-backed authentication
- Database-backed Projects, Tasks, Members, Profiles and Settings persistence
- Postman API testing
- OpenAPI documentation
- Team-based GitHub contributions

**Assignment 03 Tag:**

```text
assignment-03-working-full-stack-application
```
