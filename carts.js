﻿var express = require('express');
var router = express.Router();

let activeCarts = [
  {
    cartID: "777",
    cartItems: [
      {
        title: "StrawBerries",
<<<<<<< HEAD
        description: "200 carton",
=======
        description: "5 carton red ",
>>>>>>> 4f07ad1cd1e2a57cb0612f604c727fc66a1506db
        cost: 200,
        imageUrl: "stawberries.jpg"
      },
      {
        title: "BlackBerries",
<<<<<<< HEAD
        description: "300 black",
=======
        description: "2 boxes red",
>>>>>>> 4f07ad1cd1e2a57cb0612f604c727fc66a1506db
        cost: 295,
        imageUrl: "blackberries.jpg"
      }
    ]
  },
  {
    cartID: "888",
    cartItems: [
      {
        title: "Cookies",
        description: "Chocolate Chips, 2 Curtons Free",
        cost: 150,
        imageUrl: "cookies.jpg"
      }
    ]
  }
]
 
// NOTE: for if have a JWT that need to be validated will need that middleware inserted
// router.get('/:id', authHelper.checkAuth, function (req, res, next) {
router.get('/:id', function (req, res, next) {
  // TODO: Return a 404 error if the cart ID does not exist!
  let cart = activeCarts.find(x => x.cartID === req.params.id)
  if (cart === undefined) {
    let err = new Error('Cart was not found.');
    err.status = 404;
    return next(err);
  }

  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Pragma", "no-cache");
  res.header("Expires", 0);
  res.status(200).json(cart);
});

module.exports = router;
