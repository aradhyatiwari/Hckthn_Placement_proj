import express from 'express'
import { PrismaClient } from '@prisma/client'
import Basic from './functions/basic.js'

const prisma = new PrismaClient()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/insert/:into', (req, res) => {
    let insertt = new Basic()
    insertt.gett(req.query.into, req.body)
})
app.get("/fetch", (req, res) => {
    console.log(req.body)

})
app.listen(8000, () => {
    console.log("Server Running")
})