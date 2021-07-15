$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contactUs.feature");
formatter.feature({
  "line": 1,
  "name": "Roician contact us Feature",
  "description": "",
  "id": "roician-contact-us-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Roician contact us Scenario",
  "description": "",
  "id": "roician-contact-us-feature;roician-contact-us-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "user is already on Roicion page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of login page is Roician",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user click on Contact Us",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enter \"\u003cYour Name\u003e\" and \"\u003cYour Email\u003e\" and \"\u003cSubject\u003e\" and \"\u003cYour Message\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on SEND",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "roician-contact-us-feature;roician-contact-us-scenario;",
  "rows": [
    {
      "cells": [
        "Your Name",
        "Your Email",
        "Subject",
        "Your Message"
      ],
      "line": 14,
      "id": "roician-contact-us-feature;roician-contact-us-scenario;;1"
    },
    {
      "cells": [
        "Mayank",
        "Mayank@gmail.com",
        "DataDriven",
        "Cucumber BDD"
      ],
      "line": 15,
      "id": "roician-contact-us-feature;roician-contact-us-scenario;;2"
    },
    {
      "cells": [
        "preyal",
        "Preyal@gmail.com",
        "DataDriven",
        "Cucumber BDD1"
      ],
      "line": 16,
      "id": "roician-contact-us-feature;roician-contact-us-scenario;;3"
    },
    {
      "cells": [
        "Dev",
        "dev@gmail.com",
        "DataDriven",
        "Cucumber BDD2"
      ],
      "line": 17,
      "id": "roician-contact-us-feature;roician-contact-us-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Roician contact us Scenario",
  "description": "",
  "id": "roician-contact-us-feature;roician-contact-us-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "user is already on Roicion page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of login page is Roician",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user click on Contact Us",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enter \"Mayank\" and \"Mayank@gmail.com\" and \"DataDriven\" and \"Cucumber BDD\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on SEND",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsStepDefinitions.user_is_already_on_Roicion_page()"
});
formatter.result({
  "duration": 19585893800,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsStepDefinitions.title_of_login_page_is_Roician()"
});
formatter.result({
  "duration": 33928800,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsStepDefinitions.user_click_on_Contact_Us()"
});
formatter.result({
  "duration": 4379063100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mayank",
      "offset": 12
    },
    {
      "val": "Mayank@gmail.com",
      "offset": 25
    },
    {
      "val": "DataDriven",
      "offset": 48
    },
    {
      "val": "Cucumber BDD",
      "offset": 65
    }
  ],
  "location": "ContactUsStepDefinitions.user_enter_YourName_and_YourEmail_and_Subject_and_YourMessage(String,String,String,String)"
});
formatter.result({
  "duration": 799708500,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsStepDefinitions.user_click_on_SEND()"
});
formatter.result({
  "duration": 7007746900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Roician contact us Scenario",
  "description": "",
  "id": "roician-contact-us-feature;roician-contact-us-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "user is already on Roicion page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of login page is Roician",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user click on Contact Us",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enter \"preyal\" and \"Preyal@gmail.com\" and \"DataDriven\" and \"Cucumber BDD1\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on SEND",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsStepDefinitions.user_is_already_on_Roicion_page()"
});
formatter.result({
  "duration": 14779695500,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsStepDefinitions.title_of_login_page_is_Roician()"
});
formatter.result({
  "duration": 6964300,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsStepDefinitions.user_click_on_Contact_Us()"
});
formatter.result({
  "duration": 6017448700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "preyal",
      "offset": 12
    },
    {
      "val": "Preyal@gmail.com",
      "offset": 25
    },
    {
      "val": "DataDriven",
      "offset": 48
    },
    {
      "val": "Cucumber BDD1",
      "offset": 65
    }
  ],
  "location": "ContactUsStepDefinitions.user_enter_YourName_and_YourEmail_and_Subject_and_YourMessage(String,String,String,String)"
});
formatter.result({
  "duration": 1278460600,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsStepDefinitions.user_click_on_SEND()"
});
formatter.result({
  "duration": 3445944400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Roician contact us Scenario",
  "description": "",
  "id": "roician-contact-us-feature;roician-contact-us-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "user is already on Roicion page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of login page is Roician",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user click on Contact Us",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enter \"Dev\" and \"dev@gmail.com\" and \"DataDriven\" and \"Cucumber BDD2\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on SEND",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsStepDefinitions.user_is_already_on_Roicion_page()"
});
formatter.result({
  "duration": 14910371000,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsStepDefinitions.title_of_login_page_is_Roician()"
});
formatter.result({
  "duration": 31584100,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsStepDefinitions.user_click_on_Contact_Us()"
});
formatter.result({
  "duration": 5816594400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dev",
      "offset": 12
    },
    {
      "val": "dev@gmail.com",
      "offset": 22
    },
    {
      "val": "DataDriven",
      "offset": 42
    },
    {
      "val": "Cucumber BDD2",
      "offset": 59
    }
  ],
  "location": "ContactUsStepDefinitions.user_enter_YourName_and_YourEmail_and_Subject_and_YourMessage(String,String,String,String)"
});
formatter.result({
  "duration": 854476300,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsStepDefinitions.user_click_on_SEND()"
});
formatter.result({
  "duration": 3236873000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "About Us Scenario",
  "description": "",
  "id": "roician-contact-us-feature;about-us-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "user is already on Roicion page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "title of login page is Roician",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user click on About Us",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "check image",
  "keyword": "And "
});
formatter.match({
  "location": "ContactUsStepDefinitions.user_is_already_on_Roicion_page()"
});
formatter.result({
  "duration": 14731860600,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsStepDefinitions.title_of_login_page_is_Roician()"
});
formatter.result({
  "duration": 25371000,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsStepDefinitions.user_click_on_About_Us()"
});
formatter.result({
  "duration": 2978006200,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsStepDefinitions.check_image()"
});
formatter.result({
  "duration": 25984000,
  "status": "passed"
});
});