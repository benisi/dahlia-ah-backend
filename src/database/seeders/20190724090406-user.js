import bcrypt from 'bcrypt';

export const up = queryInterface => queryInterface.bulkInsert('Users', [{
  id: '122a0d86-8b78-4bb8-b28f-8e5f7811c456',
  firstName: 'Eden',
  lastName: 'Hazard',
  email: 'eden@gmail.com',
  password: bcrypt.hashSync('edenHazard', 10),
  bio: 'I am the best author in the world',
  avatarUrl: null,
  phoneNo: null,
  isVerified: true,
  isSubscribed: true,
  roleId: '2c4dfb3f-1798-43d4-8eb6-1c125994a263',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: '11fb0350-5b46-4ace-9a5b-e3b788167915',
  firstName: 'Richard',
  lastName: 'Croft',
  email: 'richard@gmail.com',
  password: bcrypt.hashSync('richardCroft', 10),
  bio: 'I am a genius with the pen',
  avatarUrl: null,
  phoneNo: null,
  isVerified: true,
  isSubscribed: true,
  roleId: 'f2dec928-1ff9-421a-b77e-8998c8e2e720',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: '8f3e7eda-090a-4c44-9ffe-58443de5e1f8',
  firstName: 'Williams',
  lastName: 'Brook',
  email: 'williams@gmail.com',
  password: bcrypt.hashSync('williamsBrook', 10),
  bio: 'I am a genius with the pen',
  avatarUrl: null,
  phoneNo: null,
  isVerified: true,
  isSubscribed: true,
  roleId: 'f2dec928-1ff9-421a-b77e-8998c8e2e720',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: '8487ef08-2ac2-4387-8bd6-738b12c75dff',
  firstName: 'Bruce',
  lastName: 'Clifford',
  email: 'bruce@gmail.com',
  password: bcrypt.hashSync('bruceClifford', 10),
  bio: 'I am a genius with the pen',
  avatarUrl: null,
  phoneNo: null,
  isVerified: true,
  isSubscribed: true,
  roleId: 'f2dec928-1ff9-421a-b77e-8998c8e2e720',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 'fb94de4d-47ff-4079-89e8-b0186c0a3be8',
  firstName: 'James',
  lastName: 'Bond',
  email: 'jamesbond@gmail.com',
  password: bcrypt.hashSync('jamesbond', 10),
  bio: 'My name is James, James Bond',
  avatarUrl: null,
  phoneNo: null,
  isVerified: true,
  isSubscribed: false,
  roleId: 'f2dec928-1ff9-421a-b77e-8998c8e2e720',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: '0ce36391-2c08-4703-bddb-a4ea8cccbbc5',
  firstName: 'jamie',
  lastName: 'foxx',
  email: 'jamiefoxx@gmail.com',
  password: bcrypt.hashSync('jamiefoxx', 10),
  avatarUrl: '',
  bio: 'I am a writer, and i have authored 5 best selling books',
  phoneNo: '2347032123404',
  isVerified: true,
  isSubscribed: false,
  roleId: 'b79c4eed-60c6-42fb-9040-f0822d8414fa',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 'ce87299b-0dfa-44ed-bb53-45d434647eb2',
  firstName: 'John',
  lastName: 'Doe',
  email: 'doe@gmail.com',
  password: bcrypt.hashSync('doe', 10),
  bio: 'sarcasm',
  avatarUrl: null,
  phoneNo: null,
  isVerified: true,
  roleId: 'f2dec928-1ff9-421a-b77e-8998c8e2e720',
  isSubscribed: true,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: '20eacfca-0fe5-4833-862c-0263dfbf66e5',
  firstName: 'Benny',
  lastName: 'Who knows',
  email: 'benny@gmail.com',
  password: bcrypt.hashSync('benny', 10),
  bio: 'Just love spantenousity',
  avatarUrl: null,
  phoneNo: null,
  roleId: 'f2dec928-1ff9-421a-b77e-8998c8e2e720',
  isVerified: true,
  isSubscribed: true,
  createdAt: new Date(),
  updatedAt: new Date()
}], {});
export const down = queryInterface => queryInterface.bulkDelete('Users', null, {});
