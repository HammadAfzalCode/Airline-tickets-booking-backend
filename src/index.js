const express = require('express');
const { ServerConfig, Logger } = require('./config');

const apiRoutes = require('./routes');
const PORT = ServerConfig.PORT;
const app = express();

app.use('/api', apiRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  Logger.info(`Server is running on port ${PORT}`, {});
});
