# startup
Elevator Pitch
Do you live in an apartment that doesn't allow animals? Or miss the time when Tamagotchis were cool? Look no further! You can have your very own digital pet with my app. Its key features include a cute little animal that you can access from your computer and/or mobile device. You start with an egg, feed it and see what it hatches into. Click the feed me button until the hunger bar is full for your pet to advance to its next life form. You'll also be notified when other people feed their pets on the app! 
Use this link to see my sketch for the app.
https://user-images.githubusercontent.com/123421612/215191650-e048c9bc-53cd-4c6b-a93f-5f4a76a4c46e.jpg


What I've learned from the Simon html
I need to reveiw git commit and push. I'm having trouble figuring out how to make comments within VSC. 
I learned how to make page links accesible on the same page.
I also learned that making the simple images of the simon interface on html was hard. 
I also learned that korean characters will work too.


What I've learned from the Simon CSS
I really like CSS it makes sense in my mind
I'll need to make sure to incorporate the link method in my startup
I'll need to go back and update my start up html if I add something while working through CSS
I should look at what color scheme I want everything to be!


What I've learned from the startup HTML and CSS
Bootstrap is nice, there are lots of resources online showing you how to use other features too
Apparently the world decided to use index.html as the key to deploy things (I'd named mine home.html and had problems deploying)
Um white text doesn't show up on a white background lol
To treat something differently, use a <div class = ""> to name it something and use CSS to grab it a do something else than everything around it
 
 
 What I've learned from the Simon JS:
make sure to include the script source at the bottom if the html changes it!
you should make different JS files for differnt html files
you can add sound with JS!
 
 What I've learned from Simon Service:
 Needed a different deploy script otherwise you will copy files over eternally
 Need to implemnent an index.js for my start up that will act as a server
 See the git hub code for ideas!
 
 
I think I'll implement sound when I have my caterpillar eat in my startup

----------------------------------------------------------------------------------------------------------------------------------------------------------
MIDTERM
 
CONSOLE COMMANDS
 echo - Output the parameters of the command
cd - Change directory
mkdir - Make directory
rmdir - Remove directory
rm - Remove file(s)
mv - Move file(s)
cp - Copy files
ls - List files
curl - Command line client URL browser
grep - Regular expression search
find - Find files
top - View running processes with CPU and memory usage
df - View disk statistics
cat - Output the contents of a file
less - Interactively output the contents of a file
wc - Count the words in a file
ps - View the currently running processes
kill - Kill a currently running process
sudo - Execute a command as a super user (admin)
ssh - Create a secure shell on a remote computer
scp - Securely copy files to a remote computer
history - Show the history of commands
ping - Check if a website is up
tracert - Trace the connections to a website
dig - Show the DNS information for a domain
man - Look up a command in the manual
You can also chain the input and output of commands using special characters

| - Take the output from the command on the left and pipe, or pass, it to the command on the right
> - Redirect output to a file. Overwrites the file if it exists
>> - Redirect output to a file. Appends if the file exists

 
VOCAB
Web server: A web server is a computing device that is hosting a web service that knows how to accept incoming internet connections and speak the HTTP application protocol.
 
----------------------------------------------------------------------------------------------------------------------------------------------------------
HTML
HTML elements are represented with enclosing tags that may enclose other elements or text. Id attribute gives a unique ID to the element so that you can distinguish it from other elements. The class attribute is another common element attribute that designates the element as being classified into a named group of elements. 
 ex: <p id="hello" class="greeting">Hello world</p>
 A hyperlink in HTML is represented with an anchor (a) element that has an attribute containing the address of the hyperlink reference (href)
 ex: <a href="https://byu.edu">Go to the Y</a>
 
 Common HTML elements
html	The page container
head	Header information
title	Title of the page
meta	Metadata for the page such as character set or viewport settings
script	JavaScript reference. Either a external reference, or inline
include	External content reference
body	The entire content body of the page
header	Header of the main content
footer	Footer of the main content
nav	Navigational inputs
main	Main content of the page
section	A section of the main content
aside	Aside content from the main content
div	A block division of content
span	An inline span of content
h<1-9>	Text heading. From h1, the highest level, down to h9, the lowest level
p	A paragraph of text
b	Bring attention
table	Table
tr	Table row
th	Table header
td	Table data
ol,ul	Ordered or unordered list
li	List item
a	Anchor the text to a hyperlink
img	Graphical image reference
dialog	Interactive component such as a confirmation
form	A collection of user input
input	User input field
audio	Audio content
video	Video content
svg	Scalable vector graphic content
iframe	Inline frame of another HTML page
 
Inserting an image example:
ex: "<img alt="mountain landscape" src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg" />"

By default a web server will display the HTML file named index.html

----------------------------------------------------------------------------------------------------------------------------------------------------------
CSS

Preferred way to link CSS... use this line in the header of your html:  <link rel="stylesheet" href="styles.css" />

 Content: the actual text/image/etc.
 Padding: will inherit properties like the background color
 Border: has properties like color, thickness and line style
 Margin: whitespace

Selectors:
 - Element: 
     ex: body { ... }
 - Combinators:
    - Descendant:	A list of descendants	
        ex: 	body section ... Any section that is a descendant of a body
    - Child	A list of direct children		
        ex: section > p ... Any p that is a direct child of a section
    - General sibling	A list of siblings	
        ex: p ~ div	... Any p that has a div sibling
    - Adjacent sibling	A list of adjacent sibling	
        ex: p + div	... Any p that has an adjacent div sibling
 - Class selector: 
    ex: .summary
    ex: p.summary (select all paragraphs with a class of summary)
 - ID
    ex: #physics 
 - Attribute
    ex: p[class='summary'] 
 - Pseudo (when mouse is hovering change the style)
    ex: section:hover
 
Width of an element can be defined by...
 Absolute: 
   px	The number of pixels
   pt	The number of points (1/72 of an inch)
   in	The number of inches
   cm	The number of centimeters
 Relative:
   %	A percentage of the parent element
   em	A multiplier of the width of the letter m in the parent's font
   rem	A multiplier of the width of the letter m in the root's font
   ex	A multiplier of the height of the element's font
   vw	A percentage of the viewport's width
   vh	A percentage of the viewport's height
   vmin	A percentage of the viewport's smaller dimension
   vmax	A percentage of the viewport's larger dimension
 
----------------------------------------------------------------------------------------------------------------------------------------------------------
JavaScript
 
 Include this line in the header of your html:   <script src="javascript.js"></script>

 To declare vars: use let x = 1; or const x = 1;
 
 ===: for strict equality, otherwise different types 1 == '1' will be true
 
 REGULAR EXPRESSIONS
Reg Expressions: IMPORT RE
\d: any digit,	\D: non digit
.: any character
\w: any letter/number	\W: non letter/number
[abc]: match only a, b, or c
[a-z]
[^abc]: match anything but abc
(a|b|c): alternatives: this or that or this
?: thing before is optional 
\s: matches whitespaces
^: matches beginning of string
re.search(p, mS, re.MULTILINE): each line is a separate str
$: thing before matches end of string
r’strings’: \ does not have special functions
\.: escapes special function of .
(abc): group	\1 = group 1
\b: bookends for start or end
\B: must be in the middle of a word
      Reptitions
a{3} = aaa	a{1,3} = a or aa or aaa
{,3}: no lower limit	{1,}: no upper limit
.{2,6} = length matches between 2-6 characters
*: any number of characters
+: at least one character

 Rest: use ...last parameter in a function to have variable amounts of args
 Spread: use ...[some, array, of, stuff, or anything iterable like a string] to use each item as a parameter
 
 Arrays:
 myArray.map: 	Run a function to map an array to a new array	... a.map(i => i+i)
 .filter:	Run a function to remove items...	a.filter(i => i%2)
 .sort:	Run a function sort an array in place... 	a.sort((a,b) => b-a)
 .reduce (takes an array and makes it one thing)
 
 KAHOOT
 DOM textContext property: Sets the child text for the an element
 Which of the following is a valid JavaScript object? { n:1 }
 valid JSON: {"x":3}
 The following console command makes a script executable: chmod +x deploy.sh
 An A Record maps a hostname to one or more IP addresses, while the CNAME record maps a hostname to another hostname.
 
 
----------------------------------------------------------------------------------------------------------------------------------------------------------
What I learned from the Startup Javascript Deliverable
 
 NEED TO INCLUDE SCRIPT TAG AT THE BOTTOM OF HTML
 practically anything can be accessed using the id method
 why haven't I been using the browser's debugger tools, the errors there are much more helpful
 To access the browser debugger tools: rightclick and select "inspect"
 You can call a function within the script (usually put this at the bottom) so that when you load the page it runs
 
 
 What I learned from Simon DB
  Only need to set up environment variables once
  To set up env vars: sudo vi ~/.bash_profile
  Remember to esq :wq to exit vi
  
What I learned from simon Login
 Need to update packages.json and install them using npm install (include bcrypt, express, cookie-parser, etc)
 Needed to add env variables to BOTH development and production environment! Only need to do this once though for both simon and startup
 Updated index.html, login.js, login.css, and install several packages via npm (check packages.json)
 
What I learned from Simon Websockets
 cool that peer-peer interactions can occur without required server-client interactions
 I will have to implement websockets into my startup (probably do a notifications system that communicates with peers on at the same time who have updated their ages of the pets)
 
What I learned from Simon React
React makes things simpler in some ways like you don't have to repeat stuff that is the same on every html file (like the header and footer)
However it seems more complicated in other ways as you have to have a lot more files and it takes longer to deploy than the multiple-page web app

What I learned from Startup Services
need to make sure to use port 4000 for my startup and 3000 for simon
thirdparty endpoints are cool! you can access info from other apis without storing anything in your own server
need to review login authenticatioon, service endpoints, and mongo DB servers before the final
"nav-link active" means that this tab will be highlighted when you are on that page
the package.json tells which node modules to download

----------------------------------------------------------------------------------------------------------------------------------------------------------

FINAL notes!

Topics: HTTP, HTTP requests, web services, database services, authorization services, WebSocket, web application frameworks, and web security.

3/8 Web services

Caddy: 
  Uniform Resource locator: https://cs260.click:443/api/city?q=pro#3
  scheme: what protocol to use to talk to domain
  domain: maps to an ip address
  port: which port to talk to (this is redundant if u use the scheme)
  path: used by the application, you determine what these mean
  parameters: ^^ identifies a resource
  anchor: ^^ subnotation for what to pass back from resource

Port types:
   20: file transfer protocol (FTP) for data transfer
   22: secure shell (SSH) for connecting to remote devices
   25: simple mail transfer protocol (SMTP) for sending email
Domain Name System (DNS) for looking up IP addresses
Hypertext Transfer Protocol (NTP) etc


Hypertext Transfer Protocol: HTTP, how computers share info
HTTP requests template
  methods
  headers
  content-length: body length in characters/bytes
  body
Methods
  get: get an existing resource (no body)
  post: create new resource
  put: update existing resource
  delete: delete a resource
  options: get info about a resource
Response
  version
  status code: most common is 200 meaning it worked
  status message
  headers
  connection: keep-alive means to keep the connection alive
  body
Status Codes: 4 major ones
  2xx
    200: success
    204: success, no content
  3xx: don’t have what you asked for
    301/302: temporary redirect
    304: not modified (when you cache (store something away for later on everything) and ask for something that is newer, error that it hasn’t been 
    modified and is old)
  4xx: you made a bad ask
    400: bad request
    404: not found
    403: forbidden
    429: too many requests
  5xx: valid request, but server errors
    500: server error
    503: not available
Headers:
know cookie. cache control, etc

Cookies
  give you info to store on your the machine. until I request it then give it back
  exploited by the marketing to track user purchases, etc
  but other they save the language the user prefers or login authentications so they don’t have to reauthenticate
  ex: set-cookie: key = value & key=value; Secure; HttpOnly; SameSite=strict
  after the key values, the following are flags that help with security
  next request is… cookie: key =value
  often these cookies point to a database where all the info you need is stored

Cache control: happens in your browser, cache servers, and origin server
  caching is storing things for later
  Response
  cache-control: no-store
  chache-control: max-age=864000 (expiry time)
  etag: “unique id”
  last-modified: 2/23/23
  Request



