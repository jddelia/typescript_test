import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Container from '../components/Container';

configure({adapter: new Adapter()});
describe("Container", () => {
    it("Should render Container component", () => {
        let div = document.createElement("div");
        ReactDOM.render(<Container theme="light" />, div);
    });
});
