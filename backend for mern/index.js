const app = require("./app");
const connectDB = require("./db/dbConnection");


const students = require('./Routes/students.js');
const faculty = require('./Routes/faculty.js');
const auth = require('./Routes/auth.js')

app.use("/api/students", students);
app.use("/api/faculty", faculty);
app.use("/api/auth", auth);



connectDB().then(() => {
    console.log("Connecntion to MONGO is succesfull");

    // Start server
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`Server running on port ${port}`));


}).catch((e) => {

    console.log("Error in Connection.")

})







