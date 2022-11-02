import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header 
       linkText ="Learn React"
       linkUrl = "https://reactjs.org"
      />
    </div>
  );
}

export default App;


// props --> passed down from parent to child. A child should not change the props.

// state --> is owned by component (setstate(): component lifecycle methods, hooks -> use effects)
