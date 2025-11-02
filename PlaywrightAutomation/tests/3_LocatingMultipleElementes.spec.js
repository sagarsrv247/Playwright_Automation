import {test, expect} from '@playwright/test'

test('LocateMultipleElements', async ({page}) =>{

    await page.goto("https://demoblaze.com/index.html");
    const links  = await page.$$('a');
    for (const link of links)
    {
        const linktext = await link.textContent(); //return text of the link
        console.log(linktext);
    }
})