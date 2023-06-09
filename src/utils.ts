const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || '12345';

export const DB_URI = `mongodb://${DB_HOST}:${DB_PORT}/notification`;
