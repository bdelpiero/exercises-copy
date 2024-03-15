/* ===== Enrich the data ====== */

// Master Data
const companiesMasterData = {
  "1": { companyName: "Apple Computer Inc.", ticker: "AAPL" },
  "2": { companyName: "Microsoft Corp.", ticker: "MSFT" },
  "3": { companyName: "Tesla Motors Company", ticker: "TSLA" },
};

// Data to enrich
const requestData = [{ companyId: "1", starred: true }, {companyId: "2", starred: false }, {companyId: "3", starred: true }];

function enrichData(data, companies) {
  // TODO: enrich data with companies

}
// Expected result: [{ companyId: "1", companyName: "Apple Computer Inc.", ticker: "AAPL", starred: true }, ...]

module.exports = { companiesMasterData, requestData, enrichData }; 