import Header from "./components/Header";
import Nav from 'react-bootstrap/Nav'

function App() {
  return (
    <div className="App">
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Button variant ="danger" onClick={() => {
            localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark');
            window.location.reload();
          }}>
            Change Mode
          </Button>
        </Nav.Item>
      </Nav>
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
