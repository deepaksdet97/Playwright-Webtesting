const{test,expect} = require('@playwright/test')
 test('Built in locator',async({page})=>{
  //open orange login page
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',{ waitUntil:'domcontentloaded'})//if page will not load 30s we have to use,{ waitUntil:'domcontentloaded'}
 //Verify company logo
   const logo=await page.getByAltText('company-branding')//validate the log with this syntex
 await expect(logo).toBeVisible();
 //entre user name and paasword and click button
 
 await page.getByPlaceholder('Username').fill("Admin")
await page.getByPlaceholder('Password').fill("Admin@123")
await page.getByRole('button',{type:'submit'}).click()

 

})