import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import renderer from 'react-test-renderer'
import i18n from '../../utils/language/i18nextForTest'
import FreelanceMainPage from './FreelanceMainPage'

describe('Testing', () => {
  test('Snapshot of the Header component', () => {
    const rederedHeader = renderer
      .create(
        <BrowserRouter>
          <I18nextProvider i18n={i18n}>
            <FreelanceMainPage />
          </I18nextProvider>
        </BrowserRouter>
      )
      .toJSON()
    expect(rederedHeader).toMatchSnapshot()
  })
})
