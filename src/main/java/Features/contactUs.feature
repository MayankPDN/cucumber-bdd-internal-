Feature: Roician contact us Feature


Scenario Outline: Roician contact us Scenario


Given user is already on Roicion page
When title of login page is Roician
Then user click on Contact Us
Then user enter "<Your Name>" and "<Your Email>" and "<Subject>" and "<Your Message>"
Then user click on SEND

Examples:
	| Your Name | Your Email       | Subject    |  Your Message  |
	| Mayank    | Mayank@gmail.com | DataDriven |  Cucumber BDD  |
	| preyal    | Preyal@gmail.com | DataDriven |  Cucumber BDD1 | 
	| Dev       | dev@gmail.com    | DataDriven |  Cucumber BDD2 |

Scenario: About Us Scenario

Given user is already on Roicion page
When title of login page is Roician
Then user click on About Us
And check image




