import Admin from "../models/Admin.js";
import bcrypt from 'bcryptjs';

export const addAdmin = async( req, res, next) => {
    const { email, password } = req.body;
    if(
        !email && email.trim() ==="" && !password && password.trim() ===""){
        return res.status(422).json({message: "invalid inputs"});
    }
    let existingAdmin;
    try {
        existingAdmin = await Admin.findOne({email});
    } catch (err) {
        return console.log(err);
    }

    if(existingAdmin) {
        return res.status(400).json({message: "Admin already exists"});
    }

    let admin;
    const hashedPassword = bcrypt.hashSync(password);
    try{
        admin = new Admin({ email, password: hashedPassword });
        admin = await admin.save();
    } catch(err) {
        return console.log(err);
    }
    if(!admin) {
        return res.status(500).json({ message: "Unable to store admin"});
    }
    return res.status(201).json({ admin });
};

export const adminLogin = async(req, res, next) =>{
    const { email, password } = req.body;
    if(
        !email && email.trim() ==="" && !password && password.trim() ===""){
        return res.status(422).json({message: "invalid inputs"});
    }
    let existingAdmin;
    try {
        existingAdmin = await Admin.findOne({ email });
    } catch (err) {
        return console.log(err);
    }
    if(!existingAdmin) {
        return res.status(400).json({message: "Admin not found"});
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingAdmin.password);

    if(!isPasswordCorrect) {
        return res.status(400).json({message: "Incorrect Password"});
    }

    return res.status(400).json({message: "Authentication Complete"});
};

// 1:30:24