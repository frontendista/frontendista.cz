import { z } from "zod";

export const SANITY_URL_SCHEMA = z.string().transform((url) => url + "?auto=format");
