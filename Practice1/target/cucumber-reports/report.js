$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/resources/practice.feature");
formatter.feature({
  "line": 2,
  "name": "Check automationpractice login",
  "description": "",
  "id": "check-automationpractice-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@MyLogin"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "login with valid credential and check the different functionality",
  "description": "",
  "id": "check-automationpractice-login;login-with-valid-credential-and-check-the-different-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "open the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the \"\u003cURL\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on sign button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "exit the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "check-automationpractice-login;login-with-valid-credential-and-check-the-different-functionality;",
  "rows": [
    {
      "cells": [
        "URL",
        "email",
        "password"
      ],
      "line": 12,
      "id": "check-automationpractice-login;login-with-valid-credential-and-check-the-different-functionality;;1"
    },
    {
      "cells": [
        "https://www.amazon.com",
        "alam@gmail.com",
        "alam123"
      ],
      "line": 13,
      "id": "check-automationpractice-login;login-with-valid-credential-and-check-the-different-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "login with valid credential and check the different functionality",
  "description": "",
  "id": "check-automationpractice-login;login-with-valid-credential-and-check-the-different-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@MyLogin"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "open the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the \"https://www.amazon.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on sign button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "exit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stef_defpractice.open_the_chrome_browser()"
});
formatter.result({
  "duration": 4147910000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.com",
      "offset": 11
    }
  ],
  "location": "stef_defpractice.enter_the(String)"
});
formatter.result({
  "duration": 9244176200,
  "status": "passed"
});
formatter.match({
  "location": "stef_defpractice.click_on_sign_button()"
});
formatter.result({
  "duration": 1306673500,
  "status": "passed"
});
formatter.match({
  "location": "stef_defpractice.exit_the_browser()"
});
formatter.result({
  "duration": 639149500,
  "status": "passed"
});
});