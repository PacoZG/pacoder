import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import i18n from '../utils/language/i18nextForTest'
import Footer from './Footer'

describe('Testing', () => {
  test('Snapshot of the Footer component', () => {
    const redered = renderer
      .create(
        <BrowserRouter>
          <I18nextProvider i18n={i18n}>
            <Footer />
          </I18nextProvider>
        </BrowserRouter>
      )
      .toJSON()
    expect(redered).toMatchSnapshot()
  })
})
