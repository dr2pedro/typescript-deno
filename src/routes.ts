import { Router } from "https://deno.land/x/oak/mod.ts"

const router = new Router()

router.get('/', "Primeira rota on.")

export {
    router
}