import { Bookmark, PrismaClient } from '@prisma/client';
import { CreateBookmarkDTO } from './types';

const prisma = new PrismaClient();

export async function createBookmark(bookmark: CreateBookmarkDTO) {
  return await prisma.bookmark.create({
    data: bookmark,
  });
}

export async function createBookmarks(bookmarks: CreateBookmarkDTO[]) {
  const data: Bookmark[] = [];
  for (const bookmark of bookmarks) {
    data.push(
      await prisma.bookmark.create({
        data: bookmark,
      }),
    );
  }
  return data;
}
