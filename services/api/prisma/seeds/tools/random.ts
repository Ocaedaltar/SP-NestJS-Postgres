import { LIST_FIRSTNAME, LIST_LASTNAME } from '../data';
import { CreateUserDTO } from './types';

export function randomNumber(limit: number): number {
  return Math.floor(Math.random() * limit);
}

export function randomFirstname() {
  return LIST_FIRSTNAME[randomNumber(LIST_FIRSTNAME.length)];
}

export function randomLastname() {
  return LIST_LASTNAME[randomNumber(LIST_LASTNAME.length)];
}

export function randomUserDto(): CreateUserDTO {
  const firstName = randomFirstname();
  const lastName = randomLastname();
  const email = firstName + '.' + lastName + '@random.com';
  const hash = 'superMDP1!';
  return { email, hash, firstName, lastName };
}

export function randomUsersDto(limit: number): CreateUserDTO[] {
  const data: CreateUserDTO[] = [];
  for (let i = 0; i < limit; i++) {
    data.push(randomUserDto());
  }
  return data;
}
