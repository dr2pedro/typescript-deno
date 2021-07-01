import { Application } from "https://deno.land/x/oak/mod.ts"
import { organ as Morgan} from "https://raw.githubusercontent.com/denjucks/organ/master/mod.ts"
import { Snelm as Helmet } from "https://deno.land/x/snelm/mod.ts";
import { oakCors as Cors } from "https://deno.land/x/cors/mod.ts"
import { router } from "./src/routes.ts";
const app = new Application()



app.use(router.routes())

export {
    app
}
