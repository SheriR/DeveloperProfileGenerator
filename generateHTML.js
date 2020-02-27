const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

function generateHTML(inputData) {
  //console.log(inputData, "this is what we're looking for")
  return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <title>Document</title>
      <style>
          @page {
            margin: 0;
          }
         *,
         *::after,
         *::before {
         box-sizing: border-box;
         }
         html, body {
         padding: 0;
         margin: 0;
         }
         
         html, body, .wrapper {
         height: 100%;
         }

         .wrapper {
         background-color: ${colors[inputData.userColor].wrapperBackground};
         padding-top: 100px;
         }
         body {
         background-color: ${colors[inputData.userColor].wrapperBackground};
         -webkit-print-color-adjust: exact !important;
         font-family: 'Cabin', sans-serif;
         }
         main {
         background-color: #E9EDEE;
         height: auto;
         width: 100%;
         padding-top: 30px;
         }
         h1, h2, h3, h4, h5, h6 {
         font-family: 'BioRhyme', serif;
         margin: 0;
         }
         h1 {
         font-size: 3em;
         }
         h2 {
         font-size: 2.5em;
         }
         h3 {
         font-size: 2em;
         }
         h4 {
         font-size: 1.5em;

         }
         h5 {
         font-size: 1.3em;
         }
         h6 {
         font-size: 1.2em;
         }
         .photo-header {
         position: relative;
         margin: 0 auto;
         margin-bottom: -50px;
         display: flex;
         justify-content: center;
         flex-wrap: wrap;
         background-color: ${colors[inputData.userColor].headerBackground};
         color: ${colors[inputData.userColor].headerColor};
         padding: 10px;
         width: 95%;
         border-radius: 6px;
         }
         .photo-header img {
         width: 250px;
         height: 250px;
         border-radius: 50%;
         object-fit: cover;
         margin-top: -75px;
         margin: 2vh;
         border: 6px solid ${colors[inputData.userColor].photoBorderColor};
         box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
         }
         .photo-header h1, .photo-header h2 {
         width: 100%;
         text-align: center;
         
         }
         .photo-header h1 {
         margin-top: 10px;
         }
         .links-nav {
         width: 100%;
         text-align: center;
         padding: 20px 0;
         font-size: 1.1em;
         }
         .nav-link {
         display: inline-block;
         margin: 5px 10px;
         }
         .workExp-date {
         font-style: italic;
         font-size: .7em;
         text-align: right;
         margin-top: 10px;
         }
         .container {
         padding: 50px;
         padding-left: 100px;
         padding-right: 100px;
         }

         .row {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-top: 20px;
           margin-bottom: 20px;
         }

         #bio.row {
          justify-content: center;
         }
         .card {
           padding: 20px;
           border-radius: 6px;
           background-color: ${colors[inputData.userColor].headerBackground};
           color: ${colors[inputData.userColor].headerColor};
           margin: 20px;           
         }
         
         .col {
         flex: 1;
         text-align: center;
         }

         a, a:hover {
         text-decoration: none;
         color: inherit;
         font-weight: bold;
         }

         @media print { 
          body { 
            zoom: .75; 
          } 

                   
      </style>
    </head>

<body>
    
<div class="wrapper">
  
  <div class="photo-header">
    <img src="${inputData.imgUrl}" alt="user image" class="photo-header"></img>
        <h1>Hi!</h1>
        <h1>My name is ${inputData.name}!</h1>
        <div class="links">
            <a class="nav-link" >${inputData.location}</a>
            <a class="nav-link" href="${inputData.profile}">GitHub</a>
            <a class="nav-link" href="${inputData.blog}">Blog</a>
        </div>
  </div>
      <div class="container">
        <div class="row" id="bio">
          <h4>${inputData.bio}</h4>
        </div>
        <div class="row">
          <div class="col">
            <div class="card">
              <h3>Repos</h3>
              <h2>${inputData.repos}</h2>
            </div>
        
            <div class="card">
              <h3>Followers</h3>
              <h2>${inputData.followers}</h2>
            </div>

            <div class="card">
              <h3>Stars:</h3>
              <h2>${inputData.stars}</h2>
            </div>
   
            <div class="card">
              <h3>Following</h3>
              <h2>${inputData.following}</h2>
            </div>
          </div>
        </div>
      </div>
  
  
    </div>
  
  </body>
  
  </html> `}  
  
  module.exports = generateHTML;