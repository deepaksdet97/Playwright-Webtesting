

const{test,expect}=require('@playwright/test')
test("Handledropdown",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //Multiple way to select option from the dropdown 
   // await page.locator("#country").selectOption({label:'India'});
     //await page.locator("#country").selectOption('India');
      await page.locator("#country").selectOption({value:'uk'});
    await page.waitForTimeout(5000);


})