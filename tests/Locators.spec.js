//const{test,expect} = require('@playwright/test')
import{test,expect} from '@playwright/test'
 test('Locators',async ({page})=>{
await page.goto("https://www.demoblaze.com/index.html") 
//click on login button
//await page.locator('id=login2').click()
await page.click('id=login2')  
//provide username -CSS
//await page.locator("#loginusername").fill("Deepak") 
await page.fill('#loginusername','pavanol')
//await page.type('#loginusername','pavanol')
//provide password -CSS
await page.fill("input[id='loginpassword']",'test@123')
//Click on login button-use xpath
await page.click("//button[normalize-space()='Log in'] ")
//verify logout link presence-use xpath
const logoutlink= await page.locator("(//a[normalize-space()='Log out'])[1]")
await expect(logoutlink).toBeVisible();
await page.close()
 })


 