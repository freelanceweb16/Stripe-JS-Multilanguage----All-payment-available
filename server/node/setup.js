/**
 * setup.js
 * Stripe Payments Demo. Created by Romain Huet (@romainhuet)
 * and Thorsten Schaeff (@thorwebdev).
 *
 * This is a one-time setup script for your server. It creates a set of fixtures,
 * namely products and SKUs, that are used to create a random basket session.
 */

'use strict';

const config = require('./config');
const stripe = require('stripe')(config.stripe.secretKey);
stripe.setApiVersion(config.stripe.apiVersion);

// Replace this list with information about your store's products.
const products = [
  {id: '580',name: '580.000 Contests',price: 100,attributes: {issue: ''},},
  {id: '3600',name: '3.600.000 Contests',price: 500,attributes: {issue: ''},}, 
  {id: '8600',name: '8.600.000 Contests',price: 1000,attributes: {issue: ''},},
  {id: '20600',name: '20.600.000 Contests',price: 2500,attributes: {issue: ''},},
  {id: '40600',name: '40.600.000 Contests',price: 5000,attributes: {issue: ''},},  
  {id: '900000',name: '90.000.000 Contests',price: 10000,attributes: {issue: ''},}, 
];

// Creates a collection of Stripe Products and SKUs to use in your storefront
const createStoreProducts = async () => {
  try {
    const stripeProducts = await Promise.all(
      products.map(async product => {
        const stripeProduct = await stripe.products.create({
          id: product.id,
          name: product.name,
          type: 'good',
          attributes: Object.keys(product.attributes),
          metadata: product.metadata,
        });

        const stripeSku = await stripe.skus.create({
          product: stripeProduct.id,
          price: product.price,
          currency: config.currency,
          attributes: product.attributes,
          inventory: {type: 'infinite'},
        });

        return {stripeProduct, stripeSku};
      })
    );

    console.log(
      `🛍️  Successfully created ${stripeProducts.length} products on your Stripe account.`
    );
  } catch (error) {
    console.log(`⚠️  Error: ${error.message}`);
  }
};

createStoreProducts();
;