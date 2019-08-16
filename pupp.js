#!/usr/bin/env node

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
//  await page.goto('https://www.scrapehero.com/');
  await page.goto('https://www.scoota.asia/#news');
  /*
  await page.setViewport({
     width: 1200,
     height: 8000
 });*/

// await autoScroll(page);

  await page.screenshot({
    path: 'example.jpeg',
    type: 'jpeg',
    fullPage:true,
    omitBackground:true
  });
  //await page.pdf({path: 'hn.pdf', format: 'A4'});
  await browser.close();
})();

async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 1000);
        });
    });
}
