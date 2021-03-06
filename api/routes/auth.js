const express = require('express');
const AuthController = require('../controllers/AuthController');
const router = express.Router();

router.post('/sign-in', AuthPolice.basic);
router.post('/sign-up', UserPolice.create, AuthController.signUp);
router.post('/sign-out', AuthPolice.bearer, AuthController.signOut);

module.exports = router;
