

const editProfile = async (req, res) => {
    try {
        const { username, email, password, profile_picture, bio, confirmPassword } = req.body;

        let username,
        let email,

        try {
            ({ username, email } = await checkUserFunction(req, { username, email }));
        } catch (error) {
            return res.status(401).json({ message: error.message });
        }

        let hashedPassword;
        if (password) {
            try {
             hashedPassword = await    
            } catch (error) {
                
            }
        }