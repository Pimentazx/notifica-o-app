const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const {
  addNotification,
  getNotifications,
  deleteNotification
} = require('../controllers/notificationController');

router.use(auth);

router.post('/', addNotification);
router.get('/', getNotifications);
router.delete('/:id', deleteNotification);

module.exports = router;
