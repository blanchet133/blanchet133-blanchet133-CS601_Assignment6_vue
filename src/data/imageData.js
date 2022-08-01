const images = require.context('./images', true, /\.jpg$/);

const pic1 = require( "./images/dog.jpg");

const imageData = {
  imageList: [
    { id: 1, src: pic1 },
    { id: 2, src: images("./images/puppy.jpg") }
  ]
}

export default imageData;