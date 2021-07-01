import { app } from "./src/app.ts";
import "https://deno.land/x/dotenv/load.ts"

const port = Deno.env.get("PORT") ?? 8000,
      host = Deno.env.get("HOST") ?? 'localhost'

await app.listen(`${host}:${port}`)