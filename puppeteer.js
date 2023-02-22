const puppeteer = require('puppeteer'); // v13.0.0 or later
const request_client = require('request-promise-native');
const fs = require('fs');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
        const result = [];
        await page.setRequestInterception(true);


    page.on('console', async msg => {
      const args = msg.args();
      const vals = [];
      for (let i = 0; i < args.length; i++) {
        vals.push(await args[i].jsonValue());
      }
	var final_value = vals.map(v => typeof v === 'object' ? JSON.stringify(v, null, 2) : v).join('\t');
	console.log(final_value);
	if(final_value.includes("GameLogicResponse")) {
		fs.writeFileSync("latestgame.json", final_value);
	}
    });

  page.on('request', request => {
	var can_continue = 'yes';

    if(request.url().includes('clientservice.js')) {
        can_continue = 'no';
        let filenameG = "inject/clientservice.js";
        let jsFileG = fs.readFileSync(process.cwd() + "/" + filenameG).toString()
        request.respond({
            status: 200,
            contentType: 'application/javascript; charset=utf-8',
            body: jsFileG
        });
    }

    if(request.url().includes('igt_console_comm.js')) {
	can_continue = 'no';
	let filename = "inject/comms.js";
	let jsFile = fs.readFileSync(process.cwd() + "/" + filename).toString()
        request.respond({
            status: 200,
            contentType: 'application/javascript; charset=utf-8',
            body: jsFile
        });
    }
    if(can_continue == 'yes') {
	  request.continue();
    }
});

		const timeout = 5000;
		page.setDefaultTimeout(timeout);
	{
		const targetPage = page;
		await targetPage.setViewport({
			width: 1486,
			height: 1001
		})
	}
	{
		const timeout = 7000;
		const targetPage = page;
		const promises = [];
		promises.push(targetPage.waitForNavigation());
		await targetPage.goto('https://platform.pa.rgsgames.com/skb/gateway?nscode=PENN&technology=HTML&softwareid=200-1173-001&countrycode=US&presenttype=STD&skincode=PN03&language=en&channel=INT&currencycode=FPY');
		await page.waitForTimeout(7000);
		await Promise.all(promises);
	}

	    const readLoop = async () => {
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  offset: {
		    x: 734,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  offset: {
		    x: 734,
		    y: 782.5,
		  },
		});
	}
	
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  clickCount: 2,
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  clickCount: 2,
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  clickCount: 2,
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  clickCount: 2,
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  clickCount: 2,
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  clickCount: 2,
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  clickCount: 2,
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  clickCount: 2,
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  clickCount: 2,
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  clickCount: 2,
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  clickCount: 2,
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  clickCount: 2,
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  clickCount: 2,
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  clickCount: 2,
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  clickCount: 2,
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  clickCount: 2,
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  clickCount: 2,
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  clickCount: 2,
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  clickCount: 2,
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  clickCount: 2,
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  offset: {
		    x: 733,
		    y: 782.5,
		  },
		});
	}
	{
		const targetPage = page;
		let frame = targetPage.mainFrame();
		frame = frame.childFrames()[4];
		await scrollIntoViewIfNeeded([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, timeout);
		const element = await waitForSelectors([
			[
				'#game > canvas'
			],
			[
				'xpath///*[@id="game"]/canvas'
			]
		], frame, { timeout, visible: true });
		await element.click({
		  offset: {
		    x: 722,
		    y: 806.5,
		  },
		});
	}
        return readLoop(); // run the loop again
	}
	await readLoop();

	await browser.close();

	async function waitForSelectors(selectors, frame, options) {
	  for (const selector of selectors) {
	    try {
	      return await waitForSelector(selector, frame, options);
	    } catch (err) {
	      console.error(err);
	    }
	  }
	  throw new Error('Could not find element for selectors: ' + JSON.stringify(selectors));
	}

	async function scrollIntoViewIfNeeded(selectors, frame, timeout) {
	  const element = await waitForSelectors(selectors, frame, { visible: false, timeout });
	  if (!element) {
	    throw new Error(
	      'The element could not be found.'
	    );
	  }
	  await waitForConnected(element, timeout);
	  const isInViewport = await element.isIntersectingViewport({threshold: 0});
	  if (isInViewport) {
	    return;
	  }
	  await element.evaluate(element => {
	    element.scrollIntoView({
	      block: 'center',
	      inline: 'center',
	      behavior: 'auto',
	    });
	  });
	  await waitForInViewport(element, timeout);
	}

	async function waitForConnected(element, timeout) {
	  await waitForFunction(async () => {
	    return await element.getProperty('isConnected');
	  }, timeout);
	}

	async function waitForInViewport(element, timeout) {
	  await waitForFunction(async () => {
	    return await element.isIntersectingViewport({threshold: 0});
	  }, timeout);
	}

	async function waitForSelector(selector, frame, options) {
	  if (!Array.isArray(selector)) {
	    selector = [selector];
	  }
	  if (!selector.length) {
	    throw new Error('Empty selector provided to waitForSelector');
	  }
	  let element = null;
	  for (let i = 0; i < selector.length; i++) {
	    const part = selector[i];
	    if (element) {
	      element = await element.waitForSelector(part, options);
	    } else {
	      element = await frame.waitForSelector(part, options);
	    }
	    if (!element) {
	      throw new Error('Could not find element: ' + selector.join('>>'));
	    }
	    if (i < selector.length - 1) {
	      element = (await element.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
	    }
	  }
	  if (!element) {
	    throw new Error('Could not find element: ' + selector.join('|'));
	  }
	  return element;
	}

	async function waitForElement(step, frame, timeout) {
	  const count = step.count || 1;
	  const operator = step.operator || '>=';
	  const comp = {
	    '==': (a, b) => a === b,
	    '>=': (a, b) => a >= b,
	    '<=': (a, b) => a <= b,
	  };
	  const compFn = comp[operator];
	  await waitForFunction(async () => {
	    const elements = await querySelectorsAll(step.selectors, frame);
	    return compFn(elements.length, count);
	  }, timeout);
	}

	async function querySelectorsAll(selectors, frame) {
	  for (const selector of selectors) {
	    const result = await querySelectorAll(selector, frame);
	    if (result.length) {
	      return result;
	    }
	  }
	  return [];
	}

	async function querySelectorAll(selector, frame) {
	  if (!Array.isArray(selector)) {
	    selector = [selector];
	  }
	  if (!selector.length) {
	    throw new Error('Empty selector provided to querySelectorAll');
	  }
	  let elements = [];
	  for (let i = 0; i < selector.length; i++) {
	    const part = selector[i];
	    if (i === 0) {
	      elements = await frame.$$(part);
	    } else {
	      const tmpElements = elements;
	      elements = [];
	      for (const el of tmpElements) {
	        elements.push(...(await el.$$(part)));
	      }
	    }
	    if (elements.length === 0) {
	      return [];
	    }
	    if (i < selector.length - 1) {
	      const tmpElements = [];
	      for (const el of elements) {
	        const newEl = (await el.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
	        if (newEl) {
	          tmpElements.push(newEl);
	        }
	      }
	      elements = tmpElements;
	    }
	  }
	  return elements;
	}

	async function waitForFunction(fn, timeout) {
	  let isActive = true;
	  const timeoutId = setTimeout(() => {
	    isActive = false;
	  }, timeout);
	  while (isActive) {
	    const result = await fn();
	    if (result) {
	      clearTimeout(timeoutId);
	      return;
	    }
	    await new Promise(resolve => setTimeout(resolve, 100));
	  }
	  throw new Error('Timed out');
	}

	async function changeSelectElement(element, value) {
	  await element.select(value);
	  await element.evaluateHandle((e) => {
	    e.blur();
	    e.focus();
	  });
	}

	async function changeElementValue(element, value) {
	  await element.focus();
	  await element.evaluate((input, value) => {
	    input.value = value;
	    input.dispatchEvent(new Event('input', { bubbles: true }));
	    input.dispatchEvent(new Event('change', { bubbles: true }));
	  }, value);
	}

	async function typeIntoElement(element, value) {
	  const textToType = await element.evaluate((input, newValue) => {
	    if (
	      newValue.length <= input.value.length ||
	      !newValue.startsWith(input.value)
	    ) {
	      input.value = '';
	      return newValue;
	    }
	    const originalValue = input.value;
	    input.value = '';
	    input.value = originalValue;
	    return newValue.substring(originalValue.length);
	  }, value);
	  await element.type(textToType);
	}
})().catch(err => {
	console.error(err);
	process.exit(1);
});
