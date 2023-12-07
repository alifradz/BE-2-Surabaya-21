const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient():

const getAllMenus = async (req, res) => {
  try {
    const menus = await prisma.menu.findMany();
    res.json(menus);
  } catch (error) {
    console.error('Error retrieving menus:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createMenu = async (req, res) => {
  const { name, price } = req.body;

  try {
    const newMenu = await prisma.menu.create({
      data: { name, price },
    });

    res.status(201).json(newMenu);
  } catch (error) {
    console.error('Error adding menu:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getAllMenus, createMenu };
