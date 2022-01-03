import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from '../utils/language/i18nextForTest'
import App from '.'

describe('Testing header', () => {
  test('Snapshot of the Main App component', () => {
    const rederedHeader = renderer
      .create(
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      )
      .toJSON()
    expect(rederedHeader).toMatchSnapshot()
  })
})
