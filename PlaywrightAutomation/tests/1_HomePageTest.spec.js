const {test, expect} = require('@playwright/test')

test('Home Page', async ({page})=>{

    await page.goto('https://demoblaze.com/');
    
    const pageTitle = await page.title(); //to store the webpage title
    console.log('Page title is: ',pageTitle);

    
    await expect(page).toHaveTitle('STORE'); //validating the webpage title


    const pageURL = await page.url(); //to store the webpage url.
    console.log('Page URL is: ',pageURL);

    await expect(page).toHaveURL('https://demoblaze.com/'); //validating the URL of the page.

    await page.close();

})