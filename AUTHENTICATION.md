# AUTHENTICATION

<br><br>

**Authentication**
<br>

**HTML form validation**

<br>

You are supposed to enter data in an expected format.

<br>

Client-side validation should not be considered an exhaustive security measure! **Your apps should always perform security checks on any form-submitted data on the server-side as well as the client-side**, because client-side validation is too easy to bypass, so malicious users can still easily send bad data through to your server
<br><br>

- validation done in the **browser** >> client-side validation

- validation done on the **server** >> server-side validation
  <br><br>

When you enter data, the browser and/or the web server will check to see that the data is in the correct format and within the constraints set by the application.
<br>

- if the information is **correctly** formatted >> app allows the data to be submitted to the server and (usually) saved in a database

- if the information is **incorrectly** formatted >> app gives the user an error message explaining what needs to be corrected, and lets them try again

<br><br>

<br>

1: **Built-in HTML form validation**
<br>

- has better performance than JS
- not as customizable as JS validation
  <br><br>

- [MDN Client side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)

- [W3Schools HTML Input attributes](https://www.w3schools.com/html/html_form_attributes.asp)

- [HTML form validation](https://www.educba.com/html-form-validation/)

- [HTML5 form validation examples](https://www.the-art-of-web.com/html/html5-form-validation/)

- [YT: HTML form validation](https://www.youtube.com/watch?v=eUkDdEwUgjs)

<br><br>

2: **JS form validation**
<br>

- [W3Schools JS form validation](https://www.w3schools.com/js/js_validation.asp)

- [JavaScript Form Validation With Limit Login Attempts](https://www.formget.com/javascript-login-form/)

- [Data Validation – How to Check User Input on HTML Forms with Example JavaScript Code](https://www.freecodecamp.org/news/form-validation-with-html5-and-javascript/)

- [YT: JS form validation](https://www.youtube.com/watch?v=In0nB0ABaUk)

- [YT: Validate Form Using JavaScript](https://www.youtube.com/watch?v=fz8bwvn9lA4)

<br><br>

**Constraint validation**

- [The Complete Guide to HTML Forms and Constraint Validation](https://www.sitepoint.com/html-forms-constraint-validation-complete-guide/)

- [MDN Constraint validation](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation)

- [Web forms — Working with user data](https://developer.mozilla.org/en-US/docs/Learn/Forms)

<br><br>

- [Form validation using HTML and JavaScript](https://www.geeksforgeeks.org/form-validation-using-html-javascript/)

<br>

**Input validation**

- [Input validation - min/max length](https://riptutorial.com/html/example/2259/input-validation)

<br><br>

- [<form>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)

- []()

<br>

---

VALIDATION vs AUTHENTICATION

<br>

**AUTHENTICATION vs AUTHORIZATION**
<br><br>

**Authentication** is the process of verifying who someone is.

- works through passwords, one-time pins, biometric information, and other information provided or entered by the user

- first step of a good identity and access management process

- visible to and partially changeable by the user
  <br><br>

**Example**: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.

<br>

**Authorization** is the process of verifying what specific applications, files, and data a user has access to.

- determines what resources a user can access

- works through settings that are implemented and maintained by the organization

- always takes place after authentication

- isn’t visible to or changeable by the user.

<br><br>

**Example**: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.

<br>

[Authentication vs. Authorization](https://auth0.com/docs/get-started/identity-fundamentals/authentication-and-authorization)

---

<br>

- [YT: Privatnost i podaci o korisniku](https://www.youtube.com/watch?v=CqwdewDb9g8&list=PLmGRn_VnTuAxIHKjfgoOEOIk72PeZdbaB&index=100)

- [YT: User password authentication (Node.js + Express)](https://www.youtube.com/watch?v=Nlg0JrUt0qg&list=PLmGRn_VnTuAxIHKjfgoOEOIk72PeZdbaB&index=67)

<br><br>
