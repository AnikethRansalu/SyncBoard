# SyncBoard

SyncBoard is a collaborative task and project management web application designed to help teams organize projects, manage tasks, track progress, and collaborate efficiently.

This project was developed as a team project for **Assignment 02 – Working REST APIs with Mock Data Integrated with Frontend**.

The current version extends the static React frontend from Assignment 01 by integrating a Node.js and Express REST API using mock/in-memory data. The project includes REST API endpoints for authentication, projects, tasks, team members, profiles, and settings.

---

## 🚀 Features

- User Login
- User Registration
- Dashboard interface
- Projects / Workspace management
- Kanban-style task board
- To Do, Doing, and Done task columns
- Task creation, updating and deletion
- Task Details page
- Team Members page
- User Profile page
- Settings page
- REST API integration
- Mock/in-memory backend data
- CRUD operations for projects and tasks
- Settings update API
- Postman API testing
- OpenAPI 3.0 API specification
- Responsive navigation layout
- Reusable React components
- Client-side routing using React Router

---

## 🛠️ Technologies Used

### Frontend

- React
- Vite
- JavaScript
- HTML5
- CSS3
- React Router DOM

### Backend

- Node.js
- Express.js
- REST API
- CORS
- Mock/in-memory data

### API Documentation and Testing

- Postman
- OpenAPI 3.0
- YAML
- JSON

### Version Control

- Git
- GitHub
- Feature branches
- Pull Requests

---

## 📂 Project Structure

```text
SyncBoard
│
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── Board.jsx
│   │   │   ├── Column.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── Layout.css
│   │   │   └── TaskCard.jsx
│   │   │
│   │   ├── pages
│   │   │   ├── Login.jsx
│   │   │   ├── Login.css
│   │   │   ├── Register.jsx
│   │   │   ├── Register.css
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Dashboard.css
│   │   │   ├── Projects.jsx
│   │   │   ├── Projects.css
│   │   │   ├── Tasks.jsx
│   │   │   ├── Tasks.css
│   │   │   ├── TaskDetails.jsx
│   │   │   ├── TaskDetails.css
│   │   │   ├── Members.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── Settings.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── controllers
│   ├── data
│   ├── routes
│   └── server.js
│
├── docs
│   ├── SyncBoard-API-Assignment-02.openapi.yaml
│   ├── SyncBoard-API-Assignment-02.postman_collection.json
│   └── API-TEST-RESULTS.md
│
└── README.md
```

---

# 👥 Team Members and Contributions

The team member order below follows the team order used in the Assignment 01 project document.

## 1. Aniketh

**Role: Project Setup, Authentication and Final Integration**

Responsibilities:

- Initial React and Vite project setup
- GitHub repository setup
- Application routing structure
- Shared application layout
- Authentication REST API
- Login and registration frontend integration
- Project coordination
- Final dashboard implementation
- Final application integration and polishing

---

## 2. Dinindu

**Role: Projects Management**

Responsibilities:

- Projects REST API
- Project mock data
- Project controllers
- Project API routes
- Projects frontend integration
- Project creation
- Project updating
- Project deletion
- Project information display

---

## 3. Dewmina

**Role: Testing and API Documentation**

Responsibilities:

- REST API testing using Postman
- Postman API collection
- OpenAPI 3.0 specification
- API test result documentation
- README documentation
- API endpoint documentation
- Assignment 02 documentation support

---

## 4. Chanithu

**Role: Task Management and Kanban Board**

Responsibilities:

- Tasks REST API
- Task mock data
- Task controllers
- Task API routes
- Tasks frontend integration
- Kanban task board
- To Do, Doing and Done columns
- Task creation and updating
- Task deletion
- Task Details page
- Reusable task components

---

## 5. Chamidu

**Role: Team Members, Profile and Settings**

Responsibilities:

- Members REST API
- Profile REST API
- Settings REST API
- Members mock data
- Profile mock data
- Settings mock data
- Team Members frontend integration
- Profile frontend integration
- Settings frontend integration
- Settings update functionality

---

# ▶️ How to Run the Project

## Prerequisites

Make sure the following software is installed:

- Node.js
- npm
- Git
- Visual Studio Code or another suitable code editor
- A modern web browser

---

## 1. Clone the Repository

The SyncBoard GitHub repository is:

https://github.com/AnikethRansalu/SyncBoard

Clone the repository:

```bash
git clone https://github.com/AnikethRansalu/SyncBoard.git
```

Navigate into the project:

