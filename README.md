# Introduction
This project is an online calculator made by the `React framework`. When users login, they can use the online calculator. This project mainly realizes three functions: registration, login and online calculator.

This project is mainly created by the `React framework`, `React Router` and `React Redux`. It is an SPA(single page application). At its core, what React Router does is conditionally render certain components to display based on the route used in the URL. To switch between functions, I tried `React Router`. I use the `React Redux` to realize the function of online calculator.

# Demo
 + Login Page：![Alt text](/resource/signIn.png)
 In this page you should input the username and password to login. If the username and password do not fulfill the requirement, it will have alert to tell you what's the problem.

 + Register Page: ![Alt text](/resource/signUp.png)
 When you sign up for account, you should obey the rule. Otherwise, a pop-up alert will prompt where there is an error.
 
 + Calculator Page: ![Alt text](/resource/calculator.png)
 When you have signed in, you will find that there is an additional option(calculator) in the navigation bar. The Sign in and Sign up change to the username and Quit. You can operate the calculator either by the keyboard or mouse. If you press the Quit, the calculator option will be disappeared and tags on the right angle will change back to the Sign in and Sign up.


# How to run?

## `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
