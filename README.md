<h1>Evangadi Forum</h1><hr>

Evangadi Forum is an online QA platform for posting questions and answers done as a project for a MERN Stack bootcamp run by Evangadi Tech. 
The forum has a frontend and backend component with a RESTful API 

<h2>Available routes</h2><hr>

<h3>Users</h3>

POST
<ul>
  <li>users/register -  Registers a user to the forum</li>
  <li>users/login  - Login a user to the forum</li>
  <li>users/forgot  - Takes an email address and sends an email with a token for reseting a password</li>
  <li>users/reset - Resets to a new password</li> 
</ul>

GET
<ul>
  <li>users/check  - checks if a user is authorized to access pages</li>
</ul>

<h3>Questions</h3>

POST
<ul>
  <li>questions/submit   - Submits a question to the forum</li>
</ul>

GET
<ul>
  <li>questions/getallquestion   - gets the title and submitter of all the questions in the forum</li>
  <li>questions/getsinglequestion?questionid=1 -  get details (title, desc, submitter) of a single question </li>
  <li>questions/searchquestions - searchs questions by questionID</li>
</ul>

<h3>QAnswers</h3>

POST
<ul>
  <li>answers/postanswer  - posts an answer for a single question</li>
</ul>

GET
<ul>
  <li>answers/getanswers?questionsid=1  -  get all the answers posted for a single question</li> 
</ul>
