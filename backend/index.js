const express = require('express')
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 3000
const userRoutes = require('./routes/user')
const productRoutes = require('./routes/products')
const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/fsapp1db')
.then(() => console.log("connected to mongodb"))
.catch(() => console.log("some error occured while connecting to db"))


app.use(express.json());
app.use(cors())
app.use("/user", userRoutes);
app.use("/products", productRoutes)

app.listen(PORT, () => {
    console.log("service running at port"+ PORT)
})
