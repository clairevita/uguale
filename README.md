![License](https://img.shields.io/badge/License-MIT-blue.svg "License Badge")
## Table of Content: 
#### (Link to Github Repo) [https://github.com/clairevita/uguale]
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#Contributing)
- [License](#license)
- [Questions](#Questions)
- [Credits](#credits)


## Link to Github Repo
https://github.com/clairevita/uguale

## Link to the Deployed Application
 https://uguale.herokuapp.com/

## Description
Where are the math applications that engage with the skills we're taught when we're first learning? This basic addition application allows users to practice their addition skills like they learned in their early education. Right to left digit inputs and a sketchable backdrop engage your brain with those early methodologies.
 
## Installation 
 
 To run this application locally, clone this repository to your desired directory. 
 
 In your command line, run an `npm install` to ensure all of the necessary node packages are installed. 
 
 In order to run a functioning database, you will need to create a `.env`. In this file, define the DB_PASSWORD variable, referenced in the [config.js](https://github.com/clairevita/uguale/blob/main/config/config.js) file. 
 
 To build this application, the developers used MySQL Workbench to facilitate their connection. You will need to create a connection using the following credentials:
 ```
 username: root
 database: uguale_db
 host: localhost
 ```
 With your connections password being the string defined in your `.env` file. 
 
 IF you have specific connection requirements, modify the [config.js](https://github.com/clairevita/uguale/blob/main/config/config.js) file to meet your needs.
 
 Once your connection is running, enter `npm start` to initiate the application. It should launch automatically in your default browser, otherwise naviate to [localhost:3000](http://localhost:3000/).

## Usage

To use, on the splash screen, tap the login button to create an account with our service. Fill out the survey so that we can learn a little bit about who you are, and so we can best develop an experience fit for your knowledge level and background. 

After submitting the form, you have successfully registered an account with our service. Tap the Start button to initiate the game sequence.

On screen, tap the number boxes to fill the corresponding digit for the equation provided. After filling each necessary digit, tap submit to see if you have answered the question correctly or incorrectly. You will receive a modal notification indicating if you were successful.

If you've answered a question incorrectly. Tap the Settings button and then tap the Dashboard button, to be directed to your user history. Here you can retry any questions you've answered incorrectly.

Returning to the settings menu, if you would like to change your theme, we have a variety of themestyles, as well as a night mode according to your preference.

Each question that you submit to the application will result in a sequential one scaled according to your difficulty modifier. If you are answering questions correctly in succession, your questions will get more and more challenging. As you answer incorrectly, the opposite will occur.


## Contributing

For contributions, comments, or suggestions. Please reachout to the developers. Their contact information can be found in [Credits](#credits).

## License
       MIT

> GitHub [Claire Vita](https://github.com/clairevita)

> GitHub [Deirdre Cruice](https://github.com/dmcc789)

> GitHub [Roman Mazzei](https://github.com/mazzeiroman)     

> GitHub [Logan Morro](https://github.com/loganfmorro)

      
### Credits
© 2021 Claire Vita, Deirdre Cruice, Logan Morro, Roman Mazzei.     
      
