import HomePage from "./HomePage";
import Enzyme from 'enzyme';
import '../../setupTests';
import { BrowserRouter, Routes } from "react-router-dom";

it('HomePage renders without crashing', () => {
    const wrapper = Enzyme.shallow(
        <BrowserRouter>
            <Routes>
                <HomePage />
            </Routes>
        </BrowserRouter>
    )
    //   expect(wrapper.contains(img)).toBeEmptyDOMElement();
})