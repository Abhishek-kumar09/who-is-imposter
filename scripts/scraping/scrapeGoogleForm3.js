const puppeteer = require('puppeteer');


async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url); 
    
    const titleData = await page.evaluate( () => {
        const title = document.querySelector(".freebirdFormviewerViewHeaderTitleRow").innerText
        return title;
    })

    const fields = await page.evaluate( () => {
        const formTag = document.querySelector("form").innerText;
        return formTag;

    })

    
   
    await browser.close();

    console.log(titleData, '\n');
    console.log(fields);

    //return data;

}

scrapeProduct('https://docs.google.com/forms/d/e/1FAIpQLSfv7eR5oZ-4YJ3Nwb_e4iUCuZRyrJCF7kNYqlPC6bQA-HtlhQ/viewform');