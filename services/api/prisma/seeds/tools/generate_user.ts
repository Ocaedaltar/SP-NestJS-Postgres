import { PrismaClient, User } from '@prisma/client';
import { CreateUserDTO } from './types';

const prisma = new PrismaClient();

export async function createUser(user: CreateUserDTO) {
  return await prisma.user.create({
    data: user,
  });
}

export async function createUsers(users: CreateUserDTO[]) {
  const data: User[] = [];
  for (const user of users) {
    data.push(
      await prisma.user.create({
        data: user,
      }),
    );
  }
  return data;
}
