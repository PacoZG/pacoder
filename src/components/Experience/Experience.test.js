import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../utils/language/i18nextForTest'
import renderer from 'react-test-renderer'
import Experience from '.'

describe('Testing header', () => {
  test('Snapshot of the Footer component', () => {
    const rederedHeader = renderer
      .create(
        <BrowserRouter>
          <I18nextProvider i18n={i18n}>
            <Experience />
          </I18nextProvider>
        </BrowserRouter>
      )
      .toJSON()
    expect(rederedHeader).toMatchSnapshot()
  })
})
