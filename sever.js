const express = require ('express');
const mongoose = require ('mongoose');
const Stddata = require ('./model');
const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://sundrpllitanuja231006_db_user:hBZo2hR4WaA9E6hB@cluster0.gbyauu1.mongodb.net/').then(() => console.log('Connected to MongoDB')).catch(err => console.log(err));
app.post('/add_stddata', async (req, res) => {
    const {username} = req.body;
    const {email} = req.body;
    const {age} = req.body;
    const {college} = req.body;
    const {course} = req.body;  
    try{
        const newData = new Stddata({username, email, age, college, course});
        await newData.save();
        return res.json({message: "User data Posted Successfully"});
    }
    catch(err){
        console.log(err);
    }
})
app.get('/get_all_stddata', async (req, res) => {
    try{
        const allData = await Stddata.find();
        return res.json(allData);
    }
    catch(err){
        console.log(err);
    }
})
app.listen(3000, () => console.log('Server is running on http://localhost:3000'))