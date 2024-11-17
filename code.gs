function doGet() {
  // Logger.log(e.parameter);
  return HtmlService.createHtmlOutputFromFile("index"); 
}


function userClicked(name, email, phone, message){
  var url = "https://docs.google.com/spreadsheets/d/1BRowj3u-gGTouSKWbl7KZ1YlmbeE3nyRqyDvz_keeFc/edit";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");

  ws.appendRow([name, email, phone, message]);

}
