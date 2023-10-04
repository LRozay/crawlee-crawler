// For more information, see https://crawlee.dev/
import { PlaywrightCrawler, ProxyConfiguration } from 'crawlee';
import { router } from './routes.js';

const startUrls = ['https://www.jpl.nasa.gov/edu/intern/apply/'];

const crawler = new PlaywrightCrawler({
    // proxyConfiguration: new ProxyConfiguration({ proxyUrls: ['...'] }),
    maxRequestsPerCrawl: 5,
    requestHandler: router,
});

await crawler.run(startUrls);
