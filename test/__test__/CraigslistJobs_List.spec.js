import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import CraigslistJobsContainer from '../../client/src/containers/CraigslistJobsContainer'
import CraigslistJobs_Item from '../../client/src/components/CraigslistJobs_List'
import { getCraigslistJobs } from '../../client/src/actions'

describe('Jest 1st test', () => {
  it('first test', () => {
    expect(true).toEqual(true)
  })
})
