import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { IconContext } from 'react-icons'

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link rel='shortcut icon' href='/outdoorsLogo.png' />

            <link
              rel='apple-touch-icon'
              sizes='180x180'
              href='/outdoorsLogo.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='96x96'
              href='/outdoorsLogo.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='/outdoorsLogo.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='16x16'
              href='/outdoorsLogo.png'
            />

            <link rel='manifest' href='/manifest.json' />
          </Head>

          <body>
            <script src='noflash.js' />

            <Main />

            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
