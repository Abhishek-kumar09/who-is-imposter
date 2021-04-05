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

    console.log(title, '\n' , description, '\n', '\n');

const fieldsXpaths = [];


//const numberOfFields =  $(".freebirdFormviewerViewCenteredContent").attr("data-last-entry");
//const numberOfFields = await page.$x('//*[@id="mG61Hd"]/@data-last-entry')
const numberOfFields = await page.$x('//form[@id="mG61Hd"]/@data-last-entry')


console.log(numberOfFields, '\n')

for(let i = 0; i < numberOfFields; i++){  //19 is the number of fields in this form
    fieldNumber = (i + 1)
    fieldsXpaths[i] = '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[' + String(i + 1) +']/div/div' ;
}
for(let i = 0; i < numberOfFields; i++){
    fieldNumber = (i + 1);
    //varName = "el" + String(fieldNumber)
    txtName = "txt" + String(fieldNumber)
    fieldName = "field" + String(fieldNumber)
    try{
    const [field] = await page.$x(fieldsXpaths[i]);
    txtName = await field.getProperty('textContent');
    fieldName = await txtName.jsonValue();
    }
    catch(err){
        //console.log(err.message);
    }
    finally{
        console.log(fieldName);
        console.log("\n")
    }
    
}

browser.close();

    /*const [el4] = await page.$x('//*[@id="mG61Hd"]');  //xpath for form-fields
    const txt4 = await el4.getProperty('textContent');
    const fields = await txt4.jsonValue();



    console.log({title, description});  */

    
    

}

scrapeProduct('https://docs.google.com/forms/d/e/1FAIpQLSfv7eR5oZ-4YJ3Nwb_e4iUCuZRyrJCF7kNYqlPC6bQA-HtlhQ/viewform');
  