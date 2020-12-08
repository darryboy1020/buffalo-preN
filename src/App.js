import DemoComponent from './components/DemoComponent';
import NavBarSticky from './components/NavbarSticky';

function App() {
  //example of how you can create a content store for your react components.
  // this is an example of using the DemoComponent and passing in props

  const props = {
    name: 'Hello Name',
    description: 'This is a regular description'
  }

  const NavBarStickyProps = {
    items:[{
      text: 'GOOGLE',
      href: 'https://www.google.com/'
    },
    {
      text: 'FACEBOOK',
      href: 'https://www.facebook.com/'
    },
    {
      text: 'TWITTER',
      href:'https://www.twitter.com/'
    }
  ]
  }


  return (
    <div className="App">
      <header className="App-header">
        <NavBarSticky {...NavBarStickyProps}/>
        <DemoComponent {...props}/>
        <DemoComponent name = 'John' description = 'Darrien was here'/>
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
