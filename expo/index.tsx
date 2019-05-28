import * as React from "react";
import * as ReactDOM from "react-dom";
import { moco } from "../src/index";

class MocoExpo extends React.Component {
    public componentDidMount() {
        const mMngr = moco("#expo");
    }

    public render() {
        return (
            <div id="expo" style={{ height: 250, margin: "0 auto" }}></div>
        );
    }
}

ReactDOM.render(
    <MocoExpo/>,
    document.getElementById("moco"),
);
