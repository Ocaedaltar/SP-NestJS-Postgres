export type CreateUserDTO = {
  email: string;
  hash: string;
  firstName?: string;
  lastName?: string;
};

export type CreateBookmarkDTO = {
  title: string;
  description?: string;
  link: string;
  userId: number;
};
