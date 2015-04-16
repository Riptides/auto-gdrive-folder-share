/*
Automated Folder Sharing via Form Submission
By Karl Franke

Add the following code as a apps script to the sheet your form puts its 
responses in.
Edit the variables noted below to indicate the proper folder name and 
columns.
Add a trigger to run the addNewUsers function upon form submission.
*/

function addNewUsers() {
////////////////  EDIT THESE Variables /////////////////////
  var emailColumn = 3;
  var nameOfFolder = 'Fake Folder to Share';
  var statusColumn = 6;
////////////////////////////////////////////////////////////
  
  // Build list of current shared users
  var folder = DocsList.getFolder(nameOfFolder);
  var editors = folder.getEditors();
  var editorsArray = [];
  for (var i = 0; i < editors.length; i++){
    var newEmail = editors[i].getEmail();
    editorsArray.push(newEmail)
  }
  
  // Get email of last form submission
  var sheet = SpreadsheetApp.getActiveSheet();
  var myFullData = sheet.getDataRange();
  var numOfRows = myFullData.getNumRows();
  var myDataRange = sheet.getRange(numOfRows, emailColumn, 1, 1);
  var emailToAdd = myDataRange.getValue();
  
  // Check if the email is already an editor, add if not, and document 
action in sheet
  if (editorsArray.indexOf(emailToAdd) >= 0){
    Logger.log(emailToAdd + " - Already an editor");
    sheet.getRange(numOfRows, statusColumn).setValue('Already an 
editor');
  } else {
    Logger.log(emailToAdd + " - Adding as editor");
    folder.addEditor(emailToAdd);
    sheet.getRange(numOfRows, statusColumn).setValue('Added');
  }
  

}
