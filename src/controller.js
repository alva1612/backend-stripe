import { getFirestore } from "./firebase/config.js";
import { addDoc, collection } from "firebase/firestore";

function calculateOrderAmount(items) {    
    const total = items.reduce((a,b) => {
        const first = a.precio || 0
        return first + b.precio
    }, 0)
    return total*100
}

async function createPaymentIntent(req, res, stripe) {
    const { items } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "usd"
    })

    res.send({
        clientSecret: paymentIntent.client_secret
    })
}

async function login(req, res, firebase) {
    const { user } = req.body;

    const db = getFirestore(firebase)
    const test = await addDoc(collection(db, "login"), {
        name: 'Andres',
        token: 'asdasddasdasd'
    })
    console.log(test)
    res.send()
}

export { createPaymentIntent, login }