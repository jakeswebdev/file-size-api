const express = require('express');
const path = require('path');
const app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.use('/public',express.static(__dirname + '/public'));

app.get('/',function(request,response){
  response.sendFile(path.join(__dirname + '/index.html'));
})
app.post('/upload',upload.single('myFile'),function(request,response){
  let fileInfo = request.file;
  response.json({"size":fileInfo.size});
});

app.listen(3000,function(){
  console.log('server working!');
});

