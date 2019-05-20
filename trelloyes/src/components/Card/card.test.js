import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Card from "./Card";
describe("Card component", () => {
  it("renders without crashing", () => {
    // first create a DOM element to render the component into
    const div = document.createElement("div");
    //render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(<Card title="First Card" content="lorem ipsum" />, div);
    //clean up code
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders the UI as expected", () => {
    const tree = renderer
      .create(<Card title="First Card" content="lorem ipsum" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
