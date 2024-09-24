class UserService{
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    create = (user) => {
        console.log("cheguei no service");

        this.userRepository.create(user);

        return user;
    }

    delete = (user) => {
        console.log('cheguei no service');

        this.userRepository.delete(user);

        return user;
    }
}

module.exports = UserService;