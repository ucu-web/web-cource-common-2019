const loadImage = (src) => new Promise( (resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve (img);
    img.src = src;
});

export default loadImage