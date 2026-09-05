# SyncBoard API - Assignment 02 Test Results

## Overview

The SyncBoard REST APIs were tested using Postman with mock data.

The API was tested through the local Express backend running on:

`http://localhost:5000`

## Authentication

| Test | Method | Endpoint | Result |
|---|---|---|---|
| Register User | POST | `/api/auth/register` | PASS |
| Login User | POST | `/api/auth/login` | PASS |

## Projects

| Test | Method | Endpoint | Result |
|---|---|---|---|
| Get All Projects | GET | `/api/projects` | PASS |
| Get Project by ID | GET | `/api/projects/1` | PASS |
| Create Project | POST | `/api/projects` | PASS |
| Update Project | PUT | `/api/projects/1` | PASS |
| Delete Project | DELETE | `/api/projects/1` | PASS |

## Tasks

| Test | Method | Endpoint | Result |
|---|---|---|---|
| Get All Tasks | GET | `/api/tasks` | PASS |
| Get Task by ID | GET | `/api/tasks/1` | PASS |
| Create Task | POST | `/api/tasks` | PASS |
| Update Task | PUT | `/api/tasks/1` | PASS |
| Delete Task | DELETE | `/api/tasks/1` | PASS |

## Members

| Test | Method | Endpoint | Result |
|---|---|---|---|
| Get All Members | GET | `/api/members` | PASS |
| Get Member by ID | GET | `/api/members/1` | PASS |

## Profiles

| Test | Method | Endpoint | Result |
|---|---|---|---|
| Get All Profiles | GET | `/api/profiles` | PASS |
| Get Profile by ID | GET | `/api/profiles/1` | PASS |

## Settings

| Test | Method | Endpoint | Result |
|---|---|---|---|
| Get All Settings | GET | `/api/settings` | PASS |
| Get User Settings | GET | `/api/settings/1` | PASS |
| Update User Settings | PUT | `/api/settings/1` | PASS |

## Test Summary

All 19 documented REST API requests were tested using Postman.

The APIs use mock/in-memory data for Assignment 02. Data changes may reset when the backend server is restarted.

## API Documentation

- Postman Collection: `SyncBoard-API-Assignment-02.postman_collection.json`
- OpenAPI Specification: `SyncBoard-API-Assignment-02.openapi.yaml`