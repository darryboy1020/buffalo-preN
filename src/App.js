import DemoComponent from './components/DemoComponent';

function App() {
  //example of how you can create a content store for your react components.
  // this is an example of using the DemoComponent and passing in props

  const props = {
    name: 'WhateverName',
    description: 'This is a regular description'
  }


  return (
    <div className="App">
      <header className="App-header">

        <DemoComponent {...props}/>
        <p>
          Buffalo PreNatal
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
