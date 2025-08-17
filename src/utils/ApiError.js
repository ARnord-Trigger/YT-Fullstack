// ✅ Custom ApiError class extending built-in Error
class ApiError extends Error {
    constructor(
        statusCode,                       // HTTP status code (e.g., 400, 404, 500)
        message = "Something went wrong", // Default error message if not provided
        errors = [],                      // Additional error details (optional)
        stack = ""                        // Custom stack trace (optional)
    ) {
        super(message);                   // Call parent Error constructor with message

        // Attach additional properties for structured error handling
        this.statusCode = statusCode;     // HTTP status code to return
        this.data = null;                 // Extra data (kept null here, but can be extended)
        this.message = message;           // Error message
        this.success = false;             // Always false, since it's an error
        this.errors = errors;             // Array/object containing validation or field errors

        // Handle stack trace (for debugging)
        if (stack) {
            this.stack = stack;           // If custom stack provided, use it
        } else {
            // Otherwise, capture stack trace pointing to where error was created
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };
