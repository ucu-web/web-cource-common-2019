const Jimp = require('jimp');
const fs = require('fs').promises;
const resizedWidth=220;




const getData = async (data) => {
    return   fs.readFile(data).then(data => JSON.parse(data));
};
const getImageLink = fileName => {
    const splited = fileName.split('/');
    return splited[splited.length - 1];
};



let newFile = [];

const f = async (image, height, width, link, title) => {
    const newImage = await Jimp.read(image);
    let filename = getImageLink(image);
    let ratio = height / width;
    let resizedHeight = resizedWidth * ratio ;
    newImage.resize(resizedWidth, resizedHeight).quality(60).write(`../small-${filename}`);
    let post = {
        "width": width,
        "height": height,
        "small_width": resizedWidth,
        "small_height": resizedHeight,
        "image_link": 'static/images/large/'+getImageLink(filename),
        "small_image_link": 'static/images/small/'+getImageLink(filename),
        "go_to_link": "#",
        "send_link": "#",
        "title": title
    };
    newFile.push(post)
};
getData('./static/data/posts.json').then((data) =>{

    data.map(el => f(el.image_link,el.height, el.width, el.image_link, el.title));


});


