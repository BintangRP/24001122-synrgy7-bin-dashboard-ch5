import Car from "../models/CarModel.js";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const getAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.render('dashboard/index', { cars, title: 'Dashboard', namaAdmin: 'Bintang Binar' });
  } catch (error) {
    res.status(500).json({ error: error.msg });
  }
}

export const CreateCarForm = (req, res) => {
  res.render('dashboard/create', { title: 'Create Car Data', namaAdmin: 'Bintang Binar' });
}

export const createCar = async (req, res) => {
  try {
    const { nama, harga } = req.body;
    const image = req.file ? req.file.filename : '';
    await Car.create({ nama, harga, image });
    res.redirect('/admin/cars');
  } catch (error) {
    res.status(500).json({ error: error.msg });
  }
}

export const editCarForm = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (car) {
      res.render('dashboard/edit', { car, title: 'Edit Car Data', namaAdmin: 'Bintang Binar' });
    } else {
      res.status(404).json({ error: error.message });
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const updateCar = async (req, res) => {
  try {
    const { nama, harga } = req.body;
    const image = req.file ? req.file.filename : req.body.oldImg;
    const car = await Car.findByPk(req.params.id);
    if (car) {
      car.nama = nama;
      car.harga = harga;
      car.image = image;
      await car.save()
      res.redirect('/admin/cars');
    } else {
      res.status(500).json({ error: error.message });
    }
  } catch (error) {
    res.status(500).json({ error: error.msg });
  }
}

export const deleteCar = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id)
    if (car) {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);

      const imagePath = path.join(__dirname, '..', 'public', 'assets', 'uploads', car.image);

      if (fs.existsSync(imagePath)) {
        // Delete the image file
        fs.unlink(imagePath, (err) => {
          if (err) {
            console.error("Failed to delete image:", err);
          } else {
            console.log("Image deleted:", imagePath);
          }
        });
      } else {
        console.warn("Image file not found:", imagePath);
      }
      await car.destroy();
      res.redirect('/admin/cars');
    } else {
      res.status(400).json({ error: 'Car not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}