import express from "express";
import Stripe from "stripe";

import { createPaymentIntent, login } from "./controller.js";
import { firebase } from "./firebase/config.js";

const app = express()
app.use(express.json())

const port = 3000

const stripe = Stripe('sk_test_51MASZdDxr9cUnPHW7CoGbC1Ec2pI4kZ2kwqdfAKQhzrlNhnvpvnCHeT7NiXk78sOTKZHsK3ZYdEaQsThjpeZbYOs00E7WemwB4')

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/login', async (req, res) => login(req, res, firebase))

app.post('/create-intent', (req,res) => createPaymentIntent(req, res, stripe))

app.listen(port, () => {
    console.log('Listening on port '+ port)
})