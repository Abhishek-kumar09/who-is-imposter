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
    const numberOfFields = await page.evaluate( () => {
        const num = (String(document.querySelector("form > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList")).length) - 3
        return num;
    })
   
    const field1 = await page.evaluate( () => {
        const label1 = String(document.querySelector("form > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(1)").innerText)
        const len = label1.length;
        return label1.substring(0, (len - 11));
    }) 

    await browser.close();


    console.log('\n');
    console.log("Title: ", titleData, '\n');
    console.log("Number of Fields: ", numberOfFields, '\n');
    console.log("Field-1: ", field1, '\n');
    
    /*for(var i = 1; i <= numberOfFields; i++){
        var field = await page.evaluate( () => {
            var arg = "form > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(" + String(i) +")"
            var label = document.querySelector(arg).innerText
            return label;
        })
        await browser.close();
        console.log(field, '\n');
    }*/
    
    
}

scrapeProduct('https://docs.google.com/forms/d/e/1FAIpQLSfv7eR5oZ-4YJ3Nwb_e4iUCuZRyrJCF7kNYqlPC6bQA-HtlhQ/viewform');