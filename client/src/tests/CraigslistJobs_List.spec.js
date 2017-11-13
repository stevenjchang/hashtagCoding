import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import toJson from 'enzyme-to-json'

import CraigslistJobsContainer from '../containers/CraigslistJobsContainer'
import CraigslistJobs_Item from '../components/CraigslistJobs_List'
import { getCraigslistJobs } from '../actions'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
configure({ adapter: new Adapter() });


describe('CraigslistJobs_Item rendering correctly', () => {
  const component = shallow(<CraigslistJobs_Item />)
  const tree = toJson(component)

  it('snapshot matches', () => {
    expect(tree).toMatchSnapshot()
    // expect(tree2).toMatchSnapshot()
  })

});
