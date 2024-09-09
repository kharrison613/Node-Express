let users = [];

module.exports = {
  getAll: () => users,
  getById: (id) => users.find(user => user.id === id),
  create: (user) => { users.push(user); return user; },
  update: (id, updatedUser) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users[index] = { ...users[index], ...updatedUser };
      return users[index];
    }
    return null;
  },
  delete: (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      const deletedUser = users.splice(index, 1)[0];
      if (deletedUser === null || deletedUser === undefined) {
        console.error('User not found for deletion');
      }
      return deletedUser;
    }
    console.error('No user found for deletion with id: ', id);
    return null;
  }
};
