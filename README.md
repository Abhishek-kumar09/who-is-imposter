# who-is-imposter

The world is flooding with data and information. Everyone has become 'content creators'. People don't think twice before sharing or publishing something. Quite a small fraction of us care about the authenticity and ethics of data and information. Even the data consumers often get into the trap of unethical or inauthentic information that is poured upon us. We even lack time to cross-check every site we visit or every post we see. With the relevance to the current scenario of *"Data data everywhere, not a drop to trust!* we came forward with this project!

The project is an effort in the direction of coping with the very important issue of **authenticity and security** for the users.

We share a lot of data with the world and keeping the log of it is impossible, but who is imposter is here to help. It keeps log of all the data, breaches, shared information with various websites and if future there is data breach, you have the data set to find out the imposters among hundreds.

Additionally, it is a **Chrome Extension** that helps you check the issues you might face on a site based on the cookies the site uses. We implemented a **Fake News Detector for Twitter posts**. This would blur out a tweet whose *"fakeness-probability"* is more than **0.9 or 90%**. But would give you an option to deblur it in case you wish to see what these creepy imposters are up to, Haha! We also implemented a **"Form/Input scraper"** in order to scrape the labels of a Google form and judge the safety of it, however, a lot of it becomes pretty obvious! Like if some form is asking for your credit card details, our crawlers would cross-check it, etc. We also included a posting feature in the prototype in which people can come up and post their views on a site and others can decide if they wanna use it or how much do they wanna use it. This feature is a little glitchy for some reason but on it!

Your data can be categorised into 3 categories:

**Most secure data**: Credit, Debit cards etc

**Scamming purpose data**: Mobile Number where you can get potential spam calls if you expose it to someone.

**Normal Data**: Your email adresses, etc. It keeps a minimal record of everydata you give to the websites and categorise those data as according.

## Build Setup

```bash
# install dependencies
npm install

# development run
npm run start

# build for production
npm run build
```

## Design

- Home : https://www.figma.com/file/QQgKJkUVNRV1Y0VGkH6RLt/who-is-imposter?node-id=0%3A1

## Project Structure

    .
    ├── build                   # Compiled files
    ├── src                     # Source files
    └── ...

## Src Structure

    .
    ├── ...
    ├── src
    │   ├── ...
    │   ├── assets              # assets for the website
    |   ├── index.js            # starting point
    │   └── ...
    └── ...

## Contributions and PR
- PRs and contributions are welcome if you find any bug
- Feel free to create your own issues and work on existing issues and come up with PR

## How to use this extension?

- Fork this repository
- Clone it for local use
- Click on the extensions icon on the top-right corner of your chrome window and click on 'Manage Extensions'
- Turn on the developer mode from the top-right button on the page
- Then click on the 'Load Unpacked' button and choose the directory where you cloned this repo from your forked repo
- You will see the extension with our logo appear up, it can be used now
- You may pin it in order to click on it and see a quick view of the extension

![imposter](https://user-images.githubusercontent.com/64865136/114415040-f6222a80-9bcc-11eb-89cb-7ea49e3d76de.jpg)


**Note** - *If you want to make changes and see the changes work, don't forget to 'update' the extension from the 'Manage extensions' tab*
