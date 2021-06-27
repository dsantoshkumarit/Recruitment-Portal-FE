import { Menu } from "semantic-ui-react";
import React from "react";
import {
  Route,
  Switch,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import CandidateHome from "./CandidateHome";
import Joblist from "./Joblist";
import Logout from "./Logout";
import { Grid } from "semantic-ui-react";

export default function CandidateDashboard() {
  const [activeItem, setActiveItem] = React.useState("home");
  let { path, url } = useRouteMatch();
  let { _id } = useParams();

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Menu pointing secondary>
              <Menu.Item
                name="home"
                as={Link}
                to={`${url}`}
                active={activeItem === "home"}
                onClick={handleItemClick}
              />
              <Menu.Item
                name="joblist"
                as={Link}
                to={`${url}/joblist`}
                active={activeItem === "joblist"}
                onClick={handleItemClick}
              />
              <Menu.Menu position="right">
                <Menu.Item
                  name="logout"
                  as={Link}
                  to={`${url}/logout`}
                  active={activeItem === "logout"}
                  onClick={handleItemClick}
                />
              </Menu.Menu>
            </Menu>
            <Switch>
              <Route exact path={`${path}`}>
                <CandidateHome _id={_id} />
              </Route>
              <Route path={`${path}/joblist`}>
                <Joblist _id={_id} />
              </Route>
              <Route path={`${path}/logout`}>
                <Logout _id={_id} />
              </Route>
            </Switch>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {/* <Menu pointing secondary>
        <Menu.Item
          name="home"
          as={Link}
          to={`${url}`}
          active={activeItem === "home"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="joblist"
          as={Link}
          to={`${url}/joblist`}
          active={activeItem === "joblist"}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            as={Link}
            to={`${url}/logout`}
            active={activeItem === "logout"}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
      <Switch>
        <Route exact path={`${path}`}>
          <CandidateHome _id={_id} />
        </Route>
        <Route path={`${path}/joblist`}>
          <Joblist _id={_id} />
        </Route>
        <Route path={`${path}/logout`}>
          <Logout _id={_id} />
        </Route>
      </Switch> */}
    </>
  );
}
