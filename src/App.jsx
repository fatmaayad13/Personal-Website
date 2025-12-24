import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar';
import ReactTypingEffect from 'react-typing-effect';

function App() {
  return <div className={styles.App}> 
  <Navbar />
    {/* <ReactTypingEffect
        text={["Hi! I'm Fatma.", "Welcome to my portfolio."]}
        speed={100}    
        eraseSpeed={50} 
        typingDelay={500} 
        cursor="_"
      /> */}
  </div>

}

export default App;
