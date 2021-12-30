import { rest } from 'msw'

export const handlers = [
    rest.get('/login', async(req, res, ctx) => {
        return res(
            ctx.json({
                id: '235235-c32-4234-235235',
                firstName: 'john',
                lastName: 'Maverick',
            })
        )
    }),
    rest.get('https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json', async(req, res,ctx) => {
        const originalResponse = await ctx.fetch(req)
        const originalResponseData = await originalResponse.json()
        return res(
            // ctx.json({
            //     "data": {
            //         "people" :
            //         [
            //             ...originalResponseData.data.people,
            //             {
            //                 "name": "jimeeemy",
            //                 "age": 135
            //             },                       
            //         ]
            //     }
            // })
            ctx.status(403),
            ctx.json({
                errorMessage: 'Data not found',
            })
        )
    })
]