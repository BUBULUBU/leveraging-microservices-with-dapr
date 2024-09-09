// express
import express from 'express';

// controller
import cartController from '../controller/cartController';

const router = express.Router();

router.get('/', cartController.handleGetCart);
router.post('/', cartController.handleAddCartItem);
router.delete('/', cartController.handleDeleteCartItem);

module.exports = router;