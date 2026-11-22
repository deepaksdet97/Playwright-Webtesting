const{test,expect}=require('@playwright/test')
test('BootstrapDropdown',async({page})=>{
await page.goto('https://www.jquery-az.com/boots/demo')
await page.locator('.multiselect').click()// click on the dropdown
const options =await page.locator('ul>li label input')
await expect (options).toHaveCount(11);



})