```bash
cd SyncBoard
```

---

## 2. Run the Backend

Open a terminal and navigate to the server directory:

```bash
cd server
```

Install the backend dependencies:

```bash
npm install
```

Start the backend server:

```bash
node server.js
```

The backend API runs on:

```text
http://localhost:5000
```

Health check:

```text
http://localhost:5000/api/health
```

The API should return a successful health response when the backend is running.

---

## 3. Run the Frontend

Open another terminal.

From the SyncBoard project directory, navigate to the client directory:

```bash
cd client
```

Install the frontend dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Vite normally provides a local address similar to:

```text
http://localhost:5173
```

Open the URL displayed by Vite in a web browser.

### Windows PowerShell Alternative

If PowerShell blocks the npm PowerShell script, use:

```bash
npm.cmd install
npm.cmd run dev
```

---

# 🧭 Application Pages

| Page | Route |
|------|-------|
| Login | `/login` |
| Registration | `/register` |
| Dashboard | `/dashboard` |
| Projects | `/projects` |
| Tasks | `/tasks` |
| Task Details | `/task/:id` |
| Team Members | `/members` |
| Profile | `/profile` |
| Settings | `/settings` |

---

# 🔌 REST API Documentation

The backend provides REST API endpoints for the main SyncBoard modules.

## Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a user |
| POST | `/api/auth/login` | Login a user |

## Projects

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects/:id` | Get project by ID |
| POST | `/api/projects` | Create a project |
| PUT | `/api/projects/:id` | Update a project |
| DELETE | `/api/projects/:id` | Delete a project |

## Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get task by ID |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## Members

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/members` | Get all members |
| GET | `/api/members/:id` | Get member by ID |

## Profiles

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/profiles` | Get all profiles |
| GET | `/api/profiles/:id` | Get profile by ID |

## Settings

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/settings` | Get all settings |
| GET | `/api/settings/:userId` | Get settings for a user |
| PUT | `/api/settings/:userId` | Update user settings |

---

# 🧪 API Testing

The SyncBoard REST APIs were tested using Postman.

The Postman collection contains **19 API requests** covering:

- Authentication
- Projects
- Tasks
- Members
- Profiles
- Settings

The test results are documented in:

```text
docs/API-TEST-RESULTS.md
```

---

# 📑 API Documentation Files

The project includes the following API documentation files.

### Postman Collection

```text
docs/SyncBoard-API-Assignment-02.postman_collection.json
```

This collection contains the 19 REST API requests used for testing.

### OpenAPI Specification

```text
docs/SyncBoard-API-Assignment-02.openapi.yaml
```

This contains the OpenAPI 3.0 specification generated for the SyncBoard REST API.

### API Test Results

```text
docs/API-TEST-RESULTS.md
```

This documents the API testing results for the 19 documented REST API requests.

---

# 💾 Mock Data

Assignment 02 uses **mock/in-memory data** instead of a database.

The backend stores sample data in JavaScript files inside:

```text
server/data/
```

Examples include:

```text
server/data/projects.js
server/data/tasks.js
server/data/members.js
server/data/profiles.js
server/data/settings.js
```

Because the current version uses in-memory mock data, changes made through the APIs may reset when the backend server is restarted.

Database persistence is not part of the current Assignment 02 mock-data implementation and can be added in a later development stage.

---

# 🌿 GitHub Workflow

The project was developed using Git and GitHub with feature branches for different areas of the application.

Feature branches include:

```text
feature/project-setup
feature/login-registration
feature/project-workspace
feature/kanban-task-board
feature/team-profile-settings-ui-ux-integration
feature/testing-api-documentation
```

Each team member worked on an assigned feature area and committed their changes using Git.

Pull Requests were used to integrate completed features into the `main` branch.

The repository history contains the individual team contributions and merged Pull Requests.

---

# 📌 Assignment 02

Assignment 02 focuses on:

**Working REST APIs with Mock Data Integrated with Frontend**

The project demonstrates the integration between the React frontend and the Node.js/Express REST API.

The API documentation and testing materials are available in the `docs` directory.

---

# 📄 Conclusion

SyncBoard has progressed from the static frontend skeleton developed in Assignment 01 to a frontend-integrated REST API application for Assignment 02.

The current implementation provides working REST APIs with mock data for authentication, projects, tasks, members, profiles and settings, together with frontend integration.

Future development stages can extend the system with database persistence, advanced authentication, offline support, automated testing, real-time collaboration and deployment.
