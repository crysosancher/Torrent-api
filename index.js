const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const { mainModule } = require("process");
const TorrentIndexer = require("torrent-indexer");
async function main() {
	// const torrentIndexer = new TorrentIndexer();

	// const torrents = await torrentIndexer.search("rick and morty s04e04");

	// console.log(results);
	// console.log(typeof results);
	app.get('/', async(req, res) => {
		const torrentIndexer = new TorrentIndexer();

		const torrents = await torrentIndexer.search("rick and morty s04e04");

		console.log(results);
		console.log(typeof results);

		res.json(results)
	})

	app.listen(port, () => {
		console.log(`Example app listening at http://localhost:${port}`)
	})
}
main();
