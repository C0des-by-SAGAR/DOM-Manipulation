# DOM-Manipulation
Website: https://c0des-by-sagar.github.io/DOM-Manipulation/

# DOM Manipulation Library

## Overview

This repository contains a simple yet powerful JavaScript library for DOM (Document Object Model) manipulation. The library provides a set of functions and utilities to make it easier for developers to interact with and manipulate HTML documents dynamically.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Functions](#functions)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To start using the DOM Manipulation Library, you can either download the source code directly from this repository or include it in your project using a package manager.

### Installation

#### Download from GitHub

You can download the library directly from the GitHub repository:

```bash
git clone https://github.com/C0des-by-SAGAR/DOM-Manipulation.git
```

#### Use a Package Manager

If you are using npm:

```bash
npm install dom-manipulation-library
```

If you are using yarn:

```bash
yarn add dom-manipulation-library
```

## Usage

Include the library in your HTML file:

```html
<script src="path/to/dom-manipulation-library.js"></script>
```

Or if you are using a module bundler like webpack or Parcel:

```javascript
import domManipulation from 'dom-manipulation-library';
```

## Functions

The DOM Manipulation Library provides the following functions:

1. **`getElement(selector)`**: Get the first element that matches the given selector.

2. **`getElements(selector)`**: Get an array of elements that match the given selector.

3. **`create(element)`**: Create an HTML element with the specified tag name.

4. **`addClass(element, className)`**: Add a class to the specified element.

5. **`removeClass(element, className)`**: Remove a class from the specified element.

6. **`toggleClass(element, className)`**: Toggle a class on the specified element.

7. **`setAttribute(element, attributeName, attributeValue)`**: Set the attribute of the specified element.

8. **`removeAttribute(element, attributeName)`**: Remove the attribute from the specified element.

9. **`append(parent, child)`**: Append a child element to the specified parent element.

10. **`prepend(parent, child)`**: Prepend a child element to the specified parent element.

11. **`remove(element)`**: Remove the specified element from the DOM.

## Examples

```javascript
// Example 1: Get element by ID and add a class
const myElement = domManipulation.getElement('#myElement');
domManipulation.addClass(myElement, 'highlight');

// Example 2: Create a new paragraph and append it to the body
const newParagraph = domManipulation.create('p');
newParagraph.textContent = 'This is a new paragraph.';
domManipulation.append(document.body, newParagraph);
```

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and submit a pull request

Please make sure to follow the code style and include tests if applicable.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.# DOM Manipulation Library

## Overview

This repository contains a simple yet powerful JavaScript library for DOM (Document Object Model) manipulation. The library provides a set of functions and utilities to make it easier for developers to interact with and manipulate HTML documents dynamically.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Functions](#functions)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To start using the DOM Manipulation Library, you can either download the source code directly from this repository or include it in your project using a package manager.

### Installation

#### Download from GitHub

You can download the library directly from the GitHub repository:

```bash
git clone https://github.com/C0des-by-SAGAR/DOM-Manipulation.git
```

#### Use a Package Manager

If you are using npm:

```bash
npm install dom-manipulation-library
```

If you are using yarn:

```bash
yarn add dom-manipulation-library
```

## Usage

Include the library in your HTML file:

```html
<script src="path/to/dom-manipulation-library.js"></script>
```

Or if you are using a module bundler like webpack or Parcel:

```javascript
import domManipulation from 'dom-manipulation-library';
```

## Functions

The DOM Manipulation Library provides the following functions:

1. **`getElement(selector)`**: Get the first element that matches the given selector.

2. **`getElements(selector)`**: Get an array of elements that match the given selector.

3. **`create(element)`**: Create an HTML element with the specified tag name.

4. **`addClass(element, className)`**: Add a class to the specified element.

5. **`removeClass(element, className)`**: Remove a class from the specified element.

6. **`toggleClass(element, className)`**: Toggle a class on the specified element.

7. **`setAttribute(element, attributeName, attributeValue)`**: Set the attribute of the specified element.

8. **`removeAttribute(element, attributeName)`**: Remove the attribute from the specified element.

9. **`append(parent, child)`**: Append a child element to the specified parent element.

10. **`prepend(parent, child)`**: Prepend a child element to the specified parent element.

11. **`remove(element)`**: Remove the specified element from the DOM.

## Examples

```javascript
// Example 1: Get element by ID and add a class
const myElement = domManipulation.getElement('#myElement');
domManipulation.addClass(myElement, 'highlight');

// Example 2: Create a new paragraph and append it to the body
const newParagraph = domManipulation.create('p');
newParagraph.textContent = 'This is a new paragraph.';
domManipulation.append(document.body, newParagraph);
```

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and submit a pull request

Please make sure to follow the code style and include tests if applicable.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
