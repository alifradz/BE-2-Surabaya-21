const express = require('express');
const router = express.Router();

const menuController = require('../controllers/menuController');

// Menggunakan controller yang sesuai dengan proyek Anda
router.get('/menus', menuController.getAllMenus);
router.post('/menus', menuController.createMenu);

module.exports = router;
