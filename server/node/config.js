/**
 * config.js
 * Stripe Payments Demo. Created by Romain Huet (@romainhuet)
 * and Thorsten Schaeff (@thorwebdev).
 */

'use strict';

// Load environment variables from the `.env` file.
require('dotenv').config();

 

module.exports = {
  // Default country for the checkout form.
  country: 'FR',

  // Store currency.
  currency: 'eur',

  // Supported payment methods for the store.
  // Some payment methods support only a subset of currencies.
  // Make sure to check the docs: https://stripe.com/docs/sources
  paymentMethods: [
    // 'ach_credit_transfer', // usd (ACH Credit Transfer payments must be in U.S. Dollars)
    'alipay', // aud, cad, eur, gbp, hkd, jpy, nzd, sgd, or usd.
    'bancontact', // eur (Bancontact must always use Euros)
    'card', // many (https://stripe.com/docs/currencies#presentment-currencies)
    'eps', // eur (EPS must always use Euros)
    'ideal', // eur (iDEAL must always use Euros)
    'giropay', // eur (Giropay must always use Euros)
    'multibanco', // eur (Multibanco must always use Euros)
    // 'sepa_debit', // Restricted. See docs for activation details: https://stripe.com/docs/sources/sepa-debit
    'p24', // eur, pln
    'sofort', // eur (SOFORT must always use Euros)
    'wechat', // aud, cad, eur, gbp, hkd, jpy, sgd, or usd.
    'au_becs_debit', //aud
  ],

  // Configuration for Stripe.
  // API Keys: https://dashboard.stripe.com/account/apikeys
  // Webhooks: https://dashboard.stripe.com/account/webhooks
  // Storing these keys and secrets as environment variables is a good practice.
  // You can fill them in your own `.env` file.
 
  
  
  stripe: {
    // The two-letter country code of your Stripe account (required for Payment Request).
    country: process.env.STRIPE_ACCOUNT_COUNTRY || 'FR',
    // API version to set for this app (Stripe otherwise uses your default account version).
    apiVersion: '2019-03-14',
    // Use your test keys for development and live keys for real charges in production.
    // For non-card payments like iDEAL, live keys will redirect to real banking sites.
	// publishableKey: 'pk_test_51IFsLfG6PNSXC5j4ipC3cY97roRaRv01tAzBixEewi921r62IFWoaDpjGMV43yJGCjLHUYfh06OK9l9v6bS5EwHY00ZRbCLufA',
	publishableKey: 'pk_live_51IFsLfG6PNSXC5j4jQFBH6iuZxoazxGNgTtk7PuNI8K0DESHA5DShDJEd1usUOG7RU48GjrlibtugpU2qnAf62DD00hpYOeYDd',
    //secretKey: 'sk_test_51IFsLfG6PNSXC5j4ULQNVgxOg7UeWQy1WG4aTYVxFsFDayhOIb2oeRxjfFCZdtvzb1soj2lqEb3d2syddhLLpfAK009Wlg5BuY',
	secretKey: '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',
    // Setting the webhook secret is good practice in order to verify signatures.
    // After creating a webhook, click to reveal details and find your signing secret.
    webhookSecret: '',
  },

  // Shipping options for the Payment Request API.
  shippingOptions: [
    {
      id: 'free',
      label: 'Free Shipping',
      detail: 'Delivery within 5 days',
      amount: 0,
    },
  ],

  // Server port.
  port: process.env.PORT || 9000,

  // Tunnel to serve the app over HTTPS and be able to receive webhooks locally.
  // Optionally, if you have a paid ngrok account, you can specify your `subdomain`
  // and `authtoken` in your `.env` file to use it.
  ngrok: {
    enabled: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 9000,
    subdomain: process.env.NGROK_SUBDOMAIN,
    authtoken: '1vaAGK8s1gvp1aRo5NdXCJhMeHt_2vyYSmkj2RNyvTeFWS8HX',
  },
};
;