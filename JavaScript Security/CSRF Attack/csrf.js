// Let us understand what is the need to take care of cross-site request forgery or CSRF attacks.

// Most of the web applications today are prone to multiple attacks out of which CSRF is the one you need to take care of. 
// This attack can cause serious damage to web applications that deal with money or data. Every time a website requests data from a 
// new website on behalf of a user and provided that the request is an unauthenticated one, there are no security worries. 
// But when a user is authenticated or if a session cookie is directed sideways with the request, then it will be susceptible to a CSRF attack.

// CSRF attack will be effective only if a user logs into the application.
//  Then the attacker on behalf of the user can initiate unwanted actions like changing email address, password, etc., 
//  which will get executed without the actual user's consent.



// Consequences of a CSRF attack :

// Changing a user's email address password, profile image
// Transferring money from one bank account to another bank account
// Changing the delivery address of an order in an e-commerce application




//////////////






// CSRF (Cross-Site Request Forgery) is an attack where an attacker will do undesirable actions in an application for the actual user 
// who logged in. This attack targets functionality of state-changing requests such as changing email, password or purchasing, etc., 
// as an attacker will not be able to fetch data from the response.

// As for most web applications, browser requests hold information such as the user's session cookie, IP address, etc.,

// it is possible for an attacker to fetch the privileges of an application. Thus, if a user has logged into a web application,
//  the application will not be able to differentiate between the fake request and the genuine request sent by the user. Due to this, 
//  it will be easier for an attacker to trick the user to execute unwanted actions.

// This attack is also known by other names like XSRF, Sea Surf, Session Riding, Hostile Linking, and One-click attack.



// How CSRF attacks are executed?

// To execute this attack, an attacker will first study the application in order to understand how to make a forged request appear as 
// a legitimate request. There are two means to fake a user.



// 1. Sending emails or clicking links

//        In this, the attacker will send some malicious links or emails to the user's web application and makes a
        //  user click it for the attack to execute.

// 2. Sending a request which looks like a legitimate request

    //   In this, the attacker will be sending a request which includes cookies associated with the user's session. 
    //   Any request which is sent with these cookies will be considered as a genuine one as at any time a request is made to a web application,
    //    the user's browser will check if it has any cookies linked with it and that needs to be directed along with HTTP request. 
    //    If so, all cookies will be included in all requests to that web application. If the web application approves the session cookie,
    //     an attacker can use CSRF to send requests as if the actual user is sending them. The web application will not be capable to 
    //   discriminate between requests sent by the user and attacker as every request will be sent from the user's browser with their own cookie.




    ////////////






//     Using a GET request

// Consider if user A has to transfer funds to user B, then a typical GET request will look like this:

// http://mybank.com/transfer?acct=userB&amount=100000
// An attacker can now modify the request so that the amount gets transferred to his/her account. Now the malicious request will look like this:

// http://mybank.com/transfer?acct=attacker&amount=100000
// An attacker can send this request using a hyperlink also as shown below:

{/* <a href="http://mybank.com/transfer?acct=attacker&amount=100000">Click here to grab your gift</a> */}
 

 
// Using a POST request

// If a web application uses POST requests for transactions, then the attacker will not be able to use hyperlinks to send malicious requests. In this case, an attacker will use forms with an embedded script that automatically sends malicious requests. Those forms will look like this:

{/* <body onload="document.forms[0].submit()">
   <form action="http://mybank.com/transfer" method="POST"> 
      <input type="hidden" name="acct" value="attacker" />
      <input type="hidden" name="amount" value="100000" />
      <input type="submit" value="Click here to grab your gift">
 </form>
</body> */}
// In the above code snippet, as soon as the page loads, the form will be submitted automatically with the attacker's details from a user browser. This request will be considered as legitimate as the request includes the user cookies.