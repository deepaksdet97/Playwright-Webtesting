const{test,expect}=require('@playwright/test')
test('Auto suggestion drop down',async({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.locator('//input[@id="srcinput"]').fill('Delhi');
     
})