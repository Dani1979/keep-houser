import http from 'http';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { ServerRouter, createServerRenderContext } from 'react-router'
import express from 'express'
import Pages from './pages/containers/Page.jsx';
import Layout from './pages/components/Layout.jsx';

// creamos la variable static para es servidor de estaticos
var appStatics = new express();

function requestHandler(request, response){
  const context = createServerRenderContext()
  let html = renderToString(
    <ServerRouter location={request.url} context={context}>
      <Pages/>
    </ServerRouter>
  )

  const result = context.getResult();

  response.setHeader('Content-Type', 'text/html');
  // Set CORS headers
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Request-Method', '*');
  response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  response.setHeader('Access-Control-Allow-Headers', '*');
  if ( request.method === 'OPTIONS' ) {
    response.writeHead(200);
    response.end();
    return;
  }

  if (result.redirect) {
    response.writeHead(301, {
      Location: result.redirect.pathname,
    });
  }

  if (result.missed) {
    response.writeHead(404);

    html = renderToString(
      <ServerRouter location={request.url} context={context}>
        <Pages />
      </ServerRouter>
    );
  }

  response.write(
    renderToStaticMarkup(
      <Layout
        title="Aplicación"
        content={html}
      />
    )
  );
  response.end();
}

const server = http.createServer(requestHandler)

server.listen(3000);


// cofiguramos express y levantamos el servidor de express

//Utilizamos el middleware para setear la cabecera con las propiedades Access-Control-Allow-Origin
//Con esto permitimos que tanto el servidor de de backend para realizar el render-side-server como el de estaticos se puedan comunicar

appStatics.use(function(req,res,next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
})

// indicamos el servidor de estaticos
appStatics.use(express.static('./built/statics'));

appStatics.listen(3001, function() {
  console.log('Servidor de estaticos en el puerto 3001')
})
