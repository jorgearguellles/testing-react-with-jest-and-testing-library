# Testing React with Jest & React Testing Library

## React Tasting Library philosophy

### What RTL do?
1. Create a Virtual DOM to Testing
    - and utilities to interacting with DOM
2. 

## What is React Tasting Library?
React tasting library is a testing DOM focusing:
- Rendering components into Virtual DOME
- Searching Virtual DOME 
- Interacting with the Virtual DOM (events, click, etc)

## What is Jest?
Jest is a test runner environment:
- We can find test
- we can run test
- we can make assertions

## Test Driven Development - TDD

Writing tests before writing code:
- Then write code according to 'Spec' set by tests

Red-Green testing
- Tests fail before code is written
1. Write test
2. write code
3. test failed
4. write code
5. test success


### Why TDD?
1. Make a huge different in how it feel write tests
    - Part of the coding process, not a "chore" to do at the end.
2. More efficient 
    - Re-runs tests "for free" after changes

## Types of Tests

1. **Unit tests**
    - Test one unit of code in isolation
2. **Integration tests**
    - Test how multiple units of code work together
3. **Function tests**
    - Test a particular function of software
4. **End-to-End testing / Acceptance**
    - Use actual browser and server (Cypress / Selenium)

> Your not testing your code, your testing behaviors.

## Different MindSet between Unit testing VS Functional Testing

### Unit testing
- More isolated as possible ( mocks dependencies, test internals).
- Very easy to pinpoint failures.

### Functional Testing
- Include all relevant unit testing to test a user behavior.
- Close to how users interact wth the software
- Robust tests

## Accessibility and Finding Elements

React Testing Library recommends finding elements by accessibility handles
[Guide which Query](https://testing-library.com/docs/queries/about)
[Role Definitions](https://www.w3.org/TR/wai-aria/#role_definitions)

1. Queries Accessible to Everyone
2. Semantic Queries HTML5
3. Test IDs
