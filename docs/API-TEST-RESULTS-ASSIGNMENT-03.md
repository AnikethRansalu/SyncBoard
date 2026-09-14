# SyncBoard - Assignment 03 API Test Results

## Database
- Database: MongoDB Atlas
- Tier: Free
- Database connection: Successful

## Projects API

### GET /api/projects
Status: PASSED

- Successfully retrieved projects from MongoDB Atlas.
- Existing projects were returned successfully.
- MongoDB `_id`, `createdAt`, and `updatedAt` fields were generated.

### POST /api/projects
Status: PASSED

- Successfully created a new project.
- HTTP Status: 201 Created.
- New project was stored in MongoDB Atlas.

### PUT /api/projects/:id
Status: PASSED

- Successfully updated an existing project.
- HTTP Status: 200 OK.
- Updated project data was persisted in MongoDB Atlas.

### DELETE /api/projects/:id
Status: PASSED

- Successfully deleted a project.
- HTTP Status: 200 OK.
- Deleted project was no longer returned by the Projects API.

### Persistence Test
Status: PASSED

- The backend was stopped and restarted successfully.
- MongoDB Atlas reconnected successfully.
- Existing project records remained available after restart.
- This confirms that project data is persisted in MongoDB Atlas rather than temporary server memory.

## Summary

The Projects REST API was tested after MongoDB Atlas integration.
CRUD operations successfully communicate with the MongoDB Atlas database.