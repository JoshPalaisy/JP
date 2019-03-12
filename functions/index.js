const functions = require('firebase-functions');
const admin = require('firebase-admin')
const stripe = require('stripe')

exports.createStripeCustomer = functions.auth.user()
  .onCreate(async(user) => {
    const customer = await stripe.customers.create({
      email: user.email
    })
    return admin.firestore()
      .collection('stripe_customers')
      .doc(user.uid)
      .set({customer_id: customer.id})
  })