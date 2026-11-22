const { expectFailure } = require("node:test");

//hard Assertion use 
await expect (page).toHaveTitle('STORE')
await expect (page).toHaveURL('https://www.demoblaze.com')
await expect(page).toLocator(ccs).toBeVisible();
 //SoftAssertion
 await expect.soft (page).toHaveTitle('STORE')
await expect.soft (page).toHaveURL('https://www.demoblaze.com')
await expect.soft (page).toLocator(ccs).toBeVisible();
//Hard asserion soft assertion difference if hard assertion got failed remaining
//two assertion not execute but softassertion if failed 1st one remaining got passed.

