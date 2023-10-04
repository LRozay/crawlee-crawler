import { PlaywrightCrawler, Dataset } from "crawlee";

const crawler = new PlaywrightCrawler({
    async requestHandler({request, page, enqueueLinks, log}){
        const title = await page.title();
        log.info(`Title of ${request.loadedUrl} is '${title}'`);

        await Dataset.pushData({title, url: request.loadedUrl});

        await enqueueLinks();
    },

});

await crawler.run(['https://www.wagslane.dev'])