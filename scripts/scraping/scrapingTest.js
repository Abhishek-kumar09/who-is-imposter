const puppeteer = require('puppeteer');

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url); 

    const [el] = await page.$x('//*[@id="landingImage"]');  //xpath for image
    const src = await el.getProperty('src');
    const imgUrl = await  src.jsonValue();

    const [el2] = await page.$x('//*[@id="title"]');  //xpath for title
    const txt = await el2.getProperty('textContent');
    const title = await txt.jsonValue();

    const [el3] = await page.$x('//*[@id="priceblock_saleprice"]');  //xpath for price
    const txt2 = await el3.getProperty('textContent');
    const price = await txt2.jsonValue();


    console.log({imgUrl, title, price});

    browser.close();
}

scrapeProduct('https://www.amazon.in/Indibni-Holding-Someone-Boyfriend-Girlfriend/dp/B01AL1C1RC/?_encoding=UTF8&pd_rd_w=jvdVv&pf_rd_p=8e62c685-5e5c-4f3b-b22d-23b584747f16&pf_rd_r=N0RSXVMDYT0AR36QYQE6&pd_rd_r=28280ab8-a332-48c2-9d70-edb533ad1e66&pd_rd_wg=3xGha&ref_=pd_gw_crs_wish');
  