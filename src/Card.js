import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'; 

const styles = {
  themes : {
    light: {
      backgroundColor: 'white',
      height: '100vh',
      width: '100vw'
    },
    dark: {
      backgroundColor: 'black',
      color : 'white',
      height: '100vh',
      width: '100vw'
    }
  }
}

function App() {
  const [theme,setTheme]=useState(true)

  const renderDarkTheme = <div style={styles.themes.light}><p>theme dark</p></div>
  const renderLightTheme = <div style={styles.themes.dark}><p>theme lite </p></div>


  const toggleTheme = () => {
    console.log(theme)
    setTheme(!theme)
  }

  const renderControl = <button onClick={(e)=>toggleTheme(e)}>Toggle theme</button>

  return (
    <React.Fragment>
      {theme ? renderLightTheme : renderDarkTheme}
     {renderControl}
    </React.Fragment>
  )
}

export default App;
