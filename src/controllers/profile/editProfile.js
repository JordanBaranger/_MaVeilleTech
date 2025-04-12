import { checkUserFunction } from "./checkUser.js";
import { passwordValidation } from "./passwordValidate.js";


const editProfile = async (req, res) => {
    try {
        const { username, email, password, profile_picture, bio, confirmPassword } = req.body;

        