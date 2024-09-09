const logger = (req, res, next) => {
    const currentDate = new Date();
    console.log(`[${currentDate.toISOString()}] ${req.method} ${req.originalUrl}`);
    next();
  };
  
  module.exports = logger;
  