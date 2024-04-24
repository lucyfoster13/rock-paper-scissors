# Camera Club

Rock, Paper, Scissors is an entertainment website. Users can play the traditional game against the CPU (our robot, Gary). Whoever wins the most rounds before the 30-second timer runs out is the winner. The live version of the site can be viewed [here:](https://lucyfoster13.github.io/rock-paper-scissors/)

![Mockup](*******)

## Features 

### Existing Features
* Header
    * The header provides the name of the game and an action button to learn how to play. Once the button is clicked, a modal box appears, explaining the terms of the game and introducing the user to their opponent, Gary. 
    * The site provide a straightforward entry-point into the game. The controls, like 'Start Game' and "Reset Game" are clearly labelled and the controls are depicted with images and are complete with Aria labels.
    * When the user clicks the "Start Game" button, a timer appears and starts counting from 00:30.
    ![Nav Bar](*****)

### Features Left to Implement
    * As a future enhancement, I would like to introduce a modal box in place of the final messages declaring the overall winner. The modal box would appear when the timer runs out, would include gifs alongside the message text, making the game more fun.
    * I would also like to include some animations to the images, making the game feel more vibrant and energetic.

## Testing 

### Responsiveness
All pages were tested to ensure responsiveness on screen sizes from 280px and upwards on Chrome, Safari, Firefox and Opera browsers.

Steps to test:

1. Open browser and navigate to [Rock, Paper, Scissors](https://lucyfoster13.github.io/rock-paper-scissors/)
2. Open the developer tools (right click and inspect)
3. Set to responsive and decrease width to 280px or "Galaxy Fold"
4. Set the zoom to 50%
5. Click and drag the responsive window to maximum width

Expected:

Website is responsive on all screen sizes and no images are pixelated or stretched.
No horizontal scroll is present.
No elements overlap.

Actual:

Website behaved as expected.

Website was also opened on the following devices and no responsive issues were found:

- Apple iPhone 12 Pro
- Apple iPhone 15 Pro Max
- Samsung Galaxy S10
- Amazon Fire HD 8 Tablet
- Apple iPad Pro
- Apple Macbook Pro

### Accessibility
[Wave Accessibility](https://wave.webaim.org/) tool was used throughout development and for final testing of the deployed website to check for any aid accessibility testing.

Testing was focused to ensure the following criteria were met:

- All forms have associated labels or aria-labels so that they can be read aloud by a screen reader
- Colours used on the site are suitably contrasted and don't cause any readability issues for visually impaired users
- Heading levels are not skipped, ensuring each section of content's importance is relayed correctly to the end user
- All content is contained within landmarks to ensure ease of use for assistive technology, allowing the user to navigate by page regions
- All images and icons have alternative text or titles so descriptions can be communicated. via screen readers
- HTML page lang attribute has been set
- Aria properties have been implemented correctly

Found Issue: There was an empty h2 tag surrounding my result message div.
Fix: I removed the tags prepared to have to update the CSS styling for the messages but actually preferred the way it looked, using my secondary Goggle Font: Oswald.

### Lighthouse Testing
![Lighthouse Result](docs/testing-images/lighthouse-test.jpg)


### Functional Testing
- Testing was performed to ensure all buttons resulted in the correct action, as per design. This was done by clicking on the buttons and noting what happened.
- The choice images were tested to ensure that they fed the right information to the program and displayed the correct image in the user's image area.
- Testing was performed on the game as a whole to ensure the logic was correct and the game was functioning correctly.

In all scenarios, the functions behaved as expected.

### Validator Testing
* HTML
  * No errors were returned when passing through the official [W3C validator](https://validator.w3.org)

![HTML Validator Results](***)


* CSS
    * No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org)

![CSS Validator Results](****)


## Technologies
* HTML
    * The structure of the website was developed using HTML as the main language.
* CSS
    * The website was styled using custom CSS in an external file.
* Javascipt
    * The website's logic and responsivity was designed using Javascript in an extenal file.
* Gitpod
    * The website was developed using Gitpod IDE.
* GitHub
    * Source code is hosted on GitHub and deployed using Git Pages.
* Git 
    * Used to commit and push code during the development of the website.
* Google Fonts
    * The fonts used throughout the website were obtained from https://fonts.google.com/.
* Adobe Lightroom
    * Adobe Lightroom was used for resizing images and editing photos for the website.    
* Convertio & WebP Converter
    * https://convertio.co/ and https://www.freeconvert.com/webp-converter were used to convert image files from jpg to webp.  
* TinyJPG & TinyPNG
    * https://tinyjpg.com/ and https://tinypng.com/ were used to reduce the size of the images used throughout the website
* Favicon.io
    * The website's favicon was downloaded from https://favicon.io/favicon-converter/ 

## Deployment

### Version Control
The site was created using the Gitpod code editor and pushed to github to the remote repository ‘rock-paper-scissors.

The following git commands were used throughout development to push code to the remote repo:

```git add . ``` - This command was used to add any modifications to the staging area before they were committed.

```git commit -m “commit message”``` - This command was used to commit changes to the local repository queue, ready for the final step.

```git push``` - This command was used to push all committed code to the remote repository on github.

### Deployment to Github Pages
- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the menu on left select 'Pages'
  - From the source section drop-down menu, select the Branch: main
  - Click 'Save'
  - A live link will be displayed in a green banner when published successfully. 

The live link can be found here - https://lucyfoster13.github.io/rock-paper-scissors/

### Clone the Repository Code Locally
Navigate to the GitHub Repository you want to clone to use locally:

- Click on the code drop down button
- Click on HTTPS
- Copy the repository link to the clipboard
- Open your IDE of choice (git must be installed for the next steps)
- Type git clone copied-git-url into the IDE terminal

The project will have been cloned on your local machine and be ready to use. 

## Credits 

### Content 
* Displaying the user and computer's choices as images was inspired by Code Institute's video in the module content.
* All text content on the site was written by the developer.
* Putting the rules inside a modal box was an idea from my mentor Gareth McGirr, enabling me to put them behind a clickable button and save space on the page.

### Code
* Code to disable the game buttons when the page first loads: https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp
* When I ran into obstacles, this website helped me to fix them and to further understand the logic and function behind the code: https://hackr.io/blog/how-to-build-rock-paper-scissors-in-javascript
* I learned how to create a countdown timer with help from this video: https://www.youtube.com/watch?v=x7WJEmxNlEs
* I learned how to add a modal box from this lesson: https://www.w3schools.com/howto/howto_css_modals.asp

### Media 
* All images were downloaded from [iStock](https://www.istockphoto.com/) and [Adobe Stock](https://stock.adobe.com/ie/).