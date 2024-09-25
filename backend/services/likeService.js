class LikeService{
    constructor(likeRepository){
        this.likeRepository = likeRepository;
    }

    create = (like) => {
        console.log('cheguei no service');

        this.likeRepository.create(like);

        return like;
    }

    delete = (like) => {
        console.log('cheguei no service');

        this.likeRepository.delete(like);

        return like;
    }
}

module.exports = LikeService;