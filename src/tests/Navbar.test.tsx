import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navbar from '../components/Navbar';

configure({adapter: new Adapter()});
describe("Navbar", () => {
    it("Should render Navbar component", () => {
        let div = document.createElement("div");
        ReactDOM.render(<Navbar theme="light" />, div);
    });
});
