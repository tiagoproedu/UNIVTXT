class UserController {
    constructor(userService) {
        this.userService = userService;
    };

    create = (req, res) => {
        const usuario = req.body;

        console.log("cheguei no controller")

        this.userService.create(usuario);

        return res.status(200).json(usuario);
    }
}

module.exports = UserController;