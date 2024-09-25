class PubliService{
    constructor(publiRepository){
        this.publiRepository = publiRepository;
    }

    create = (publi) => {
        console.log('cheguei no service');

        this.publiRepository.create(publi);

        return publi;
    }

    delete = (publi) => {
        console.log('cheguei no service');

        this.publiRepository.delete(publi);

        return publi;
    }
}

module.exports = PubliService;