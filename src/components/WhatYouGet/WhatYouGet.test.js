import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import i18n from '../../utils/language/i18nextForTest'
import Skills from './Skills'
import Strenghts from './Strenghts'

describe('Testing Working skill and experience page', () => {
  test('Snapshot of the Skills component', () => {
    const redered = renderer
      .create(
        <BrowserRouter>
          <I18nextProvider i18n={i18n}>
            <Skills />
          </I18nextProvider>
        </BrowserRouter>
      )
      .toJSON()
    expect(redered).toMatchSnapshot()
  })

  test('Snapshot of the Strenghts component', () => {
    const redered = renderer
      .create(
        <BrowserRouter>
          <I18nextProvider i18n={i18n}>
            <Strenghts />
          </I18nextProvider>
        </BrowserRouter>
      )
      .toJSON()
    expect(redered).toMatchSnapshot()
  })
})
