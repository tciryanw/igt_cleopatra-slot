### IGT slotmachine
Module to harvest slotmachine results for review or for david wainwright-like practices and cheat players & providers.
Currently just includes the  "Cleopatra" slotmachine but you can download any static files on IGT.com/1x2.network/stanleybet/hollywoodcasino.com slotmachine, as no game file edits are needed

![alt_box](https://raw.githubusercontent.com/tciryanw/igt_cleopatra-slot/main/git_img/preview.png)

## 2 components
First component is the static serv (can be replaced by nginx or whateer probably)

Second component is puppeteer script that harvest results and save to latestgame.json.

Cause it is just test version (and wanted to test out ChatGPT) it works as following:
- player presses spin
- instead of from real game, it retrieves data locally from latestgame.json
- serves the result to player

This way you can change any data you want, balance/gamedata and so on. 

![alt_box](https://raw.githubusercontent.com/tciryanw/igt_cleopatra-slot/main/git_img/puppet.png)

## Config
Make sure you have chrome downloaded and meet dependencies to run Puppeteer from node, if not see puppeteer tech.

It currently is being served on static server on :3000 on host "localhost", to replace localhost:3000 to your own domain/ports run replace&find "localhost:3000" within the statics/* folder and set to your own host.

You can change currency settings in index.js. 

Start by running `node index.js` for webserver, to keep getting game results automatically written to latestgame.json run `node puppeteer.js`

## No updates
See [ryan-west.vercel.app](ryan-west.vercel.app) for my portfolio as looking for job within the U.k. very soon on casino related stuff.

This get's no updates as is becoming pretty same stuff over and over and changes within these defrauding slots are becoming more apparant and messy with the day.



## You can check other reveals before on 'ryan-west-casino' regarding David Wainwright & his scam

