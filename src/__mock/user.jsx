import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  nome: faker.name.fullName(),
  telefone: '8888888888',
  cpf: '123123'
}));

export default users;
