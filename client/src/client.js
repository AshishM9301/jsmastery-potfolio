import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID || "u6yjdtxu",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    process.env.REACT_APP_SANITY_TOKEN ||
    "skt7kaPdcMz2fkOAEgQ8LAPfLAoq9lqTRDCs09ojGaK38XBShSAxJRPpAJoVxLiRU2XWV2nBE1nkVEEmWUWis0DGBFFfVr7an0W791Kp38KctCANfB1RiONg8wdAnxd8kX8dXm70oHJMVgr0zgfj0FM7VLKUvKLQ98S4W9Lq0DiGdW7pwa23",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
