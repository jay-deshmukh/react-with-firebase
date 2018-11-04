import React from 'react';
import ReactDOM from 'react-dom';
import { shallow , mount , render } from 'enzyme';
import MoviesTable from './Movies_Table';

describe('<MoviesTable />' , () => {
  it('Renders Movies' , ()=>{
    const wrapper = shallow(<MoviesTable key={jest}/>);
    expect(wrapper).toMatchSnapshot();
  })
})
