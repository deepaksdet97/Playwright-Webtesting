const{test,expect}=require('@playwright/test')
test('Hard Assertion test',async({page})=>{
  //open  app url
  await page.goto('https://demo.nopcommerce.com/register')
  //expect(page).toHaveURL()    
  //means the page contains same url or not that will verify
   await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
//verify the title of the page
//expect(page).toHaveTitle()
await expect(page).toHaveTitle('nopCommerce demo store. Register') 
// like use diff assertion and check
//3
})