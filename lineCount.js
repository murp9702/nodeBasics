// get access to file system of server/computer
var fs = require('fs');


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// SYNC style
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


// var notesText = fs.readFileSync('./notes.md', 'utf-8').split(/\r\n|\r|\n/).length
//
// console.log(notesText)
//





// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// ASYNC style
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-

var asyncNotes = fs.readFile('./notes.md', 'utf-8', function (err, data) {
  var newNotes = data.split(/\r\n|\r|\n/).length;
  console.log(newNotes);
})
