# Middlewares
This folder contains custom middleware functions for request processing.

## Structure
- `auth.middleware.js` - Validates JWT tokens and protects routes.
- `error.middleware.js` - Centralized error handling.
- `rateLimit.middleware.js` - Prevents excessive requests (DDoS protection).

## Best Practices
- Keep middleware modular and reusable.
- Handle errors centrally to avoid code duplication.
