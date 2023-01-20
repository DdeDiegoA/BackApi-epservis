import ExpressExpeditious from "express-expeditious";

/* Setting the default options for the cache. */
const defaultOptions = {
    namespace: "expresscache",
    defaultTtl: "1 minute", //? 60*1000
    statusCodeExpires: {
        404: "5 minutes",
        500: 0, // ? 1 minute in milliseconds
    },
};
/* Creating a cache object. */
export const cacheInit = ExpressExpeditious(defaultOptions);
