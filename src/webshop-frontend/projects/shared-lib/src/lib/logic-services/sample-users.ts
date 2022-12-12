import { UserViewModel } from '../domain';

export const SYSTEM_USERS: UserViewModel[] = [
  {
    id: 'bf9d212c-96c4-444c-ada4-684748e278d6',
    userName: 'mad_max',
    firstName: 'Max',
    lastName: 'Mustermann',
    email: 'maxmu@online.de',
  },
  {
    id: '6af2ca99-b2c2-4e6e-9f22-da053f799ab0',
    userName: 'joe666',
    firstName: 'Joe',
    lastName: 'Jordison',
    email: 'joe-y@online.de',
  },
  {
    id: '1725f553-9c42-4336-84c5-959b703a7dac',
    userName: 'freeenk',
    firstName: 'Frank',
    lastName: 'Bleck',
    email: 'frable@online.de',
  },
  {
    id: '18a5a63c-5f45-47c6-a8f2-025b79df9a54',
    userName: 'erika',
    firstName: 'Erika',
    lastName: 'Müller',
    email: 'erikaller@online.de',
  },
];

export const DEFAULT_USERS: UserViewModel[] = [
  {
    id: '58056369-8dc7-4afa-b990-5cb882dc7e73',
    userName: 'st.nik',
    firstName: 'Sankt',
    lastName: 'Nikolaus',
    email: 'nikolaus@nordpol.fn',
  },
];
