import { createClient } from "microcms-js-sdk";
export const client = createClient({
  serviceDomain: "yutaro-kashiwa",
  apiKey: process.env.API_KEY || "",
});
