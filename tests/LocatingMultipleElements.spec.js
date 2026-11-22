const{test,expect} = require('@playwright/test')
test('LocatingMultipleElements',async({page})=>{
await page.goto("https://www.demoblaze.com/index.html") 
/*const links = await page.$$('a')
for(const link of links)
{
    const linktext= await link.textContent();
    console.log(linktext);
}
    */
   // locate all the products displayed on home page and below codes though u find multiple webelements.
   await page.waitForSelector("//div[@id='tbodyid']//h4/a");//this line showing all the product
    const products = await page.$$("//div[@id='tbodyid']//h4/a")//its showing product some time not visible so above line add.
    for (const product of products){
        const prodName =await product.textContent();
        console.log(prodName);


        //class 4

    /* inside the code for specific web elements how to find
    2nd one how to find multiple webelements.

    }
})
