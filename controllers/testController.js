const testUserController = (req, res) => {
    try {
        res.status(200).send({
            success: true,
            message: "Test user route is working fine"
        });
    } catch (error) {
        console.log("Error in test user controller:", error);
    }
}

module.exports = { testUserController };