class LikeController{
    constructor(likeService){
        this.likeService = likeService;
    }

    create = (req, res) => {
        console.log('cheguei no controller');

        const like = req.body;

        this.likeService.create(like);

        return res.status(200).json(like);
    }

    delete = (req, res) => {
        console.log('cheguei no controller');

        const like = req.body;

        this.likeService.delete(like);

        return res.status(200).json(like);
    }
}

module.exports = LikeController;