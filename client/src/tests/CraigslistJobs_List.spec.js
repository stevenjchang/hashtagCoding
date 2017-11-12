import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import CraigslistJobsContainer from '../containers/CraigslistJobsContainer'
import CraigslistJobs_Item from '../components/CraigslistJobs_List'
import { getCraigslistJobs } from '../actions'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
configure({ adapter: new Adapter() });

describe('Jest 1st test', () => {
  it('first test', () => {
    expect(true).toEqual(true)
  })
})

describe('Addition', () => {
  const component = shallow(<CraigslistJobs_Item />)
  // console.log('===>')
  // console.log(component)
});

//expect array store.CraigslisJobsContainer to be array?
//expect array[0] toHaveProperty(keyPath, value)