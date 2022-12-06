// CSRF Mitigation Myths

// There are some more mitigation techniques that are assumed to prevent this attack, but in reality, they do not prevent it. 

// 1. CORS: This is a header that is used for cross-domain communication between the applications. This will not prevent CSRF attacks.

// 2. HTTPS: Using HTTPS also doesn't prevent CSRF attacks. Resources using HTTPS are still vulnerable to CSRF attacks.

 

// Best practices to mitigate CSRF attacks

// 1. Logoff from the application when not in use.

// 2. Do not save username/password in a browser and do not allow the browser to remember logins.

// 3. Do not use the same browser to access sensitive applications and to surf websites on the internet.