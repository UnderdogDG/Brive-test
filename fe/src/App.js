import { ThemeProvider } from 'styled-components';

import { theme } from './theme/theme';

import MainStyle from './theme/MainStyle';
import TableContainer from './containers/TableContainer/TableContainer';
import ContentLoaderContainer from './containers/ContentLoaderContainer/ContentLoaderContainer';

import { AppProvider } from './context/AppContext';


function App() {


  return (
    <ThemeProvider theme={ theme }>
      <MainStyle />
      <AppProvider>
        <TableContainer>
            <ContentLoaderContainer />
        </TableContainer>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
