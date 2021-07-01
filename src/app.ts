import { Application as OakApp } from "https://deno.land/x/oak/mod.ts"
import { Organ as Morgan } from "https://deno.land/x/organ@1.1.1/mod.ts"
import { Snelm as Helmet } from "https://deno.land/x/snelm/mod.ts";
import { oakCors as Cors } from "https://deno.land/x/cors/mod.ts"
import { router } from "./routes.ts";

const app = new OakApp()
const helmet = new Helmet("oak");


app
    /** set up the helmet's headers */
    .use((ctx, next) => {
        ctx.response = helmet.snelm(ctx.request, ctx.response);
        next();
    })
    /** set up the log layout */
    .use(async (ctx, next) => { 
        await next();
        Morgan.log(`\n:date[web]\n:method\n:url\nHTTP=:status\n`, ctx.request, ctx.response)
    })
    /** enable cors for all routes */
    .use(Cors())
    .use(router.routes())

export {
    app
}
