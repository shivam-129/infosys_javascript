// Cross-site scripting (XSS) is a type of attack where the user can send the malicious script as input to the web application. 
// The actual attack happens when the user input data is rendered back to the browser without proper verification. 
// As it allows the script to get executed which can lead to accessing the secured data from the application or modifying the 
// content of the application and so on.

// A web application is vulnerable to cross-site scripting if it uses the user’s input data in the response without proper 
// verification/validation. XSS attacks are most commonly executed using JavaScript. 

// Let us understand the necessity to prevent the Cross-site Scripting (XSS) attack in web applications.

// Consider the below impacts of XSS attack:

// Account Hijacking:
        // One of the main impacts of the XSS attack is that the attacker will hijack honest user accounts by stealing their session cookies. 
        //Thus an attacker can access the user's sensitive information on their behalf.

// Stealing Credentials: 
        // Another impact of the XSS attack is to steal user credentials by using HTML and JavaScript code.
        //  The attacker can achieve this by replicating the login page of the website and serve it to victims.

// Sensitive Data: 
        // Another dominant effect of this attack is that hackers can recover delicate data like personally identifiable information or
        //  cardholder data and then accomplish illegal operations using this data. The attacker can even make the victim transfer money
        //   into his account through this kind of attack.

// The attacker can steal sensitive information such as user credentials, session tokens, as well as execute sensitive operations
//  on behalf of the user. Hence it is essential to secure web applications from XSS attacks by incorporating required security measures.










/////////////////////














// Cross-Site Scripting (XSS)

// Cross-Site Scripting is one of the few weaknesses present in every OWASP (Open Web Application Security Project) 
// Top 10 which lists out the critical security risks in web applications.

// XSS is a vulnerability in web applications and it can also be defined as an attack on the client-side in which the attacker 
// injects and runs a malicious script into a web page. Attackers regularly use diverse channels like message boards, comments, 
// or forums to carry wicked scripts to the user’s browser.

// A web application is susceptible to XSS if it uses unsanitized user input in the response which is interpreted by the browser.
//  XSS attacks are possible in VBScript, ActiveX, Flash, and even CSS. However, they are mostly seen in JavaScript, mainly because JavaScript
//   is ultimate to most browsing experiences.

// The cross-site scripting attack can also be defined as a client-side code injection attack because any code executed by 
// the web browser after loading the page is normally designated as the client-side code.

// Example of XSS attack

// One of the common XSS attacks is seen in websites that have comment forums that are not validated. 
// The attacker will post a comment into the forum with malicious code wrapped in <script> tag. The browser will interpret
//  the code between the <script> tag as valid JavaScript code and when any other user access the website, the malicious code between 
//  the script tags will get executed. Thus making the user as victim to this attack.

// Actors in an XSS attack

// An XSS attack involves mainly three actors:
// 1. The Website: responsible for serving HTML pages as a response on user request.
// 2. The Victim: the website users who send requests from their browser.
// 3. The Attacker: the malicious user of the website who attacks the victim.









////////////////////////











