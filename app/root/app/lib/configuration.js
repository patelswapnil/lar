'use strinct';

const fs = require('fs'),
      path = require('path'),
      nconf = require('nconf');


class Configuration {

    /**
     * constructor
     * @param {String} dir      directory path containing application config
     * @return {Object}         config instance
     */
    constructor(dir) {

        let dirPath = dir ? dir : path.join(process.cwd(), 'config');

        if (!fs.existsSync(dirPath)) {
            throw new Error('config file for the application not found.');
        }

        this.config = new nconf.Provider();
        this.config.use('memory');

        // load config object from config file
        this.config.defaults(require(path.resolve(dirPath, 'config.js')));

        // set NODE_ENV to development as defualt value
        this.config.set(process.env.NODE_ENV || 'development', true);

        // always prefer ENV variables, over those loaded above
        this.config.env();

    }

    /**
     * Set config keyed value
     * @param  {String} key   Key name
     * @param  {String} value Value
     */
    set(key, value) {
        this.config.set(key, value);
    }

    /**
     * Get config keyed value
     * @param  {String} key   Key name
     * @return {String}     value
     */
    get(key) {
        return this.config.get(key);
    }

}

module.exports = Configuration;
