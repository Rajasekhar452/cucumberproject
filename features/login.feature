
Feature: OrangeHRM Login

           Scenario: Verify  OrangeHRM Login

    
         Given open the firefox browser
         Given navigate the application url
         When enter the username 
         When enter the password 
         When click on login
         Then verify welocomePage 
         When close the browser