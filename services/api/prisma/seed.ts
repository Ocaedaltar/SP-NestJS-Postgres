import { PrismaClient } from '@prisma/client';
import { seed_developement } from './seeds/developement';

const prisma = new PrismaClient();

async function cleanDb() {
  await prisma.user.deleteMany({});
  await prisma.bookmark.deleteMany({});
}

async function main() {
  cleanDb();
  seed_developement();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
