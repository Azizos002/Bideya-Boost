# Services
This folder contains business logic that interacts with external services.

## Structure
- `email.service.js` - Handles email notifications (via Nodemailer/AWS SES).
- `token.service.js` - Manages JWT token generation and refresh.
- `storage.service.js` - Handles file uploads (e.g., AWS S3, Cloudinary).

## Best Practices
- Use services to keep controllers clean.
- Make services reusable for multiple features.
