import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import i18n from '../../utils/language/i18nextForTest'
import Education from './Education'
import WhoIAm from './WhoIAm'

describe('Testing', () => {
  test('Snapshot of the Education component', () => {
    const redered = renderer
      .create(
        <BrowserRouter>
          <I18nextProvider i18n={i18n}>
            <Education />
          </I18nextProvider>
        </BrowserRouter>
      )
      .toJSON()
    expect(redered).toMatchSnapshot()
  })

  test('Snapshot of the WhoIAm component', () => {
    const redered = renderer
      .create(
        <BrowserRouter>
          <I18nextProvider i18n={i18n}>
            <WhoIAm />
          </I18nextProvider>
        </BrowserRouter>
      )
      .toJSON()
    expect(redered).toMatchSnapshot()
  })
})
