import React from 'react';
import MenuBurger from '../../shared/component/MenuBurger.jsx'

function Layout(props) {
  return(
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
        />
        <link
          rel="stylesheet"
          href="http://localhost:3001/fonts/font-awesome-4.2.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
        />

        <link
          rel="stylesheet"
          href="http://localhost:3001/style.css"
        />

      </head>
      <body>
        <div
          id="app"
          dangerouslySetInnetHTML={{
            __html: props.content,
          }}
        />
        <script src="http://localhost:3001/app.js" />
      </body>
    </html>
  )
}

export default Layout;
