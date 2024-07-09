// const slidess = document.querySelectorAll('.slides')
// var counter =0;
// slidess.forEach(
//   (slides,index) => {
//     slides.style.left = `${index * 100}%`
//   }
// )

// const goPrev = () => {
//   counter--
//   slidesImage()
// }

// const goNext = () => {
//   counter++
//   slidesImage()
// }

// const slidesImage = () => {
//   slidess.forEach(
//     (slides) => {
//       slides.style.transform = `translateX(-${counter * 100}%)`
  
//     }
//   )
//   }
const slidess = document.querySelectorAll('.slides');
let counter = 0;

slidess.forEach((slides, index) => {
  slides.style.left = `${index * 100}%`;
});

const goPrev = () => {
  counter--;
  slidesImage();
};

const goNext = () => {
  counter++;
  slidesImage();
};

const slidesImage = () => {
  slidess.forEach((slides) => {
    slides.style.transform = `translateX(-${counter * 100}%)`;
  });
};