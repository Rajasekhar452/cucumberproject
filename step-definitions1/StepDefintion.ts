
import { After,  Before,  DataTable, Given,setDefaultTimeout,Then,When  } from "@cucumber/cucumber";

import { Browser, expect, firefox, Page} from "@playwright/test";

//setDefaultTimeout(60000);
//global variabe
let page:Page;
let browser:Browser



Given('open the firefox browser', async ()=> {
    browser=await firefox.launch({headless: false});
    page=await browser.newPage();
});



Given('navigate the application url', async ()=> {
   await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
});



When('enter the username', async ()=> {
    await page.locator("[name='txtUserName']").fill("Saibaba");
});

When('enter the password', async ()=> {
 await page.locator("[name='txtPassword']").fill("Saisreeraj@143");
});



When('click on login', async ()=> {
  await page.locator("[name='Submit']").click();
});

   

Then('verify welocomePage', async () => {

//identify the welcome saibaba

let text: string | null=await page.locator("xpath=/html/body/div[3]/ul/li[1]").textContent();

          console.log("text: "+text);
//verify welcome saibaba page

if(text=="Welcome Saibaba")
{
console.log("welcome verified successfully-Test passed");
}

else
{
console.log("welcome not verified successfully-Test failed");
}
   

});


When('close the browser', async ()=> {
    await browser.close();
 

});








