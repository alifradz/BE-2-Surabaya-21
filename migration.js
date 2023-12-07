-- prisma/migrations/init_menu_table.sql

-- Migration `init_menu_table`

CREATE TABLE "Menu" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(255) NOT NULL,
  "price" INT NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NUL
);
