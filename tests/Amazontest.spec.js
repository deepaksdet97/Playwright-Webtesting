const{test,expect}=require('@playwright/test')
test('lunchurl',async({page})=>{
    await page.goto("https://www.amazon.in/");
    
})