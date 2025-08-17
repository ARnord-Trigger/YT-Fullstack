// https://chatgpt.com/share/68a24113-228c-800a-8d2c-4308bdfc02b2

// ✅ Approach 1: Promise-based asyncHandler
// This version wraps the async request handler using Promise.resolve()
// and catches any errors, passing them to Express's next() error handler.
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise
            .resolve(requestHandler(req, res, next))
            .catch((err) => next(err));
    };
};

export { asyncHandler };

// higherorder function 
// const asyncHandler = () => {} 
// const asyncHandler = (func) => { () => {} } 
// const asyncHandler = (func) => () => {}  
// const asyncHandler = (func) => async () => {}  


/*******************************************************
 ✅ Approach 2: Try-Catch asyncHandler
 This approach uses `try/catch` inside an async wrapper function.
 Instead of relying on `next(err)`, it directly sends a JSON error response.

 Line by Line:
 1. asyncHandler ek higher-order function hai jo ek function `fn` leta hai.
 2. Ye return karta hai ek naya async middleware function `(req, res, next)`.
 3. Try block ke andar fn call hota hai aur uska result wait kiya jata hai.
 4. Agar koi error throw hoti hai, catch block execute hota hai.
 5. Catch block me hum `res.status(...).json(...)` bhejte hain,
    jisme success: false aur error ka message hota hai.
*******************************************************/

// const asyncHandler = (fn) =>
//     async (req, res, next) => {
//         try {
//             await fn(req, res, next);
//         } catch (error) {
//             res.status(error.code || 500).json({
//                 success: false,
//                 message: error.message
//             });
//         }
//     };
