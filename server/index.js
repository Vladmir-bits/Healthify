const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Import routes
const healthRecordsRoutes = require('./routes/healthRecords');
const marketplaceRoutes = require('./routes/marketplace');
const userRoutes = require('./routes/user');

// Middleware
app.use(express.json());

// Use routes
app.use('/api/health-records', healthRecordsRoutes);
app.use('/api/marketplace', marketplaceRoutes);
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
