function MyButton({ title, onClick }) {
  return (
    <div>
      <button onClick={onClick}>{title}</button>
    </div>
  );
}

export function EventsExample() {
  const onButtonClick = (event) => {
    console.log("Hej!");
  };

  const onInputChange = (event) => {
    alert(event.target.value);
  };

  return (
    <div>
      <button onClick={() => alert("HEJ!")}>Click Me!</button>
      <button onClick={onButtonClick}>Click Me!</button>
      <input onChange={onInputChange} />
      <MyButton title="My own button" onClick={onButtonClick} />
      <MyButton
        title="My own button 2"
        onClick={() => alert("Another click!")}
      />
    </div>
  );
}
