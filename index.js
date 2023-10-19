const express = require('express')
const serveIndex = require('serve-index')
const fileUpload = require('express-fileupload');
const app = express()
const port = 3000

app.use(fileUpload());

app.get('/public/:id', function(req, res){
  const file = `./public/${req.params.id}`;
  res.download(file); // Set disposition and send it.
});

app.use('/public', express.static(__dirname + '/public'), serveIndex(__dirname + '/public', {'icons': true}))

app.use('/', express.static(__dirname + '/upload'))

app.get('/', function (request, response) {
  response.sendFile(path.resolve(`${__dirname}'/upload'`, 'index.html'));
});

app.post('/uploadfile', function (request, response) {
  if (!request.files || !request.files.uploadedFile) {
    return response.status(400).send('No files were uploaded.');
  }

  const uploadedFile = request.files.uploadedFile;
  
  // determining the file upload path to be /public folder
  const uploadPath = __dirname + '/public/' + uploadedFile.name;

  uploadedFile.mv(uploadPath, (err) => {
    if (err) {
      return response.status(500).send(err);
    }
      // Successful upload file
      response.send('File uploaded successfully!');
    });

})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})