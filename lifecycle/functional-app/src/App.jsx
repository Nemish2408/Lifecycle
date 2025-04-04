// import { useState } from "react";

// // example 1 simple counter
// export default function Counter () {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//     <h1>Count: {count}</h1>
//     <button onClick={() => setCount(count + 1)}>Increase</button>
//     <button onClick={() => setCount(count - 1)}>Dicrease</button>
//     </>
//   )
// }

// example 2 toggle dark mode

import { useState } from "react";
export default function ThemeSwitcher() {
    const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div style={{backgroundColor: darkMode ? "black" : "white", color : darkMode ? "white" : "black", padding: "20px"}}>
      <h2>{darkMode ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={ () => setDarkMode(!darkMode)}>Toggle Mode</button>
    </div>
  );
}


// const images = [
//   "https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg",
//   "https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVvEDkKjNI0i6ymK6zWKDCId_yfmnRV2Wafh6-_vQHJed1Zdopbj8YRzKnIRHjaUnseA&usqp=CAU",
// ];

// export default function ImageSlider() {
//   const [index, setIndex] = useState(0);

//   function handleNext() {
//     setIndex((index + 1) % images.length);
//   }

//   function handlePrev() {
//     setIndex((index - 1 + images.length) % images.length);
//   }

//   return (
//     <>
//     {index}
//       <button onClick={handlePrev}>Previous</button>
//       <img src={images[index]} alt="slider" />
//       <button onClick={handleNext}>Next</button>
//     </>
//   );
// }
