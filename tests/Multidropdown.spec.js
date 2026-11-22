const{test,expect}=require('@playwright/test')
test("Multidropdownhandle",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //select multiple options from multi select dropdown
    //await page.selectOption('#colors',['Blue','Red','Yellow'])//it will all 3 color
    //Assertions
    const options=await page.locator('#colors option')
await expect(options).toHaveCount(7);
    await page.waitForTimeout(5000);
})