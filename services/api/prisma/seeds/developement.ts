import { usersTeam } from './data/users_dfl';
import { randomUsersDto } from './tools';
import { createUsers } from './tools/generate_user';

export async function seed_developement() {
  createUsers(usersTeam);
  createUsers(randomUsersDto(5));
  // recuperer les users que vous avez cree pour avoir leur ID's
  // c'est avec cette ID que vous pourrais cree des bookmarks, etc
}
