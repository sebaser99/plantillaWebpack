import router from "./routes/routes"

router();

if(module.hot) {
    module.hot.accept('./routes/routes.js', function () { 
    router()
    })

}


