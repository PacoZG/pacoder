import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Contact from '.'
import i18n from '../../utils/language/i18nextForTest'

describe('Testing', () => {
  test('Snapshot of the Contact component', () => {
    const rederedHeader = renderer
      .create(
        <BrowserRouter>
          <I18nextProvider i18n={i18n}>
            <Contact />
          </I18nextProvider>
        </BrowserRouter>
      )
      .toJSON()
    expect(rederedHeader).toMatchSnapshot()
  })
})
