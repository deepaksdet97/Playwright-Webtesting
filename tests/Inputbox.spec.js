const{test,expect}=require('@playwright/test')
test('handle inputbox',async({page})=>{
    await page.goto('https://www.amazon.com/');
//inputbox 
await expect (await page.locator("//input[@id='twotabsearchtextbox']")).toBeVisible();
await expect (await page.locator("//input[@id='twotabsearchtextbox']")).toBeEmpty();
await expect (await page.locator("//input[@id='twotabsearchtextbox']")).toBeEditable();
await expect (await page.locator("//input[@id='twotabsearchtextbox']")).toBeEnabled();
//await page.fill("//input[@id='twotabsearchtextbox']").fill("mobile")
await page.fill("//input[@id='twotabsearchtextbox']",'mobile');
await page.waitForTimeout(5000);
})