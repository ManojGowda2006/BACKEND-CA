const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running in the port ${PORT}`);
})

app.get('/signup', (req,res) => {
    const {username, email , password,dob} = req.query;
    if(!username){
        res.status(400).json({error:"Username cannot be Empty"})
        // return;
    }else if(!email){
        res.status(400).json({error:"Email cannot be empty"});
        // return;
    }else if(!password){
        if(!password){
            res.status(400).json({error:"password cannot be empty"})
            return;
    } else if(password.length <= 8 || password.length > 16){
        
            res.status(400).json({error:"Password must be greater than 8 and less than or equal to 16"});
        
        // return;
    }else if(!dob){
        res.status(400).json({error:"date of birth is required"});
        // return;
    }
    res.send("Successfull");

}
})
