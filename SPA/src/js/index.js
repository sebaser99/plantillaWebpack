import nuevoTexto from "./dev.js"

nuevoTexto()

if(module.hot) {
    module.hot.accept('./dev.js', function () { 
    nuevoTexto()
    })

}


