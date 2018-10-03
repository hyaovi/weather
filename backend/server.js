const express = require('express');

const app = express();
const PORT = 5000;
const ICONS_PATH = 'D:\workspace\dev\01react-revision\weather\client\src\assets\icons';


app.use(express.static('../client/src/assets'));

//app.use('/weatherIcons', express.static(ICONS_PATH));



app.get('/', (req, res) =>{
    res.json( {'message':'hello sunshine'})
} )

app.listen(PORT, ()=> console.log(`Listening on port: ${PORT}`));