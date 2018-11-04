import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Comments from './Comments';
describe('<Comments />' , () => {
  it('Renders Comments' , ()=>{
    const wrapper = shallow(<Comments />);
    expect(wrapper).toMatchSnapshot();
  })
});
