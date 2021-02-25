const express = require('express');
const router = express.Router();

// router.get('/newsletter', (req, res) => {
//   // res.sendFile(__dirname + '/signup.html') // Use bodyParser instead if you want html method post
//   res.render('signup')
// })

// router.post('/newsletter', (req, res) => {
//   let {first_name, last_name, email} = req.body;

//   const data = {
//       members: [
//           {
//               email_address: email,
//               status: "subscribed",
//               merge_fields: {
//                   FNAME: first_name,
//                   LNAME: last_name
//               }
//           }
//       ]
//   }

//   const jsonData = JSON.stringify(data)
//                       //API KEY LAST                      LIST ID
//   const url = 'https://us1.api.mailchimp.com/3.0/lists/44ddfef349'
//   const options = {
//       method: "POST",
//       auth:"naufal1:fddc9a10db2e903edac184a3a2f4a9f9-us1"
//   }

//   const request = https.request(url, options, () => {

//       if (response.statusCode === 200) {
//           // res.send("Successfully subscribed!")
//           res.render('success')
//       } else {
//           // res.send('Error')
//           res.render('failure')
//       }

//       response.on("data", (data) => {
//           console.log(JSON.parse(data));
//       })
//   })

//   request.write(jsonData);
//   request.end();
// })


module.exports = router

// API KEY
// fddc9a10db2e903edac184a3a2f4a9f9-us1


// UNIQUE ID
// 44ddfef349
