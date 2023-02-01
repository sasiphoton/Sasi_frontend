import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import BG from './assets/images/background.png'
import Routes from './routes/Routes';

const style1 = { width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', backgroundImage: 'url(' + BG + ')', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} disableGutters={true} sx={style1}>
        <Routes />
      </Container>
    </>
  );
}

export default App;
