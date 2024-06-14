<h1>Evangadi Forum</h1><hr>

Evangadi Forum is an online QA platform for posting questions and answers done as a project for a MERN Stack bootcamp run by Evangadi Tech. 
The forum has a frontend and backend component with a RESTful API 

<h2>Available routes</h2><hr>

<h3>Users</h3>

POST
<ul>
  <li>users/register</li>
  <li>users/login</li>
  <li>users/forgotpassword</li>
  <li>users/resetpassword</li>
</ul>

GET
<ul>
  <li>check</li>
</ul>

<h3>Questions</h3>

POST
<ul>
  <li>questions/submitquestion</li>
</ul>

GET
<ul>
  <li>questions/getallquestions</li>
  <li>questions/getsinglequestion?questionid=1</li>
</ul>

<h3>QAnswers</h3>

POST
<ul>
  <li>answers/postanswer</li>
</ul>

GET
<ul>
  <li>answers/getanswers?questionsid=1</li>
</ul>
