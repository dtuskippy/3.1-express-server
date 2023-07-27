import express from "express";
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello, Gizmo is here!');
})

app.route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })




app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

