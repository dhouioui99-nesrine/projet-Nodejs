const Bull = require('bull');
const redis = require('ioredis');
const notificationQueue = new Bull('notificationQueue', {
  redis: { host: 'localhost', port: 6379 } // Configuration de Redis
});

module.exports = notificationQueue;
