# Controllers
This folder contains the business logic for the application.

## Structure
- `auth.controller.js` - Handles user authentication (register, login, logout)
- `user.controller.js` - Manages user-related operations (profile, settings)

## Best Practices
- Keep controllers clean by delegating logic to services.
- Handle errors properly using try-catch or a global error handler.
