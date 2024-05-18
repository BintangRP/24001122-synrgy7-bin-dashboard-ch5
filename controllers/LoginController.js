import Users from "../models/LoginModel.js";

export const getAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.render('index', { cars });
  } catch (error) {
    res.status(500).json({ error: error.msg });
  }
}

export const LoginForm = (req, res) => {
  res.render('create');
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
      res.sender('edit', { car });
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
      await car.destroy();
      res.redirect('/admin/cars');
    } else {
      res.status(400).json({ error: 'Car not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}