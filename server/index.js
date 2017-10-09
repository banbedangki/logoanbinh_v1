var express      = require("express");
var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');
var swagger      = require('swagger-tools');
var path =  require('path');
var fs           = require('fs');
var app          = express();

//get routes
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());

// Swagger get json()
var LoadSwagger = () => {
    var root = require('./app/apis/swagger.json');
    var pathFile = path.join(__dirname, '/app/apis/paths');
    var pathfiles = fs.readdirSync(pathFile);
    pathfiles.forEach((file) => {
        var pathJson = require('./app/apis/paths/' + file);
        Object.keys(pathJson.paths)
            .forEach((path) => {
                root.paths[path] = pathJson.paths[path];
            });
    });
    var definitionFile = path.join(__dirname, '/app/apis/definitions');
    var definitionfiles = fs.readdirSync(definitionFile);
    definitionfiles.forEach((file) => {
        var definitionJson = require('./app/apis/definitions/' + file);
        Object.keys(definitionJson.definitions)
            .forEach((definition) => {
                root.definitions[definition] = definitionJson.definitions[definition];
            });
    });
    return root;
};

var swaggerObj = LoadSwagger();
var options = {
    swaggerUi: '/swagger.json',
    controllers: __dirname + '/app/controllers'
};

swagger.initializeMiddleware(swaggerObj, (middleware) => {
    app.use(middleware.swaggerMetadata());
    app.use(middleware.swaggerSecurity({
        oauth2: function (req, def, scopes, callback) {
        // Do real stuff here
        }
    }));
    app.use(middleware.swaggerRouter(options));
    app.use(middleware.swaggerUi());

    // http.listen(app.get('port'),() => {
    //     console.log(link: http://localhost:${app.get('port')}/api/... => Apis of DoraemonCare);
    //     console.log(link: http://localhost:${app.get('port')}/docs => Document Apis);
    //     console.log(link: http://localhost:${app.get('port')}/api-docs => Resource Listing JSON)
    // });
    app.listen(3000);
});
