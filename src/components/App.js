import React from "react";
import { Grid } from "semantic-ui-react";
import "./App.css";

import { useSelector } from "react-redux";

import ColorPanel from "./ColorPanel/ColorPanel";
import SidePanel from "./SidePanel/SidePanel";
import Messages from "./Messages/Messages";
import MetaPanel from "./MetaPanel/MetaPanel";

const App = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const currentChannel = useSelector((state) => state.channel.currentChannel);

  return (
    <Grid columns="equal" className="app" style={{ background: "#eee" }}>
      <ColorPanel />
      <SidePanel
        key={currentUser && currentUser.id}
        currentUser={currentUser}
      />
      <Grid.Column style={{ marginLeft: 320 }}>
        <Messages
          key={currentChannel && currentChannel.id}
          currentChannel={currentChannel}
          currentUser={currentUser}
        />
      </Grid.Column>
      <Grid.Column width={4}>
        <MetaPanel />
      </Grid.Column>
    </Grid>
  );
};

export default App;
