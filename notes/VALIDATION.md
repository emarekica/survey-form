# FORM VALIDATION

<br><br>

### Important resources

<br>

- [Validation related attributes](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation#validation-related_attributes)

- [MDN Client side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)

- [Constraint validation API](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation)

- [The HTML5 input types](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types)

- [How to build custom form controls](https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_build_custom_form_controls)

- [Web forms — Working with user data](https://developer.mozilla.org/en-US/docs/Learn/Forms)

<br><br>

---

<br>

## HTML elements

<br>

Elements marked with \* are subject to validation.
<br>

- search field ------ `type="search"`

- text input (name) ------ `type="text"` \*

- email (1 input) ------ `type="email"` \*

- email (multiple inputs) \*

- multiple selection scroll ------ `select` + `option` elements

- password ------ `type="password"` \*

- phone number ------ `type="tel"`

- text area ------ `textarea` element

- check boxes ------ `type="checkbox"` \*

- radio button ------ `type="radio"` \*

- time ------ `type="time"`

- date ------ `type="date"`

- date/time ------ `type="datetime-local"`

- drop-down menu ------ `select` + `optgroup` + `option`

- slider ------ `type="range"`

- color selector ------ `type="color"`

- number min/max ------ `type="number"`

- url ------ `type="url"` \*

- file upload ------ `type="file"` \*

- drag ’n’ drop ------ `type="file"` \*

<br><br>

- `input`\*

- `form` \*

- `button` \*

- `type="hidden"` \*

<br><br>

---

## Attributes

<br>

Attributes marked with \* are subject to validation.
<br>

- `form`

- `accept`

- `autofocus`

- `capture`

- `disable`

- `multiple`

- `name`

- `value`

- `required`

- `minlength`

- `maxlength`

- `type`

- `pattern`

<br><br>

---

## CSS pseudo-elements

<br>

`:invalid`

`:valid`

`:checked`

<br><br>

---

<br>

## HTML form validation

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

HTML5 form controls validate most user data without relying on JavaScript. This is done by using validation attributes on form elements.

- required
- min/max length
- min/max
- type
- pattern
- step
  <br>

[Validation related attributes](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation#validation-related_attributes)

<br>

**Valid element**:

- matches the `:valid` CSS pseudo-class, which lets you apply a specific style
- if the user tries to send the data, the browser will submit the form, provided there is nothing else stopping it from doing so

<br>

**Invalid element**:

- matches the `:invalid` CSS pseudo-class, which lets you apply a specific style to invalid elements
- if the user tries to send the data, the browser will block the form and display an error message

<br><br>

**Good practice**:

Indicate to the user when form fields are required (required by WCAG accessibility guidelines).

Only require users to input data you actually need.

**Character count feedback**:

Inn an accessible manner and let them edit their content down to size.
An example of this is the character limit seen on Twitter when tweeting. JavaScript, including [solutions using maxlength](https://github.com/mimo84/bootstrap-maxlength), can be used to provide this.

<br><br>

1: **Built-in HTML form validation**
<br>

- has better performance than JS
- not as customizable as JS validation
- browser-automated error message

<br><br>

`:invalid`

Can be “chained” with other pseudo-selectors: like `:focus` to only validate when the user is typing, `:before` or :after to generate icons or text to provide more user feedback, or attribute selectors like `input[value=""]` to only validate input fields containing content.

<br><br>

2: **JS form validation**
<br><br>

- control over the look and feel of native error messages
- to deal with legacy browsers that do not support HTML's built-in form validation
  <br>

Most useful JS properties:

- `novalidate`
- `validity`
- `typeMismatch`
- `setCustomValidity`

<br><br>

[Constraint validation API](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation)

- `HTMLButtonElement` (represents a `button` element)

- `HTMLFieldSetElement` (represents a `fieldset` element)

- `HTMLInputElement` (represents an `input` element)

- `HTMLOutputElement` (represents an `output` element)

- `HTMLSelectElement` (represents a `select` element)

- `HTMLTextAreaElement` (represents a `textArea` element)

<br><br>

### Constraint validation API

<br>

The **Constraint validation API** makes the following **properties** available on the above elements.
<br>

1. `validationMessage`

Returns a localized message describing the validation constraints that the control doesn't satisfy (if any). If the control is not a candidate for constraint validation (`willValidate` is `false`) or the element's value satisfies its constraints (is valid), this will return an empty string.

2. `validity`

Returns a `ValidityState` object that contains several properties describing the validity state of the element. You can find full details of all the available properties in the `ValidityState` reference page; below is listed a few of the more common ones:

- `patternMismatch`

  Returns `true` if the value does not match the specified `pattern`, and `false` if it does match. If `true`, the element matches the `:invalid` CSS pseudo-class.

- `tooLong`

  Returns `true` if the value is longer than the maximum length specified by the `maxlength` attribute, or `false` if it is shorter than or equal to the maximum. If `true`, the element matches the `:invalid` CSS pseudo-class.

- `tooShort`

  Returns `true` if the value is shorter than the minimum length specified by the `minlength` attribute, or `false` if it is greater than or equal to the minimum. If `true`, the element matches the `:invalid` CSS pseudo-class.

- `rangeOverflow`

  Returns `true` if the value is greater than the maximum specified by the `max` attribute, or `false` if it is less than or equal to the maximum. If `true`, the element matches the `:invalid` and `:out-of-range` CSS pseudo-classes.

- `rangeUnderflow`

  Returns `true` if the value is less than the minimum specified by the `min` attribute, or `false` if it is greater than or equal to the minimum. If `true`, the element matches the `:invalid` and `:out-of-range` CSS pseudo-classes.

- `typeMismatch`

  Returns `true` if the value is not in the required syntax (when type is `email` or `url`), or `false` if the syntax is correct. If `true`, the element matches the `:invalid` CSS pseudo-class.

- `valid`

  Returns `true` if the element meets all its validation constraints, and is therefore considered to be valid, or `false` if it fails any constraint. If `true`, the element matches the `:valid` CSS pseudo-class; the `:invalid` CSS pseudo-class otherwise.

- `valueMissing`

  Returns `true` if the element has a required attribute, but no value, or `false` otherwise. If `true`, the element matches the `:invalid` CSS pseudo-class.

3. `willValidate`

Returns `true` if the element will be validated when the form is submitted; `false` otherwise.
<br><br>

The Constraint Validation API also makes the following **methods** available on the above elements and the `form` element.
<br><br>

1. `checkValidity()`

Returns `true` if the element's value has no validity problems; `false` otherwise. If the element is invalid, this method also fires an invalid event on the element.
<br>

2. `reportValidity()`

Reports invalid field(s) using events. Useful in combination with `preventDefault()` in an `onSubmit` event handler.
<br>

3. `setCustomValidity(message)`

**Adds a custom error message to the element**.
If you set a custom error message, the element is considered to be invalid, and the specified error is displayed. This lets you use JavaScript code to establish a validation failure other than those offered by the standard HTML5 validation constraints.
**The message is shown to the user when reporting the problem.**

<br><br>

**`validity`**

The `validity` read-only property of the `HTMLObjectElement` interface returns a `ValidityState` object with the validity states that this element is in.

<br><br>

**`ValidityState.typeMismatch`**

The read-only `typeMismatch` property of a `ValidityState` object indicates if the value of an <input>, after having been edited by the user, does not conform to the constraints set by the element's type attribute.

Returns `true` if the value is not in the required syntax (when type is `email` or `url`), or `false` if the syntax is correct. **If `true`, the element matches the `:invalid` CSS pseudo-class**.

If the `type` attribute expects specific strings, such as the `email` and `url` types and the **value doesn't conform to the constraints set by the type**, the `typeMismatch` property will be **true**.

The `typeMismatch` is only one of the many possible errors and is only relevant for the `email` and `url` types.

<br><br>

    |  Input type |        Value        |	        	  Expected value          |
    |-------------------------------------------------------------------------|
    |    email   	|    x@y or  x@y.z	  |  email address, with or without TLD |
    |-------------------------------------------------------------------------|
    |    url	    |   x:  or  x://y.z   |	 protocol or full URL with protocol |

<br><br>

**`novalidate`**

**Attribute that turns off the browser's automatic validation.**

This lets our script take control over validation.

Doesn't disable support for the constraint validation API nor the application of CSS pseudo-classes. Even though the browser doesn't automatically check the validity of the form before sending its data, you can still do it yourself and style the form accordingly.

<br><br>

### Validating forms without a built-in API

<br>

- legacy browsers
- [custom controls](https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_build_custom_form_controls)

<br>

**When writing your own validation form, ask yourself:**

1. What kind of validation should I perform? (string operations, type conversion, regular expressions etc.)
   <br>

2. What should I do if the form doesn't validate? (UI)

   Decide how the form will behave.

   Does the form send the data anyway?

   Should you highlight the fields that are in error?

   Should you display error messages?

<br>

3. How can I help the user to correct invalid data?

   Provide as much helpful information as possible in order to guide them in correcting their inputs. You should offer up-front suggestions so they know what's expected, as well as clear error messages.

   Useful resources:

   - [Form-Field Validation: The Errors-Only Approach](https://www.smashingmagazine.com/2012/06/form-field-validation-errors-only-approach/)

   - [Web Form Validation: Best Practices and Tutorials](https://www.smashingmagazine.com/2009/07/web-form-validation-best-practices-and-tutorials/)

   - [10 Tips for Optimizing Web Form Submission Usability](https://www.webfx.com/blog/web-design/10-tips-for-optimizing-web-form-submission-usability/)

   - [Inline Validation in Web Forms](https://alistapart.com/article/inline-validation-in-web-forms/)

<br><br>

---

<br>

- [W3Schools JS form validation](https://www.w3schools.com/js/js_validation.asp)

- [JavaScript Form Validation With Limit Login Attempts](https://www.formget.com/javascript-login-form/)

- [Data Validation – How to Check User Input on HTML Forms with Example JavaScript Code](https://www.freecodecamp.org/news/form-validation-with-html5-and-javascript/)

- [YT: JS form validation](https://www.youtube.com/watch?v=In0nB0ABaUk)

- [YT: Validate Form Using JavaScript](https://www.youtube.com/watch?v=fz8bwvn9lA4)

<br>

---

<br><br>

## Constraint validation

<br>

The core of constraint validation is an algorithm browsers run when a form is submitted to determine its validity. To make this determination, the algorithm utilizes new HTML5 attributes min , max , step , pattern , and required as well as existing attributes maxlength and type.

The idea is to trigger JavaScript on some `form` field event (like `onchange`) to calculate whether the constraint is violated, and then to use the method `field.setCustomValidity()` to set the result of the validation.

<br><br>

- new semantic types for the `input` element and constraint validation to ease the work of checking the form content on the client side

- usual constraints can be checked, without the need for JS by setting new attributes

- more complex constraints can be tested using the Constraint validation API

<br>

**HTML5 Constraint validation doesn't remove the need for validation on the server side, in a way that is consistent with what is done on the client side**. Invalid form requests can still be sent by non-compliant browsers.
<br><br>

`type="url"` and `type="email"` attributes have intrinsic constraints.
Value must be complete URL or syntactically valid email, else `typeMismatch` constraint validation is triggered.

But most input types don't have intrinsic constraints, as some are barred from constraint validation or have a sanitization algorithm transforming incorrect values to a correct default

<br><br>

### Constraint validation process

<br>

- done through the Constraint Validation API
- on a single element that is part of the `form`
- on the `form` element itself

<br><br>

`checkValidity()` = _statically_ validating the constraints

`reportValidity()`, submitting the `form` = _interactively_ validating the constraints

<br><br>

**1. way**

a) call to the `checkValidity()` or `reportValidity()` method of a form-associated DOM interface
(`HTMLInputElement`, `HTMLSelectElement`, `HTMLButtonElement`, `HTMLOutputElement` or `HTMLTextAreaElement`)

b) method evaluates the constraints only on this element

c) script gets info

d) `checkValidity()` method returns a boolean indicating whether the element's value passes its constraints
(typically done by determining which of the CSS pseudo-classes, `:valid` or `:invalid`, applies)

e) `reportValidity()` method reports any constraint failures to the user

<br>

**2. way**

call to the `checkValidity()` or `reportValidity()` method on the `HTMLFormElement` interface

Calling the `submit()` method on the `HTMLFormElement` interface doesn't trigger a constraint validation.
This method sends the form data to the server even if doesn't satisfy the constraints.
**Call the `click()` method on a submit button instead.**

<br>

**3. way**

submitting the `form` itself

If the `novalidate` attribute is set on the `form` element, interactive validation of the constraints doesn't happen.

<br><br>

### Visual styling of constraint validation

<br>

Done via CSS pseudo-classes:

- `:required`

- `:optional`

- `:placeholder-shown`

- `:valid`

- `:invalid`

<br><br>

### Controlling the text of constraint violation

<br>

`element.setCustomValidity(message)` method on the following elements:

- `fieldset`

- `input`

- `output`

- `select`

- submit buttons (`button type="submit"` `input type="submit"`) >> other buttons don't have constraint validation

- `textarea`
  <br>

The `ValidityState` interface describes the object returned by the `validity` property of the element types listed above. It represents various ways that an entered value can be invalid. Together, they help explain why an element's value fails to validate, if it's not valid.

<br><br>

---

#### Resources:

- [MDN Constraint validation](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation)

- [The Complete Guide to HTML Forms and Constraint Validation](https://www.sitepoint.com/html-forms-constraint-validation-complete-guide/)

- [Web forms — Working with user data](https://developer.mozilla.org/en-US/docs/Learn/Forms)

<br><br>

---

<br>

**Input validation**

- [Input validation - min/max length](https://riptutorial.com/html/example/2259/input-validation)

<br>

- [form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)

- [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

- [The HTML5 input types (form controls)](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types)

<br><br>

---

<br>

**AUTHENTICATION vs VALIDATION**
<br>

Authentication is something which validates or confirms the authenticity of something.
Validation is the act of validating something.

<br><br>

## AUTHENTICATION vs AUTHORIZATION

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

---

<br>

### More resources

<br>

#### HTML form validation

<br>

- [HTML form validation](https://www.educba.com/html-form-validation/)

- [HTML5 form validation examples](https://www.the-art-of-web.com/html/html5-form-validation/)

- [YT: HTML form validation](https://www.youtube.com/watch?v=eUkDdEwUgjs)

<br><br>

#### JavaScript form validation

<br>

- [How to build custom controls](https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_build_custom_form_controls)

- [W3Schools JS form validation](https://www.w3schools.com/js/js_validation.asp)

- [JavaScript Form Validation With Limit Login Attempts](https://www.formget.com/javascript-login-form/)

- [Data Validation – How to Check User Input on HTML Forms with Example JavaScript Code](https://www.freecodecamp.org/news/form-validation-with-html5-and-javascript/)

- [YT: JS form validation](https://www.youtube.com/watch?v=In0nB0ABaUk)

- [YT: Validate Form Using JavaScript](https://www.youtube.com/watch?v=fz8bwvn9lA4)

<br><br>

#### Constraint validation

<br>

- [The Complete Guide to HTML Forms and Constraint Validation](https://www.sitepoint.com/html-forms-constraint-validation-complete-guide/)

- [Web forms — Working with user data](https://developer.mozilla.org/en-US/docs/Learn/Forms)

<br><br>

#### Writing your own validation form

<br>

- [Form-Field Validation: The Errors-Only Approach](https://www.smashingmagazine.com/2012/06/form-field-validation-errors-only-approach/)

- [Web Form Validation: Best Practices and Tutorials](https://www.smashingmagazine.com/2009/07/web-form-validation-best-practices-and-tutorials/)

- [10 Tips for Optimizing Web Form Submission Usability](https://www.webfx.com/blog/web-design/10-tips-for-optimizing-web-form-submission-usability/)

- [Inline Validation in Web Forms](https://alistapart.com/article/inline-validation-in-web-forms/)
