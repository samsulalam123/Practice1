@MyLogin
Feature: Check automationpractice login

Scenario Outline: login with valid credential and check the different functionality
		
Given open the chrome browser
And  Enter the "<URL>"
When Click on sign buttonz

Then exit the browser

Examples: 
|URL										|email								|password|
|https://www.amazon.com						|alam@gmail.com                     |alam123 |