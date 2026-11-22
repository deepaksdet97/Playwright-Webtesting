const{test,expect}=require('@playwright/test')
test('checkRadiobutton',async({page})=>{
     await page.goto('https://www.amazon.com/');
    //check radio buuton
   await page.locator("//div[@data-csa-c-element-id='filter-departments-Appliances']//i[@class='a-icon a-icon-radio']").check();
   await page.locator("//div[@data-csa-c-element-id='filter-departments-Appliances']//i[@class='a-icon a-icon-radio']").toBechecked();//should be check
   await page.locator("//div[@data-csa-c-element-id='filter-departments-Appliances']//i[@class='a-icon a-icon-radio']").toBetruthy(); //its check radio check or not ,should be check then pass
   await page.locator("//div[@data-csa-c-element-id='filter-departments-Appliances']//i[@class='a-icon a-icon-radio']").toBefalsy();//if radio buuton to check it will pass
   await page.waitForTimeout(5000);
   page.
})
