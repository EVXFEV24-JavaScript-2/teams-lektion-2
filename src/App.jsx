import "./App.css";
import { EventsExample } from "./Events";
import { Exercise1Component } from "./Exercise1";
import { CountryExercise } from "./Exercise6";
import { PropsExample } from "./Props";

const TITLE = "McDonalds";

function MyComponent() {
  return <p>Hello from a new component!</p>;
}

function App() {
  return (
    <div>
      <EventsExample />
    </div>
  );

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
