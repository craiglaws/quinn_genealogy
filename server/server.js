const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');


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
      user: '',
      pass: ''
    }
  });
  let user = data.userRequestDetails;
  let htmlUser =  createUserDetailsHtmlString(user);
      let motherHtml = data.motherSide ? "<h1>Mother's Side</h1>" + createRelativeHtmlString(data.motherSide) : '';
      let fatherHtml = data.fatherSide ? "<h1>Father's Side</h1>" + createRelativeHtmlString(data.fatherSide) : '';
  
  let mailOptions = {
    from: data.userRequestDetails.email,
    to: 'emily_ralston@hotmail.co.uk',
    subject: `New Request From ${data.userRequestDetails.name}`,
    html: `
      <div style="font-family:verdana">
        ${htmlUser}
        ${motherHtml}
        ${fatherHtml}
        </div>
        `
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

 function createRelativeHtmlString(array){
  let outPutString = '<ul style="list-style-type:none;">';
      array.forEach(element => {
        outPutString = outPutString + 
        `<p> Name: ${element.name}</p>
        <p> D.O.B: ${element.dob}</p>
        <p> Birthplace: ${element.birthplace}</p>
        <p> Relation: ${element.relation}</p> 
        <br>
        `
      });
      outPutString = outPutString + '</ul> <br>';
    return outPutString;
}

function createUserDetailsHtmlString(user){
  `
  <h1 >Contact Details</h1> 
  <ul style="list-style-type:none;">
    <p> Name: ${user.name}</p>
    <p> D.O.B: ${user.dob}</p>
    <p> Birthplace: ${user.birthplace}</p>
    <p> Email: ${user.email}</p>
    <p> Contact Number: ${user.phoneNumber}</p>
  </ul>
  <br>
  `
}