# Routes
This folder contains API route definitions.

## Structure
- `auth.routes.js` - Handles authentication (register, login, logout).
- `user.routes.js` - Manages user-related endpoints.
- `index.js` - Aggregates all routes for easy import.

## Best Practices
- Use versioning (`/api/v1/`) to maintain backward compatibility.
- Keep route handlers slim by delegating logic to controllers.
