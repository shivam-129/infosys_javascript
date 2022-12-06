// Let us now discuss the mitigation technique for a CSRF attack. The most popular and recommended mitigation technique 
//for a CSRF attack is using anti-csrf tokens.

// We need to send a secure random CSRF token for each state-changing request to prevent CSRFattack.
//  A CSRF token should be generated using a cryptographic random generator and should be unique for each user session.
//   The CSRF token is added as a hidden field for forms and as a parameter for Ajax calls.

// The most secure way of adding a CSRF token as a header in the HTTP request is via Javascript than adding it as a hidden field.
//  Most of the frameworks like Spring, .Net, etc., have in-built support for CSRF support. If you are using any of these frameworks,
//   better to make use of the built-in methods instead of generating the token manually.



// Let us now see how an anti-csrf token is generated using the Express framework. 

// csurf is a Node module available to generate csrf tokens to mitigate the CSRF attack. Install it along with the
//  cookie-parser node module inside your project folder as shown below:

// npm install csurf --save
// npm install cookie-parser --save


// As this token needs to be generated from the Express framework, in this case, you need to configure the following 
//statement in Express code:

// const csrfMiddleware = csrf({ cookie: true });
// Then add this as a middleware for requests as shown below:

// app.get('/api/getToken', csrfMiddleware, function (req, res) {
//     res.json({ _csrf: req.csrfToken() });
// });


// Here req.csrfToken() generates a random token and will be sent as a response for a get request.
// Now the client has to store it in a hidden field so that it is sent along with every request back to the server for validation. 
//Below is the code snippet for the same in the client code.

// <form action='http://localhost:1000/changePassword' method='POST'>
//       <label> Enter new Password : </label>
//       <input type='password' name='password' id='' />
//       <input type='hidden' value="_csrf" name="_csrf" id="_csrf" />
//       <button type='submit'>Submit</button>
// </form>
// Instead of using a hidden field, it's better to send a CSRF token using x-csrf-token.