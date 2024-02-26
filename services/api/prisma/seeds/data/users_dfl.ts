import { CreateUserDTO } from '../tools/types';

export const member1: CreateUserDTO = {
  email: 'g@student.42.fr',
  hash: 'superMDP1!',
  firstName: 'guts',
};

export const member2: CreateUserDTO = {
  email: 'rzoro@student.42.fr',
  hash: 'superMDP1!',
  firstName: 'Roronoa',
  lastName: 'Zoro',
};

export const member3: CreateUserDTO = {
  email: 'bwayne@student.42.fr',
  hash: 'superMDP1!',
  firstName: 'Bruce',
  lastName: 'Wayne',
};

export const member4: CreateUserDTO = {
  email: 'askywalker@student.42.fr',
  hash: 'superMDP1!',
  firstName: 'Anakin',
  lastName: 'Skywalker',
};

export const member5: CreateUserDTO = {
  email: 'eelric@student.42.fr',
  hash: 'superMDP1!',
  firstName: 'Edward',
  lastName: 'Elric',
};

// creation des users de votre groupes:
export const usersTeam: CreateUserDTO[] = [member1, member2, member3, member4];
