import express from 'express';
import multer from 'multer';
import sequelize from '../config/Database.js';


import { getAllCars, editCarForm, CreateCarForm, createCar, updateCar, deleteCar } from '../controllers/CarController.js';
import { } from '../controllers/LoginController.js';

const router = express.Router();
const upload = multer({ dest: 'public/assets/uploads' })

try {
  await sequelize.authenticate();
  console.log('database terhubung...')
  router.get('/admin/cars', getAllCars);
  router.post('/admin/cars', upload.single('image'), createCar);
  router.get('/admin/cars/create', CreateCarForm);
  router.get('/admin/cars/edit/:id', editCarForm);
  router.put('/admin/cars/:id', upload.single('image'), updateCar);
  router.delete('/admin/cars/:id', deleteCar);
} catch (error) {
  console.log(error.message);
}

export default router;