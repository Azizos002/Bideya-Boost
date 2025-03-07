# Config
This folder contains configuration files for the backend.

## Structure
- `db.js` - Database connection setup (MongoDB/PostgreSQL)
- `env.js` - Loads environment variables
- `logger.js` - Configures logging system (e.g., Winston)

## Best Practices
- Keep sensitive data in `.env` files (never commit them).
- Use a centralized configuration file to manage settings.