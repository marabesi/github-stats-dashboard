import { mount } from '@vue/test-utils'
import InputText from './InputText.vue'

const VALID_SEARCH_STRING = 'user/myrepo'
const INVALID_SEARCH_STRING = 'myrepo'

describe('InputText', () => {
  test('should fire event with search text using user/repo pattern', () => {
    const wrapper = mount(InputText)
    const inputText = wrapper.find('input')
    inputText.setValue(VALID_SEARCH_STRING)

    wrapper.find('button').trigger('click')

    expect(wrapper.emitted().onSearch).toEqual([[VALID_SEARCH_STRING]])
  })

  test('should fire event with search text on form submit', () => {
    const wrapper = mount(InputText)
    const inputText = wrapper.find('input')

    inputText.setValue(VALID_SEARCH_STRING)

    wrapper.find('form').trigger('submit')

    expect(wrapper.emitted().onSearch).toEqual([[VALID_SEARCH_STRING]])
  })

  test('should not fire event when there is no text', () => {
    const wrapper = mount(InputText)
    const inputText = wrapper.find('input')

    inputText.setValue('')

    wrapper.find('form').trigger('submit')

    expect(wrapper.emitted().onSearch).toBeFalsy()
  })

  test('should not fire event when there is no / in the search string', () => {
    const wrapper = mount(InputText)
    const inputText = wrapper.find('input')

    inputText.setValue(INVALID_SEARCH_STRING)

    wrapper.find('form').trigger('submit')

    expect(wrapper.emitted().onSearch).toBeFalsy()
  })

  test('should not fire event if the text has not changed', () => {
    const wrapper = mount(InputText)
    const inputText = wrapper.find('input')

    inputText.setValue(VALID_SEARCH_STRING)

    wrapper.find('form').trigger('submit')

    expect(wrapper.emitted().onSearch).toEqual([[VALID_SEARCH_STRING]])

    // refs https://github.com/vuejs/vue-test-utils/issues/1252
    wrapper._emitted['onSearch'] = null

    wrapper.find('form').trigger('submit')

    expect(wrapper.emitted().onSearch).toBeFalsy()
  })
})