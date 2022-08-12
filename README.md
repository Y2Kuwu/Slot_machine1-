# Slot_machine-
Game title: COIN CONSUMER;

Basic slot machine game with some fun elements added

Link: https://coinconsumer.netlify.app/
Notes/instructions for game:
-To start spin click the knob on the machine arm
-Credits will increase or decrease depending on matches
-Total credits are displayed to the right of the machine body
-Player start off with 5 credits
-If zero symbols matching the result will be -1 credit to current balance
-If two symbols matching the result will be +1 credit to current balance
-If three symbols matching the result will be +5 credit to current balance
-The '$' button located left to the handle will allow the player to "cheat" adding +1 regardless of outcome
-The red 'X' button will quit the game and exit page
    -matches have been tested and are pulling from three seperate but identical arrays and randomized

Utilized technologies: JS, HTML, CSS, Affinity Designer

Approach taken:
Wireframe project in whimsical(unrelated project created and unused)
Project structure designed in txt file (psuedocode)

Things that went well:
Once values auto reset, changed function of reset button to add +1 point (cheat button).
Simple onclick window close button.
Using transparent elements(parents) locations, width, height used to map slot image assets. 
Simplified credit tracking.
Simplifying functions and making overall content more 'lean'.
Had fun making assets.

General hurdles:
Route for storing and accessing elements. Originally plain arrays, then tried classes, settled with object containing duplicate arrays and randomizing in seperate function.
Creating elements and appending appropriatly, better understanding of concept now.
Overcomplicating steps.
Prioritizing elements appropriately and initial structure.
Some issues layering images png vs. jpg
Had a way to generate new visible play combos, deleted code..

Future commits, fixes, and enhancements will include:
-Toggled lights upon win , lose , or idle before play
-Sound effects for button presses and handle (arm) pulls
-Feature to add rarely called bonus column(end column on right)
-Spinning effect of symbols
-Images not updating, may have deleted the lines for that.

-*if not complete* Symbols are replaced by new

Resources used:
MDN, stackOverflow, w3schools, notes