import express from 'express'
import { PrismaClient } from '@prisma/client'
import Basic from './functions/basic.js'

const prisma = new PrismaClient()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.post('/insert/:what', async (req, res) => {
    let insertt = new Basic()
    insertt.putt(req.params.what, req.body)
    console.log("Done")
    res.send("resp")
})
app.get("/fetch/:what", async (req, res) => {
    let getData = new Basic()
    let resp = await getData.gett(req.params.what, req.body)
    console.log(req.params.what)
    res.send(resp)

})
app.listen(8001, () => {
    console.log("Server Running")
})