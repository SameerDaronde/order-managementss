/****Add the Login functionalaity */
        // Check if user already exists
        const existingUser = await  User.findOne({ username });
        if (existingUser) {
            return res.status(409).send('Username already exists');
        }