
module.exports = {
    'NODE_ENV': process.env.NODE_ENV || 'development',
    'appTitle': process.env.APP_TITLE || 'lar',
    'appPort': process.env.APP_PORT || '4000',
    'dbUrl': process.env.DB_URL || 'mongodb://db.repcoservice.local:27017/lar'
}
