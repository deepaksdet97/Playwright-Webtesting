const{test,expect}=require('@playwright/test');
const { title } = require('node:process');
test('HomePage',async({page})=>{
   await page.goto('https://demoblaze.com/index.html');
  const pageTitle = page.title();
  console.log('page title is:',pageTitle);
  await expect(page).toHaveTitle('STORE');
  const pageURL=page.url();
  console.log('page URL is:',pageURL);
  await expect(page).toHaveURL('https://demoblaze.com/index.html');
  await page.close();

}
)