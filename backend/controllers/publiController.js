class PubliController {
    constructor(publiService) {
        this.publiService = publiService;
    }

    create = (req, res) => {
        console.log('cheguei no controller');
        
        const publicacao = req.body;

        this.publiService.create(publicacao);

        return res.status(200).json(publicacao);
    }
}

module.exports = PubliController;