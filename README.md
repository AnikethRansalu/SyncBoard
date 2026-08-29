# SyncBoard

SyncBoard is a collaborative task and project management web application designed to help teams organize projects, manage tasks, track progress, and collaborate efficiently.

This project was developed as a team project for **Assignment 01 – Static Front-End Skeleton**. The current version focuses on building the user interface, page structure, navigation, reusable components, and consistent styling using React.

---

## 🚀 Features

- User Login page
- User Registration page
- Dashboard
- Projects / Workspace page
- Kanban-style task board
- To Do, Doing, and Done task columns
- Task cards with priority indicators
- Task Details page
- Team Members page
- User Profile page
- Settings page
- Responsive navigation layout
- Reusable React components
- Client-side routing using React Router

---

## 🛠️ Technologies Used

- React
- Vite
- JavaScript
- HTML5
- CSS3
- React Router DOM
- Git
- GitHub

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
└── README.md
```

---

## 👥 Team Members and Contributions

### 1. Aniketh

**Role: Project Setup and Application Layout**

Responsibilities:

- Initial React and Vite project setup
- GitHub repository setup
- Application routing structure
- Common navigation bar
- Shared application layout
- Integration of project components

---

### 2. Dinindu

**Role: Authentication Interface**

Responsibilities:

- Login page user interface
- Registration page user interface
- Authentication page styling
- Form layouts and navigation between authentication pages

---

### 3. Dewmina

**Role: Dashboard and Project Workspace**

Responsibilities:

- Dashboard interface
- Project workspace page
- Project layout and styling
- Project information display

---

### 4. Chanithu

**Role: Task Management and Kanban Board**

Responsibilities:

- Kanban task board
- To Do, Doing, and Done columns
- Reusable task card component
- Tasks page
- Task Details page
- Task priority indicators

---

### 5. Chamidu

**Role: Team, Profile and Settings**

Responsibilities:

- Team Members page
- Profile page
- Settings page
- User interface consistency
- Supporting application integration

---

# ▶️ How to Run the Project

## Prerequisites

Make sure the following software is installed on your computer:

- Node.js
- npm
- Git

## 1. Clone the Repository

Open Command Prompt or PowerShell and run:

```bash
git clone https://github.com/AnikethRansalu/SyncBoard.git
```

## 2. Navigate to the Client Directory

```bash
cd SyncBoard/client
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Start the Development Server

```bash
npm run dev
```

## 5. Open the Application

After running the development server, Vite will display a local URL similar to:

```text
http://localhost:5173/
```

Open this URL in your web browser to access the SyncBoard application.

---

## 🧭 Application Pages

The SyncBoard front-end currently includes the following pages:

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

## 🌿 GitHub Workflow

The project was developed using Git and GitHub with feature branches for different areas of the application.

Example feature branches include:

```text
feature/project-setup
feature/login-registration
feature/project-workspace
feature/kanban-task-board
feature/team-profile-settings
```

Each team member worked on their assigned feature area and committed their changes using Git. Pull Requests were used to integrate completed features into the main branch.

---

