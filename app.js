const express=require("express");
const app=express();
const configRoutes=require("./routes");

configRoutes(app);

const server=app.listen(3000, () =>
{
    console.log("MELODIA is running on http://localhost:3000");
});

