import app from './server';

app.listen(process.env.PORT || 3000, async () => {
  console.log(`Server started on port ${process.env.PORT || 3000}!!`);
});
