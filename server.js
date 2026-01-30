const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Trading Bot Backend Running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
