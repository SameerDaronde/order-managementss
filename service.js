/*** Add the signup functionality */

try {
    app.post('/signup', async (req, res) => {
        const { username, password } = req.body;
        // Basic validation
        if (!username || !password) {
            return res.status(400).send('Username and password are required');
        }
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).send('Internal Server Error');
    }