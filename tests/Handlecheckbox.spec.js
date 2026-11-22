const{test,expect}=require('@playwright/test')
test('checkbox',async({page})=>{
     await page.goto('https://www.amazon.com/');
    //check radio buuton
   await page.locator("//div[@data-csa-c-element-id='filter-brands-Ring']//i[@class='a-icon a-icon-checkbox']").check();
})
