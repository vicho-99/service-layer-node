const config = require("./src/configurations/server");
const app = require('./src/app');

app.listen(config.PORT , config.HOST , console.log('run..'));                        