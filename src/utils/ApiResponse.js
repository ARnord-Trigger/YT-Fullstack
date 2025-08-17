// ✅ Standard ApiResponse class
class ApiResponse {
    constructor(
        statusCode,              // HTTP status code (e.g., 200, 201, 404)
        data,                    // Actual response data (object/array/string)
        message = "SUCCESS"      // Default message (can be overridden)
    ) {
        this.statusCode = statusCode;     
        this.data = data;                 
        this.message = message;           
        this.success = statusCode < 400;  // success = true for 2xx/3xx, false for 4xx/5xx
    }
}

export { ApiResponse };
