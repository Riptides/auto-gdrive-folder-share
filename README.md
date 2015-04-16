# auto-gdrive-folder-share
Automate the sharing of a google drive folder via form submission

Create a google form that includes at a minimum a question for a gmail (or google apps) email address. 
Go into the spreadsheet where responses are stored, click tools, then click script editor.
Select create script for blank project and paste in the code from `share.js`. 
Edit the variables at the top of the script to indicate which column the gmail addresses are stored in, which column the script should write to to indicate sharing status, and the name of the folder to be shared.
Under resources select "Current Project's Triggers", name your project, and add a new trigger for the addNewUsers function so the script is run upon a new form submission.
