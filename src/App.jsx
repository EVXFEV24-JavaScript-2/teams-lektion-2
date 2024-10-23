import "./App.css";
import { Exercise1Component } from "./Exercise1";
import { CountryExercise } from "./Exercise6";

const TITLE = "McDonalds";

function MyComponent() {
  return <p>Hello from a new component!</p>;
}

function App() {
  const random = Math.random();
  let content;
  if (random > 0.5) {
    content = <div>hej</div>;
  } else {
    content = <div>pannkakor</div>;
  }

  return (
    <>
      {TITLE}
      {content}
      <MyComponent />
      <Exercise1Component />
      <CountryExercise />
    </>
  );
}

export default App;
