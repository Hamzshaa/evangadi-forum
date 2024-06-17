<h1>Evangadi Forum</h1><hr>

Evangadi Forum is an online QA platform for posting questions and answers done as a project for a MERN Stack bootcamp run by Evangadi Tech. 
The forum has a frontend and backend component with a RESTful API 

<h2>Available routes</h2><hr>

<h3>Users</h3>

POST
<ul>
  <li>users/register</li> - Registers a user to the forum
  <li>users/login</li>  - Login a user to the forum
  <li>users/forgot</li> - Takes an email address and sends an email with a token for reseting a password
  <li>users/reset</li> - Resets to a new password
</ul>

GET
<ul>
  <li>check</li> - checks if a user is authorized to access pages
</ul>

<h3>Questions</h3>

POST
<ul>
  <li>questions/submit</li>  - Submits a question to teh forum
</ul>

GET
<ul>
  <li>questions/getall</li>  - gets the title and submitter of all the questions in the forum
  <li>questions/getsingle?questionid=1</li> - get details (title, desc, submitter) of a single question 
</ul>

<h3>QAnswers</h3>

POST
<ul>
  <li>answers/postanswer</li> - posts an answer for a single question
</ul>

GET
<ul>
  <li>answers/getanswers?questionsid=1</li> -  get all the answers posted for a single question 
</ul>
