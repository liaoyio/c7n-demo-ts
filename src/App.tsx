import { Component } from "react";
import { ButtonColor } from "choerodon-ui/pro/lib/button/interface";

import { Button } from "choerodon-ui/pro";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Button color={ButtonColor.primary}>Button</Button>
      </div>
    );
  }
}
