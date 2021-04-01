const puppeteer = require('puppeteer');

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url); 

    const [el1] = await page.$x('//*[@id="mG61Hd"]/div[2]/div/div[1]/div/div[2]/div');  //xpath for title of the form
    const txt1 = await el1.getProperty('textContent');
    const title = await txt1.jsonValue();

    const [el2] = await page.$x('//*[@id="mG61Hd"]/div[2]/div/div[1]/div/div[3]');  //xpath for description
    const txt2 = await el2.getProperty('textContent');
    const description = await txt2.jsonValue();

    const [el3] = await page.$x('//*[@id="mG61Hd"]/div[2]/div/div[2]/div[1]/div/div');  //xpath for field1
    const txt3 = await el3.getProperty('textContent');
    const field1 = await txt3.jsonValue();




    const [el4] = await page.$x('//*[@id="mG61Hd"]');  //xpath for form-fields
    const txt4 = await el4.getProperty('textContent');
    const fields = await txt4.jsonValue();



    console.log({title, description, field1, fields});  

    browser.close();
}

scrapeProduct('https://docs.google.com/forms/d/e/1FAIpQLSfv7eR5oZ-4YJ3Nwb_e4iUCuZRyrJCF7kNYqlPC6bQA-HtlhQ/viewform');
  