import MovieList from './Components/MovieList';
import HeroCenter from './Components/HeroTitle';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './Components/MovieStyle.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


// Main application...

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <HeroCenter />
        <MovieList />
      </ThemeProvider>
      
    </div>
  );
}

export default App;
