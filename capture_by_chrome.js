const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    console.log('file://' + __dirname + '/a4_page.html');
    await page.goto('file://' + __dirname + '/a4_page.html');
    await page.pdf({path: 'output_a4_page_chrome.pdf', format: 'A4'});
    await browser.close();
})();