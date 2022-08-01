const images = require.context('./images', true, /\.jpg$/);

const pic1 = require( "./images/dog.jpg");

const imageData = {
  dogList: [
    { id: 1, src: pic1 },
    { id: 2, src: images("./puppy.jpg") }
  ],
  townList: [
    { id: 1, src: images("./townNow.jpg")},
    { id: 2, src: images("./townHistorical.jpg") }
  ],
  damList: [
    { id: 1, src: images("./damFinished.jpg")},
    { id: 2, src: images("./damConstruction.jpg") }
  ],
  butterflyList: [
    { id: 1, src: images("./butterfly.jpg")},
    { id: 2, src: images("./Caterpillar.jpg") }
  ],
}

export default imageData;