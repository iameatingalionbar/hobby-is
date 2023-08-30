const puppeteer = require('puppeteer');

// Function to scrape the webpage and extract data
async function scrapeWebpage() {
    const browser = await puppeteer.launch({ headless: true, timeout: 60000 }); // Increase the timeout to 60 seconds
    const page = await browser.newPage();

  await page.goto('https://www.bestadeildin.is/');

  // Extract the required data from the webpage
  const data = await page.evaluate(() => {
    // Find the element containing the data
    const element = document.querySelector('.next-matches');

    // Extract the necessary data from the element
    const data = element.innerText;

    return data;
  });

  // Save the data to a file
  const fs = require('fs');
  fs.writeFileSync('index.html', data, 'utf8');

  await browser.close();
}

// Call the function to scrape the webpage
scrapeWebpage();
