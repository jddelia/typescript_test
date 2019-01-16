import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../components/Header';

configure({adapter: new Adapter()});
describe("Header", () => {
    it("Should render Header component", () => {
        let div = document.createElement("div");
        ReactDOM.render(<Header theme="light" />, div);
    });
});
