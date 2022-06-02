const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();


// import routes to be accessed from server(middleware)
const userRouter = require("./routes/users");

// middleware
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);





require("dotenv").config();

// connection to MongoDB database
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true
},
    () => console.log("Database connection successful")
);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));