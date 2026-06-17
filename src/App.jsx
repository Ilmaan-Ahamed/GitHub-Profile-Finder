import GithubProfileFinder from './components/GithubProfileFinder';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <GithubProfileFinder />
      </div>
    </ThemeProvider>
  );
}

export default App;
