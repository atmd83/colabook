const app = require('./api/lib/express');
const logger = require('./api/lib/logger');

const PORT = process.env.PORT || 3001;

const {
    NODE_ENV
} = process.env;

// any "required" env vars can be checked for here and fail fast
if(!NODE_ENV) {
  exit;
}



app.listen(PORT, () => 
  logger.info(`api running on env: ${NODE_ENV}: on port :${PORT}`));

module.exports = app; 