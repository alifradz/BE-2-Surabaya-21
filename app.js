const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Mendapatkan daftar menu
app.get('/menus', async (req, res) => {
  try {
    const menus = await prisma.menu.findMany();
    res.json(menus);
  } catch (error) {
    console.error('Error retrieving menus:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Menambahkan menu baru
app.post('/menus', async (req, res) => {
  const { name, price } = req.body;

  try {
    const newMenu = await prisma.menu.create({
      data: {
        name,
        price,
      },
    });

    res.status(201).json(newMenu);
  } catch (error) {
    console.error('Error adding menu:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Port yang digunakan oleh aplikasi
const PORT = process.env.PORT || 3000;

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
