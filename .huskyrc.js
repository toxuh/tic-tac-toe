module.exports = {
  hooks: {
    'pre-commit': 'yarn lint:staged',
    'pre-push': 'yarn test:ci',
  },
};
