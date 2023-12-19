const express = require("express")
const cors = require("cors");
const bodyParser = require("body-parser")
const fileupload = require("express-fileupload");
const db = require("./db/conn")
const userRoutes = require("./routes/userRoutes")
const ngoRoutes = require("./routes/ngoRouter")
const eventRoutes = require("./routes/eventRoutes")
const donationRoutes = require("./routes/donationRoutes")
const volunteerRoutes = require("./routes/volunteerRoutes")
const campaignRoutes = require("./routes/campaignRoutes")
const careerRoutes = require("./routes/careerRoutes")
const fundingRoutes = require("./routes/fundingRoutes")

const app = express();
const port = 5000;


app.use(cors());
app.use(fileupload());
app.use(express.static("files"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", userRoutes)
app.use("/ngo", ngoRoutes)
app.use("/event", eventRoutes)
app.use("/donation", donationRoutes)
app.use("/volunteer", volunteerRoutes)
app.use("/campaign", campaignRoutes)
app.use("/career", careerRoutes)
app.use("/funding", fundingRoutes)

app.listen(port, () => console.log("Server is listing port ", port))

