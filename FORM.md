# FORM

<br><br>

## Content

<br>

1. [Features](#1-features)
2. [Learned](#2-learned)
3. [Mockup](#3-mockup)
4. [Improvement ideas](#4-improvement-ideas)
5. [Sources](#sources)

<br><br>

---

<br>

## 1. Features

<br>

### Responsivenes

<br>

**break points**:

- 1728 x 1117 px
- 744 x 1113 px
- 375 x 667 px
  <br>

<br><br>

---

<br>

## 2. Learned

<br>

### `name` attribute

<br>

[MDN name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name)

<br><br>

### `multiple` attribute

<br>

If set, means the form control accepts one or more values. Valid for the `email` and `file` input types and the `select`, the manner by which the user opts for multiple values.
<br>

When set on the `email` input type, the user can include zero (if not also `required`), one or more comma-separated email addresses.

<br><br>

### `size` attribute

<br>

Defines the width of the `input` and the height of the `select` element. For the `input`, if the `type` attribute is `text` or `password` then it's the **number of characters**. This must be an integer value 0 or higher.

CSS takes precedence.

<br><br>

### `label` element

<br>

Can stand alone.
Usually combined with `input` element.

When connected with `input`, there

Elements that it can be associated with:

- `button`
- `input` (except for type="hidden")
- `meter`
- `output`
- `select`
- `textarea`

<br><br>

### `enxtype`

<br>

The `HTMLFormElement.enctype` property is the MIME type of content that is used to submit the form to the server.
Possible values are:

- `application/x-www-form-urlencoded`: The initial default type

- `multipart/form-data`: The type that allows file `input` element(s) to upload file data

- `text`/plai`n: A type introduced in HTML5

<br><br>

### Setting password pattern attribute with regex

<br>

    ^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$

<br>

    Re = (?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}

    (?=.*[a-z]) - At least one lowercase letter(a - z).

    (?=.*[A-Z]) - At least one uppercase letter(A - Z).

    (?=.*[0-9]) - At least one numeric value(0-9).

    (?=.*[!@#$%^&*_=+-]) - At least one special symbol(!@#$%^&*=+-_)

    {8,16} -> The total length should be greater than or equal to 8 and less or equal to 16.

- [Pattern for password check in HTML](https://www.studytonight.com/html-faq/how-to-use-pattern-to-validate-password)

- [StackOverflow solution](https://stackoverflow.com/questions/27976446/html-password-regular-expression-validation)

- [Demo](https://regex101.com/r/yW4aZ3/171)

- [Password validation with Regex, HTML5 and JavaScript](https://www.the-art-of-web.com/javascript/validate-password/)

<br><br>

### `select` for drop-down element

<br>

Gives multiple options.

Possible attributes:

- `autocomplete`
- `autofocus`
- `disabled`
- `multiple`

<br>

When associated with `form`, the value of this element must be `id` of this `form`.

<br><br>

### Two "button" versions

<br>

1:

    <input type="submit" value="Submit" />

2:

    <button type="button">Submit</button>

<br><br>

### Date & time formats in HTML

<br>

[MDN examples](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats)

<br><br>

---

<br>

<br><br>

---

<br>

## 3. Mockup

<br>

Form elements presentation
<br>

![form elements presentation](img/form-elements-presentation.jpeg)
<br><br>

Responsive form
<br>

![]()

<br><br>

---

<br>

## 4. Improvement ideas

<br>

1. Make form open as a modal + background blur

2. Enable IMG user profile image upload + drag&drop

3. Add "?" and "!" circled icon for more info beside label text with floating window when clicked or hovered

4. Responsivenes

5. Add red asterisk \* beside label text when required

<br><br>

---

<br>

### 5. Sources:

<br>

- [YOUR FIRST FORM](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)

- [HOW TO STRUCTURE A WEB FORM](https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form) (contains accessiblity)

- [HTML5 INPUT TYPES](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types)

- [BASIC NATIVE FORM CONTROLS](https://developer.mozilla.org/en-US/docs/Learn/Forms/Basic_native_form_controls)

- [OTHER FORM CONTROLS](https://developer.mozilla.org/en-US/docs/Learn/Forms/Other_form_controls)
  <br><br>

- [CLIENT-SIDE FORM VALIDATION](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)

- [CONSTRAINT VALIDATION](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation)
  <br><br>

- [MDN `form`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/forms)

- [MDN `input`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
  <br><br>

- [STYLING WEB FORMS](https://developer.mozilla.org/en-US/docs/Learn/Forms/Styling_web_forms)
- [ADVANCED FORM STYLING](https://developer.mozilla.org/en-US/docs/Learn/Forms/Advanced_form_styling)
  <br><br>

- [UI PSEUDO CLASSES](https://developer.mozilla.org/en-US/docs/Learn/Forms/UI_pseudo-classes)