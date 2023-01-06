import { shallowMount } from '@vue/test-utils'
import HeaderLogged from '.'
import { routes } from '../../router'

import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory('/'),
  routes
})

const mockStore = { currentUser: {} }
jest.mock('../../hooks/useStore', () => {
  return () => {
    return mockStore
  }
})

describe('<HeaderLogged />', () => {
  it('should render header logged correctly', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render 3 dots when there\'s not user logged', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    })

    const buttonLogout = wrapper.find('#logout-button')
    expect(buttonLogout.text()).toBe('...')

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render user anem when there\'s not user logged', async () => {
    router.push('/')
    await router.isReady()
    mockStore.currentUser.name = 'Igor'
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    })

    const buttonLogout = wrapper.find('#logout-button')
    expect(buttonLogout.text()).toBe('Igor (sair)')

    expect(wrapper.html()).toMatchSnapshot()
  })
})
