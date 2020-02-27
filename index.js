//console.log("123");

// dependencies needed
const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const pdf = require('html-pdf');
const generateHTML = require('./generateHTML');

// user questions
const questions = [
  {
    type: "input",
      name: "username",
      message: "What is your Github user name?"
  },
  {
    type: "list",
    message: "Please choose your favorite color.",
    name: "userColor",
    choices: ["green", "blue", "pink", "red"]
  }
];

inquirer
  .prompt(questions)
  .then(function (prompt) {
    // github api call
    
    const queryUrl = `https://api.github.com/users/${prompt.username}`;
    
    axios.get(queryUrl).then(function (res) {
      
    

      // info needed from github for the PDF
      const dataToSendToGenerateHtml = {
        imgUrl: res.data.avatar_url,
        name: res.data.name,
        location: res.data.location,
        profile: res.data.html_url,
        blog: res.data.blog,
        bio: res.data.bio,
        repos: res.data.public_repos,
        followers: res.data.followers,
        stars: res.data.public_gists,
        following: res.data.following,
        userColor: prompt.userColor
      }

      
console.log(dataToSendToGenerateHtml)




      fs.writeFile("index.html", generateHTML(dataToSendToGenerateHtml), function (err) {
        if (err) {
          throw err;
        }
        writePDF();
      });


    }).catch(function (error) {
      console.log("Error: ", error);
    });
  });

// // generate pdf
function writePDF() {
  var html = fs.readFileSync('./index.html', 'utf8');
  var options = { format: 'Letter' };

  pdf.create(html, options).toFile('./githubProfile.pdf', function (err, res) {
    if (err) return console.log(err);
    console.log(res, "pdf created"); 
    
  });
};