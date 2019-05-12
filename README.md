This is a challenge project from freeCodeCamp (FCC) which consists in building an App from scratch. The App is a JavaScript React Calculator.

Here's my working version (including the testing suite from FCC):
https://react-calculator-diego.firebaseapp.com/

I've included the original text below with instructions on what they want students to accomplish (copied from: https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator/).

### What I did
* Solved the problem using React following the specs from FCC. You can look at the Redux version in the branch redux-version-origin

### Nice to have at some point in the future
* It'd be nice allow the user to just press the buttons instead of having to click them.
* The negative number and parenthesis are two things I use a lot in real life, so adding those would probably be advantageous
* Scientific calculator also may be good to have.
* A backspace functionality would be great to have too.

###  My 2 cents
This is another project that seemed easy at first but once I realized the mess of different states you have to fiddle with, it quickly made me think maybe this was the perfect project to get my hands dirty with Redux. I decided to finish the App using just React and then I'll do another version using React-Redux. Since the logic (the most difficult part) has been figured out, it seems like refactoring the App using Redux ought to be pretty simple. Famous last words. :smile:

##  Contributing
The main purpose of this repository was to solve the challenge and share my solution.

Again, I'm not expecting contributions at all but if you want to contribute I'm 100% behind you. Also, as always, if you have comments on the code I wrote I'd love to hear from you as well. I'll take all criticism as constructive (but try to be nice!).  

I was perusing various calculator apps Available and they make mine look like child's play.

### Code of Conduct
Please keep it professionally clean and friendly. That includes, but is not limited to:
* Being patient. If you get frustrated, step away from the keyboard for a few minutes or hours before you do something you might regret later (if you need a few days, maybe you're in the wrong business?).
* Being all inclusive. We are all people of different age, sex, religion, race, nationality, etc, etc. But, we're all people. Treat people like people and that'll be a good start.

### Time is always in short supply
* Time is always precious. There's always another project in the pipeline that needs (or would be nice) to be done and applying improvements to past projects is always a challenge. Still, I'll do my best to come back to this if there are any improvements (obviously, there's always room for styling improvements...). If you contribute and I don't reply right away please accept my apologies in advance but know your contribution is important and I will reply as soon as possible.

## Installation, Available Scripts, and other React related stuff

Please visit Create React App's page (https://github.com/facebook/create-react-app).   

# Front End Libraries Projects - Build a JavaScript Calculator

Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/MJyNMd.

Fulfill the below user stories and get all of the tests to pass. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

User Story #1: My calculator should contain a clickable element containing an = (equal sign) with a corresponding id="equals".

User Story #2: My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", and id="nine".

User Story #3: My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: id="add", id="subtract", id="multiply", id="divide".

User Story #4: My calculator should contain a clickable element containing a . (decimal point) symbol with a corresponding id="decimal".

User Story #5: My calculator should contain a clickable element with an id="clear".

User Story #6: My calculator should contain an element to display values with a corresponding id="display".

User Story #7: At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.

User Story #8: As I input numbers, I should be able to see my input in the element with the id of display.

User Story #9: In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.

User Story #10: When inputting numbers, my calculator should not allow a number to begin with multiple zeros.

User Story #11: When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.

User Story #12: I should be able to perform any operation (+, -,\*\, /) on numbers containing decimal points.

User Story #13: If 2 or more operators are entered consecutively, the operation performed should be the last operator entered.

User Story #14: Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.

User Story #15: My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).

Note On Calculator Logic: It should be noted that there are two main schools of thought on calculator input logic: immediate execution logic and formula logic. Our example utilizes formula logic and observes order of operation precedence, immediate execution does not. Either is acceptable, but please note that depending on which you choose, your calculator may yield different results than ours for certain equations (see below example). As long as your math can be verified by another production calculator, please do not consider this a bug.

  EXAMPLE: 3 + 5 x 6 - 2 / 4 =
  Immediate Execution Logic: 11.5
  Formula/Expression Logic: 32.5

You can build your project by forking this CodePen pen. Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Once you're done, submit the URL to your working project with all its tests passing.

Remember to use the Read-Search-Ask method if you get stuck.
