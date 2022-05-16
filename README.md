# vacation-await      
<br>

![License:MIT](https://img.shields.io/badge/License:_MIT-black?style=for-the-badge)
<br>

## <ins> Table of Contents: </ins>

- [Questions](#-questions-)
- [Description](#-description-)
- [Installation](#-installation-)
- [Usage](#-usage-)
- [Technologies and Programs Used](#-technologies-and-programs-used-)
- [Current Bugs](#-current_bugs-)
- [Demonstration](#-demonstration-)
- [Links](#-links-)
- [Credits](#-credits-)
- [License](#-license-)
<br><br>  

## <ins> Questions? </ins>

### By The Vacation Awaits Team
- Maung Htike
- Keerti Chaudhary
- Callan Hunter
### Email: maunghtike1999@gmail.com
<br>

## <ins> Description: </ins>
This is a program constructed with Javascript and utilizes Node.js. It features usage of the Express.js, MySQL2, DotEnv, Sequelize, Handlebars, and Bcrypt packages to create a travel webpage that lets the user get ideas for any fun day trips that they might be thinking about.

<br>    

## <ins> Installation: </ins>
        
The webpage is deployed on Heroku so there is no need to download any of the files to run the program. If you would like to instead install it locally, please download all the files included in the repository. Afterwards, please open your terminal into the repository folder and utilize Node.js's npm install feature to install all the used packages. Then, load up mysql and enter your password. Source the schema file and quit.
<br>***npm i***<br>
<br>***mysql -u root -p***<br>
<br>***source db/schema.sql***<br>

## <ins> Usage: </ins>
        
To start the program via Heroku, please go to https://vacation-awaits.herokuapp.com/. If you would like to start the program locally, please follow the local installation steps and type in ***npm start***. You will then be able to go to the proper routes to see the webpage. If you would like to login, please click the login navbar option. If you would like to signup, please select signup instead within the login route. If you would like to run the plan generation, please click on the "Start Planning" button on the first carousel image on the home page. Please fill out the text boxes and add any filters you would like. Once the generation is finished (about 10 seconds), head over to your profile page and there you would be able to see all your plans.

<br>  

## <ins> Technologies and Programs Used: </ins>
<br>

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

- ![UIkit](https://img.shields.io/badge/UIkit-blue?style=for-the-badge&logo=UIkit&logoColor=white)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

- ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

- ![Handlebars](https://img.shields.io/badge/Handlebars-orange?style=for-the-badge&logo=Handlebars.js&logoColor=black)

- ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

- ![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)

- ![DotEnv](https://img.shields.io/badge/DotEnv-purple?style=for-the-badge)

- ![Bcrypt](https://img.shields.io/badge/Bcrypt-orange?style=for-the-badge)

![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
<br>
        
## <ins> Current Bugs: </ins>
- The current API is not very reliable. When you run a request, there is a small chance that the API will not provide us with some information such as restaurant without a review which would cause the request to cause an error. If the API is missing some needed parameters for the rest of the API call function and catches an error, the user will have to rerun the generation request in order to rerun the API calls.
- After clicking generation, there is not any animation to show that our API call is being run and we are not redirected to the plans route.

## <ins> Demonstration: </ins>
        
![Demonstration](./demo/demo.gif)
<br><br>   

## <ins> Links: </ins>
        
- [Github Deployed Website](https://sfzmango.github.io/vacation-awaits/)
- [Heroku Deployed Website](https://vacation-awaits.herokuapp.com/)
- [Github Repository](https://github.com/Sfzmango/vacation-awaits)
<br>     

## <ins> Credits: </ins>

Special Thanks to: 
Vacation Awaits Dev Team
- Maung Htike
- Keerti Chaudhary
- Callan Hunter
<br>

## <ins> License: </ins>

<br>

MIT License

Copyright (c) 2022 The Vacation Awaits Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

