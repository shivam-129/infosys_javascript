


// It contains information about the client, that is, the browser on which the web page is rendered. The following properties and methods help in getting this information. 

// appName 

// Returns the name of the client.  

// Example:  

console.log('appname' , navigator.appName); 
//Browser's name: Netscape 
// appVersion 

// Returns platform (operating system) and version of the client (browser). 

// Example: 

console.log('version' , navigator.appVersion); 
//5.0 (Windows NT 10.0; Win64; x64)  
//AppleWebKit/537.36 (KHTML, like Gecko)  
//Chrome/83.0.4103.106 Safari/537.36 
// Platform 

// Returns the name of the user's operating system. 

// Example: 

console.log('platform' , navigator.platform); 
//Browser's platform: Win 32 
// userAgent 

// Returns string equivalent to HTTP user-agent request header. 

// Example:

console.log('useragent' , navigator.userAgent); 
//Browser's useragent: Mozilla/5.0 5.0 (Windows NT 6.1; WOW64)  
//AppleWebKit/537.36 (KHTML, like Gecko)  
//Chrome/53.0.2785.116 Safari/537.36 
// The output shown above is for the Chrome browser running on Windows. 