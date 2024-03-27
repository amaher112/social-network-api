const users = [
  {
    username: "mike_jackson",
    email: "mjohnson@gmail.com",
  },
  {
    username: "sara_miller",
    email: "sara.miller@example.com",
  },
  {
    username: "alex_123",
    email: "alex.123@example.com",
  },
];

const thoughts = [
  {
    thoughtText: "Learning new technologies is so rewarding.",
    createdAt: "2022-03-17T10:45:00.000Z",
    username: "alex_123",
  },
  {
    thoughtText: "Looking forward to deploying my project.",
    createdAt: "2022-03-18T12:20:00.000Z",
    username: "sara_miller",
  },
  {
    thoughtText: "Coding is my passion!",
    createdAt: "2022-03-19T09:10:00.000Z",
    username: "mike_jackson",
  },
];

const seedData = { users, thoughts };

module.exports = seedData;