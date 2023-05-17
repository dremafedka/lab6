import express from 'express';
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
app.get('/', (_, res) => {
    res.send('To receive a response - enter your Moodle login in link line');
  });
app.get('/is-11fiot-21-109', (_, res) => {
  const customData = { surname: "Горбенко", name: "Федір", course: 2, group: "ІС-11" };
  res.json(customData);
});

