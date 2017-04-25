var app = require('./app');

app.then( obj => {
    obj.startServer();
})
.catch(err => {
    throw new Error(err);
});
