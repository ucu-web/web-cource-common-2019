import TileFactory from './TileFactory'

function AnimationFactory(imageName) {
    TileFactory.apply(this, [imageName,
                            350,
                            840,
                            70,
                            70]);
    this.getSequences = getSequences;
    this.sequences = this.getSequences();

    function getSequences () {
        const data = require('./levelMaps/tank_animations.json');
        const sequences = {};
        data.layers.forEach(layer => {
            sequences[layer.name] = layer.data.filter(i => i > 0);
        });
        // console.log('sequences:', sequences);
        return sequences;
    }

    const TileFactoryGetAnimation = this.getAnimation;
    const thisSequences = this.sequences;
    // console.log('this sequences:', thisSequences);
    this.getAnimation = (name, speed=100, repeat=true, autorun=true) => {
        return TileFactoryGetAnimation(thisSequences[name], speed, repeat, autorun);
    };
}

export default AnimationFactory;
