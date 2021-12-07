import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';



import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Booking from './components/views/Booking/Booking';
import BookingNew from './components/views/BookingNew/BookingNew';
import Events from './components/views/Events/Events';
import EventsNew from './components/views/EventsNew/EventsNew';
import Waiter from './components/views/Waiter/Waiter';
import Order from './components/views/Order/Order';
import OrderNew from './components/views/OrderNew/OrderNew';
import Kitchen from './components/views/Kitchen/Kitchen';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
    // secondary: {
    //   main: '#11cb5f',
    // },
  },
});

function App() {
  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={`/`} component={Homepage} />
              <Route exact path={`/login`} component={Login} />
              <Route exact path={`/tables`} component={Tables} />
              <Route exact path={`/tables/booking/:id`} component={Booking} />
              <Route exact path={`/tables/booking-new`} component={BookingNew} />
              <Route exact path={`/tables/events/:id`} component={Events} />
              <Route exact path={`/tables/events-new`} component={EventsNew} />
              <Route exact path={`/waiter`} component={Waiter} />
              <Route exact path={`/waiter/order/:id`} component={Order} />
              <Route exact path={`/waiter/order-new`} component={OrderNew} />
              <Route exact path={`/kitchen`} component={Kitchen} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
