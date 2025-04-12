const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ Shopee AI Backend Aktif!');
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
