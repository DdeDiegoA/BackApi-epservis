import ExpressExpeditious from "express-expeditious";

const defaultOptions = {
    namespace: "expresscache",
    defaultTtl: "1 minute", //? 60*1000
    statusCodeExpires: {
        404: "5 minutes",
        500: 0, // ? 1 minute in milliseconds
    },
};
export const cacheInit = ExpressExpeditious(defaultOptions);
