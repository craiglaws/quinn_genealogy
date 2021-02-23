const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => console.log(`Listening on port ${port}`));



app.get('/', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.post('/formSubmit', (req, res) => {
  let data = req.body;
  

  let smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASS
    }
  });
  let user = data.userRequestDetails;
  let htmlUser =  
      `<p> Name: ${user.name}</p>
      <p> D.O.B: ${user.dob}</p>
      <p> Birthplace: ${user.birthplace}</p>
      <p> Email: ${user.email}</p>
      <p> Contact Number: ${user.phoneNumber}</p>`

      let motherHtml = data.motherSide ? "<h>Mother's Side</h>" + createHtmlString(data.motherSide) : '';
      let fatherHtml = data.fatherSide ? "<h>Father's Side</h>" + createHtmlString(data.fatherSide) : '';
  
  let mailOptions = {
    from: data.userRequestDetails.email,
    to: process.env.USER_EMAIL,
    subject: `New Request From ${data.userRequestDetails.name}`,
    html: `
        ${htmlUser}
        ${motherHtml}
        ${fatherHtml}`
  };

  smtpTransport.sendMail(mailOptions,
    (error, response) => {
      if(error) {
        res.send(error)
      }else {
        res.send('Success')
      }
      smtpTransport.close();
    });

});

function createHtmlString(array){
  let outPutString = '';
      array.forEach(element => {
        outPutString = outPutString + 
        `<p> Name: ${element.name}</p>
        <p> D.O.B: ${element.dob}</p>
        <p> Birthplace: ${element.birthplace}</p>
        <p> Relation: ${element.relation}</p> <br>`
      });
    return outPutString;
}