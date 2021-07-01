import { Router } from 'https://deno.land/x/oak/mod.ts'

const router = new Router()

router
    .get('/', function getAll (ctx) { return ctx.response.body = 'Got all users' })
    .get('/:id', function getOne (ctx) { return ctx.response.body = 'Got the user:' })
    .post('/', function createOne (ctx) { return ctx.response.body = 'Create a user'  })
    .put('/:id', function updateOne (ctx) { return ctx.response.body = 'Update an user'  })
    .delete('/:id', function deleteOne (ctx) { return ctx.response.body = 'Delete an users' })
    .delete('/', function deleteAll (ctx) { return ctx.response.body = 'Database cleared!'  })

export {
    router
}