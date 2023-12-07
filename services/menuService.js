const prisma = require('../config/prisma');

async function getAllMenuItems() {
  try {
    const menuItems = await prisma.menuItem.findMany();

    return menuItems;
  } catch (err) {
    throw err;
  }
}

async function createMenuItem(menuItem) {
  console.log(menuItem);
  try {
    return await prisma.menuItem.create({
      data: menuItem,
    });
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getAllMenuItems,
  createMenuItem,
};
