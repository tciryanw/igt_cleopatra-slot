const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const axios = require("axios").default
const fetch = require("node-fetch");

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.json': 'application/json'
};

console.log("<>");
console.log("<> This is only test app. Game results can be harvested in advance or at same time as player by running `node puppeteer.js` <>");
console.log("<> Balances, currencies and so on can be changed within index.js.<>");

var getFromBetween = {
    results:[],
    string:"",
    getFromBetween:function (sub1,sub2) {
        if(this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
        var SP = this.string.indexOf(sub1)+sub1.length;
        var string1 = this.string.substr(0,SP);
        var string2 = this.string.substr(SP);
        var TP = string1.length + string2.indexOf(sub2);
        return this.string.substring(SP,TP);
    },
    removeFromBetween:function (sub1,sub2) {
        if(this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
        var removal = sub1+this.getFromBetween(sub1,sub2)+sub2;
        this.string = this.string.replace(removal,"");
    },
    getAllResults:function (sub1,sub2) {
        // first check to see if we do have both substrings
        if(this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return;

        // find one result
        var result = this.getFromBetween(sub1,sub2);
        // push it to the results array
        this.results.push(result);
        // remove the most recently found one from the string
        this.removeFromBetween(sub1,sub2);

        // if there's more substrings
        if(this.string.indexOf(sub1) > -1 && this.string.indexOf(sub2) > -1) {
            this.getAllResults(sub1,sub2);
        }
        else return;
    },
    get:function (string,sub1,sub2) {
        this.results = [];
        this.string = string;
        this.getAllResults(sub1,sub2);
        return this.results;
    }
};

const server = http.createServer((req, res) => {
  let reqUrl = req.url;
  if (reqUrl.includes('currency;')) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const currencySettings = '{"RGSResponse":{"CURRENCIES":{"CURRENCY":{"@currencyCode":"FPY","MAJOR_SYMBOL":[],"MINOR_SYMBOL":[],"MAJOR_SYMBOL_ALIGNMENT":"left","MINOR_SYMBOL_ALIGNMENT":"right","MAJOR_SYMBOL_PADDING_SPACE":"false","MINOR_SYMBOL_PADDING_SPACE":"false","DECIMAL_SEPARATOR":".","THOUSANDS_SEPARATOR":",","DECIMAL_PRECISION":"2","USE_THOUSANDS_SEPARATOR":"no","MINOR_CURRENCY_LOCK":"no","CHIP_SET_CODE":"chipSet1","LOTTERY_DEFAULT_WINS_VALUE":"--"},"CHIP_SET_DEFINITIONS":{"CHIP_SET":{"@name":"chipSet1","CHIP":["0.1","0.5","1","5","25","100","500","1000","5000","10000"]}}}},"ExtraInfo":{}}';
    res.end(currencySettings, 'utf-8');
  }

  if(reqUrl.includes('gateway.html')) {
	var balance = 2000;
	const response = axios.get("https://platform.pa.rgsgames.com/skb/gateway?nscode=PENN&technology=HTML&softwareid=200-1173-001&countrycode=US&presenttype=STD&skincode=PN03&language=en&channel=INT&currencycode=FPY").then((response) => {
	var responseStr = response.data;
	var result = getFromBetween.get(responseStr,'IGTGSRID=','&#034');
	console.log(result);
      })
  }

   // run browserless.js to generate outcomes to latestgame.json (should be databazied etc)
  if(reqUrl.includes('play;')) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const filenameG = 'latestgame.json';
    let jsFileG = fs.readFileSync(process.cwd() + "/" + filenameG).toString();
    const authenticateMsg = '{"RGSResponse":'+jsFileG+',"ExtraInfo":{}}';
    // change balance etc etc here per player to whatever
    res.end(authenticateMsg, 'utf-8');
  }

  if (reqUrl.includes('register')) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const registerMessage = '{"errorId":"cd83b1f7-b729-4e12-9f73-980366389620","errors":[{"code":210,"message":"Failed schema validation","properties":[{"key":"secureToken","value":"/secureToken is required and cannot be empty"}]}]}';
    res.end(registerMessage, 'utf-8');
  }

  if (reqUrl.includes('paytable;')) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
	const initPaytable = '{"RGSResponse":{"PaytableResponse":{"PaytableStatistics":{"@description":"Cleopatra 20L 3x3x3x3x3","@maxRTP":"95.02","@maxSingleRTP":"95.02","@minRTP":"95.02","@minSingleRTP":"95.02","@name":"Cleopatra","@singleRTP":"true","@type":"Slot"},"AwardCapInfo":{"@name":"AwardCapInfo","TriggerInfo":{"@name":"AwardCapExceeded","@priority":"100","@stageConnector":"AwardCapToBaseGame"},"CurrencyCap":{"CurrencyType":"FPY","AwardCap":"25000000"}},"PrizeInfo":{"@name":"PrizeInfoLines","@strategy":"PayLeftAll","Prize":[{"@name":"s01","PrizePay":[{"@count":"5","@pph":"156651","@value":"750"},{"@count":"4","@pph":"16935","@value":"100"},{"@count":"3","@pph":"1113","@value":"25"},{"@count":"2","@pph":"125","@value":"2"}],"Symbol":[{"@id":"w01","@required":"false"},{"@id":"s01","@required":"false"}]},{"@name":"s02","PrizePay":[{"@count":"5","@pph":"156651","@value":"750"},{"@count":"4","@pph":"16935","@value":"100"},{"@count":"3","@pph":"1765","@value":"25"},{"@count":"2","@pph":"121","@value":"2"}],"Symbol":[{"@id":"w01","@required":"false"},{"@id":"s02","@required":"false"}]},{"@name":"s03","PrizePay":[{"@count":"5","@pph":"83025","@value":"400"},{"@count":"4","@pph":"11531","@value":"100"},{"@count":"3","@pph":"1154","@value":"15"}],"Symbol":[{"@id":"w01","@required":"false"},{"@id":"s03","@required":"false"}]},{"@name":"s04","PrizePay":[{"@count":"5","@pph":"62075","@value":"250"},{"@count":"4","@pph":"8870","@value":"75"},{"@count":"3","@pph":"1198","@value":"10"}],"Symbol":[{"@id":"w01","@required":"false"},{"@id":"s04","@required":"false"}]},{"@name":"s05","PrizePay":[{"@count":"5","@pph":"83025","@value":"250"},{"@count":"4","@pph":"11827","@value":"50"},{"@count":"3","@pph":"1154","@value":"10"}],"Symbol":[{"@id":"w01","@required":"false"},{"@id":"s05","@required":"false"}]},{"@name":"s06","PrizePay":[{"@count":"5","@pph":"41306","@value":"125"},{"@count":"4","@pph":"7299","@value":"50"},{"@count":"3","@pph":"1246","@value":"10"}],"Symbol":[{"@id":"w01","@required":"false"},{"@id":"s06","@required":"false"}]},{"@name":"s07","PrizePay":[{"@count":"5","@pph":"49567","@value":"100"},{"@count":"4","@pph":"6989","@value":"50"},{"@count":"3","@pph":"682","@value":"5"}],"Symbol":[{"@id":"w01","@required":"false"},{"@id":"s07","@required":"false"}]},{"@name":"s08","PrizePay":[{"@count":"5","@pph":"17136","@value":"100"},{"@count":"4","@pph":"2956","@value":"25"},{"@count":"3","@pph":"280","@value":"5"}],"Symbol":[{"@id":"w01","@required":"false"},{"@id":"s08","@required":"false"}]},{"@name":"s09","PrizePay":[{"@count":"5","@pph":"20576","@value":"100"},{"@count":"4","@pph":"3581","@value":"25"},{"@count":"3","@pph":"611","@value":"5"}],"Symbol":[{"@id":"w01","@required":"false"},{"@id":"s09","@required":"false"}]},{"@name":"s10","PrizePay":[{"@count":"5","@pph":"13215","@value":"100"},{"@count":"4","@pph":"2744","@value":"25"},{"@count":"3","@pph":"350","@value":"5"}],"Symbol":[{"@id":"w01","@required":"false"},{"@id":"s10","@required":"false"}]},{"@name":"s11","PrizePay":[{"@count":"5","@pph":"22066","@value":"100"},{"@count":"4","@pph":"4607","@value":"25"},{"@count":"3","@pph":"588","@value":"5"},{"@count":"2","@pph":"141","@value":"2"}],"Symbol":[{"@id":"w01","@required":"false"},{"@id":"s11","@required":"false"}]},{"@name":"w01","PrizePay":[{"@count":"5","@pph":"16605000","@value":"10000"},{"@count":"4","@pph":"851538","@value":"2000"},{"@count":"3","@pph":"39209","@value":"200"},{"@count":"2","@pph":"27000","@value":"10"}],"Symbol":{"@id":"w01","@required":"true"}}]},"PatternSliderInfo":{"PatternInfo":{"@max":"20","@min":"1","Step":["1","5","9","15","20"]},"BetInfo":{"@max":"1000","@min":"1","Step":["1","2","3","5","10","20","25","30","50","100","200","300","500","1000"]}},"StripInfo":[{"@name":"BaseGame","Strip":[{"@name":"Reel0","Stop":[{"@symbolID":"b01","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"w01","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"s02","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s01","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s05","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s04","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s01","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s03","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s05","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s03","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"s04","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s02","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s10","@weight":"1"}]},{"@name":"Reel1","Stop":[{"@symbolID":"s05","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s03","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s01","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"s02","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s01","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"b01","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"s04","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s02","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s05","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"s04","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"s03","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"w01","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s09","@weight":"1"}]},{"@name":"Reel2","Stop":[{"@symbolID":"s03","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"w01","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s03","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"s01","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s04","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s01","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s02","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s04","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s05","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"b01","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s05","@weight":"1"},{"@symbolID":"s10","@weight":"1"}]},{"@name":"Reel3","Stop":[{"@symbolID":"s04","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"s02","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"w01","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s05","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"s02","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"s01","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s04","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"s03","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s05","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s04","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"b01","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s03","@weight":"1"},{"@symbolID":"s09","@weight":"1"}]},{"@name":"Reel4","Stop":[{"@symbolID":"s02","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"w01","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s01","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s05","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"b01","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"s04","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"s04","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s05","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s03","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"w01","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"s02","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s05","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s03","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s04","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s01","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s03","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s09","@weight":"1"}]}]},{"@name":"FreeSpin","Strip":[{"@name":"Reel0","Stop":[{"@symbolID":"b01","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"w01","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"s02","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s01","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s05","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s04","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s01","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s03","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s05","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s03","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"s04","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s02","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s10","@weight":"1"}]},{"@name":"Reel1","Stop":[{"@symbolID":"s05","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s03","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s01","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"s02","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s01","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"b01","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"s04","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s02","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s05","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"s04","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"s03","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"w01","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s09","@weight":"1"}]},{"@name":"Reel2","Stop":[{"@symbolID":"s03","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"w01","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s03","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"s01","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s04","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s01","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s02","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s04","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s05","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"b01","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s05","@weight":"1"},{"@symbolID":"s10","@weight":"1"}]},{"@name":"Reel3","Stop":[{"@symbolID":"s04","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"s02","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"w01","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s05","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"s02","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"s01","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s04","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"s03","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s05","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s04","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"b01","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s03","@weight":"1"},{"@symbolID":"s09","@weight":"1"}]},{"@name":"Reel4","Stop":[{"@symbolID":"s02","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"w01","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s01","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s05","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"b01","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"s04","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"s04","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s05","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s03","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"w01","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"s02","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s07","@weight":"1"},{"@symbolID":"s05","@weight":"1"},{"@symbolID":"s09","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s03","@weight":"1"},{"@symbolID":"s08","@weight":"1"},{"@symbolID":"s04","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s01","@weight":"1"},{"@symbolID":"s06","@weight":"1"},{"@symbolID":"s11","@weight":"1"},{"@symbolID":"s03","@weight":"1"},{"@symbolID":"s10","@weight":"1"},{"@symbolID":"s09","@weight":"1"}]}]}],"StepInfo":{"@name":"AutoSpin","Step":["10","25","50","100","250"]},"MaxFreeSpins":" 180  ","DenominationList":{"Denomination":{"@softwareId":"200-1173-001","#text":"1.0"}},"GameBetInfo":{"MinChipValue":"1.0","MinBet":"1.0","MaxBet":"100.0"},"AutoSpinInfo":{"@enable":"True","Step":["10","20","30","40","50"]},"VersionInfo":{"GameLogicVersion":"6.0"}}},"ExtraInfo":{}}';
        res.end(initPaytable, 'utf-8');
  }

  if (reqUrl.includes('initstate;')) {
	res.writeHead(200, { 'Content-Type': 'application/json' });
	const initState = '{"RGSResponse":{"GameLogicResponse":{"OutcomeDetail":{"TransactionId":"A2180-16769895782354","Stage":"BaseGame","NextStage":"BaseGame","Balance":"1000.00","GameStatus":"Initial","Settled":"0","Pending":"0","Payout":"0"},"PopulationOutcome":[{"@name":"BaseGame.Reels","@stage":"BaseGame","Entry":[{"@name":"Reel0","@stripIndex":"0","Cell":[{"@name":"L0C0R0","@stripIndex":"0","#text":"b01"},{"@name":"L0C0R1","@stripIndex":"1","#text":"s08"},{"@name":"L0C0R2","@stripIndex":"2","#text":"s09"}]},{"@name":"Reel1","@stripIndex":"3","Cell":[{"@name":"L0C1R0","@stripIndex":"3","#text":"s03"},{"@name":"L0C1R1","@stripIndex":"4","#text":"s07"},{"@name":"L0C1R2","@stripIndex":"5","#text":"s01"}]},{"@name":"Reel2","@stripIndex":"3","Cell":[{"@name":"L0C2R0","@stripIndex":"3","#text":"w01"},{"@name":"L0C2R1","@stripIndex":"4","#text":"s08"},{"@name":"L0C2R2","@stripIndex":"5","#text":"s10"}]},{"@name":"Reel3","@stripIndex":"2","Cell":[{"@name":"L0C3R0","@stripIndex":"2","#text":"s06"},{"@name":"L0C3R1","@stripIndex":"3","#text":"s02"},{"@name":"L0C3R2","@stripIndex":"4","#text":"s11"}]},{"@name":"Reel4","@stripIndex":"17","Cell":[{"@name":"L0C4R0","@stripIndex":"17","#text":"s04"},{"@name":"L0C4R1","@stripIndex":"18","#text":"s10"},{"@name":"L0C4R2","@stripIndex":"19","#text":"s05"}]}]},{"@name":"FreeSpin.Reels","@stage":"FreeSpin","Entry":[{"@name":"Reel0","@stripIndex":"0","Cell":[{"@name":"L0C0R0","@stripIndex":"0","#text":"b01"},{"@name":"L0C0R1","@stripIndex":"1","#text":"s08"},{"@name":"L0C0R2","@stripIndex":"2","#text":"s09"}]},{"@name":"Reel1","@stripIndex":"3","Cell":[{"@name":"L0C1R0","@stripIndex":"3","#text":"s03"},{"@name":"L0C1R1","@stripIndex":"4","#text":"s07"},{"@name":"L0C1R2","@stripIndex":"5","#text":"s01"}]},{"@name":"Reel2","@stripIndex":"3","Cell":[{"@name":"L0C2R0","@stripIndex":"3","#text":"w01"},{"@name":"L0C2R1","@stripIndex":"4","#text":"s08"},{"@name":"L0C2R2","@stripIndex":"5","#text":"s10"}]},{"@name":"Reel3","@stripIndex":"2","Cell":[{"@name":"L0C3R0","@stripIndex":"2","#text":"s06"},{"@name":"L0C3R1","@stripIndex":"3","#text":"s02"},{"@name":"L0C3R2","@stripIndex":"4","#text":"s11"}]},{"@name":"Reel4","@stripIndex":"17","Cell":[{"@name":"L0C4R0","@stripIndex":"17","#text":"s04"},{"@name":"L0C4R1","@stripIndex":"18","#text":"s10"},{"@name":"L0C4R2","@stripIndex":"19","#text":"s05"}]}]}],"PatternSliderInput":{"BetPerPattern":"1","PatternsBet":"20"},"Balances":{"@totalBalance":"1000.00","Balance":{"@name":"FREE","#text":"1000.00"}}}},"ExtraInfo":{}}';
	res.end(initState, 'utf-8');
  }

  if (reqUrl.includes('authenticate;')) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const authenticateMsg = '{"RGSResponse":{"Authentication":{"Status":"Success","gsInfo":{"playerInfo":{"nickname":null}}}},"ExtraInfo":{}}';
    res.end(authenticateMsg, 'utf-8');

    // replace ';' with '%3B' to avoid decoding it as a path separator
    reqUrl = reqUrl.replace(';', '%3B');
  }

  const parsedUrl = url.parse(reqUrl, true);
  let filePath = './statics/' + decodeURIComponent(parsedUrl.pathname);
  if (filePath === './') {
    filePath = './index.html';
  }

  const extname = path.extname(filePath);
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.stat(filePath, (error, stats) => {
    if (error) {
      res.writeHead(404);
      res.end('404 Not Found');
    } else if (stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');

      fs.stat(filePath, (error, stats) => {
        if (error) {
          res.writeHead(404);
          res.end('404 Not Found');
        } else {
          res.writeHead(200, { 'Content-Type': contentType });
          fs.createReadStream(filePath).pipe(res);
        }
      });
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      const query = parsedUrl.query;
//      if (extname === '.json') {
//        fs.readFile(filePath, (error, content) => {
//          if (error) {
//            res.writeHead(500);
//            res.end('500 Internal Server Error');
//          } else {
//            const data = JSON.parse(content);
//            const filteredData = filterJsonData(data, query);
//            res.end(JSON.stringify(filteredData), 'utf-8');
//          }
//        });
//      } else {
        fs.createReadStream(filePath).pipe(res);
//      }
    }
  });
});

function filterJsonData(data, query) {
  const filteredData = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    let shouldInclude = true;
    for (let key in query) {
      if (item[key] !== query[key]) {
        shouldInclude = false;
        break;
      }
    }
    if (shouldInclude) {
      filteredData.push(item);
    }
  }
  return filteredData;
}

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
