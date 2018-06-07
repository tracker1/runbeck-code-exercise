process.on('unhandledRejection', (reason, promise) => console.error({reason, promise}));

if (!module.parent) {
  import('./main').then(main => main.default()).catch(console.error);
}
