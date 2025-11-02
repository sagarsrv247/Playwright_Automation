//const {test, expect} = require('@playwright/test')
import {test, expect} from '@playwright/test'

test('Locators', async ({page}) =>{

await page.goto("https://demoblaze.com/index.html");
//click on login button - property
//await page.locator('id=login2').click(); -> this also works.
await page.click('id=login2');
// provide username - css
//await page.locator('#loginusername').fill("pavanol"); 
await page.fill('#loginusername', 'pavanol');
//await page.type('#loginusername', 'pavanol')->this also works

await page.fill("#loginpassword", "test@123"); // simpler and faster
await page.click("//*[@id='logInModal']/div/div/div[3]/button[2]");


//verify logout link presence:

const logoutlink = await page.locator("//*[@id='logout2']"); //xpath//xpath
await expect(logoutlink).toBeVisible(); //assertion for logout link




await page.close();
})