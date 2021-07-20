import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import styled from "styled-components";

import HomeContainer from './containers/home';
import BookingContainer from './containers/booking';
import CancelContainer from './containers/cancel';

const App = () => {
  return (
      <Router>
          <Main>
            <Switch>
              <Route exact path={'/'}>
                <HomeContainer />
              </Route>
              <Route exact path={'/booking'}>
                <BookingContainer />
              </Route>
                <Route exact path={'/cancel'}>
                  <CancelContainer />
                </Route>
            </Switch>
          </Main>
      </Router>
  );
}

export default App;

const Main = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    background: ${(props) => props.theme.gray}
`;
