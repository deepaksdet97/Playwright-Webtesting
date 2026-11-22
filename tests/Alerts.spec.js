const{test,expect}=require('@playwright/test')
test('Alerts handle',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
//Enabling Dialog window handler
page.on('dialog',async dialog=>{
expect(dialog.type()).toContain('alert')
expect(dialog.message()).toContain('I am an alert box!')
await dialog.accept();

})
await page.click(//button[@id='alertBtn']);
page.waitForTimeout(5000);

})