import nodemailer from 'nodemailer';

// Create sendMail function
export function sendMail(req, res) {
  // let mailbody = req.body;
  var transporter = nodemailer.createTransport({
    // turn the gmail account to be less secure
    // https://myaccount.google.com/lesssecureapps
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'username@gmail.com', //use your gamil account
      pass: 'password' //use your password, this is an example, I can't post the real one on hithub lol
    }
  });

  var mailOptions = {
    from: 'mallorywebsite@gmail.com',
    to: 'menghsuanchin@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if(error) {
      console.log(error);
      res.status(404);
      res.json(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.status(201);
      res.json('Email sent: ' + info.response);
    }
  });
}

