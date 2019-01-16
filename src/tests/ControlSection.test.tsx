import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ControlSection from '../components/ControlSection';

configure({adapter: new Adapter()});
describe("ControlSection", () => {
    it("Should render ControlSection component", () => {
        let div = document.createElement("div");
        ReactDOM.render(<ControlSection theme="light" boxTheme="box boxLight" />, div);
    });

    /* describe("When button toggled", () => {
        let wrapper: any;

        beforeEach(() => {
            wrapper = shallow(
                <ControlSection theme="light" boxTheme="box boxLight" />
            );
            

            const toggleBtn = wrapper.find("inner-btn");
            toggleBtn.simulate("click");
        });

        it("Should add 'off/on' to button div", () => {
            expect(wrapper.hasClass("on")).toBe(true);
        });
    }); */
});
