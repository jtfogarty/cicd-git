// src/lib/db.js
import Dexie from 'dexie';

// Create a new instance of Dexie
const db = new Dexie('MyDatabase');

// Define a schema for your database
db.version(1).stores({
  gitlab: '++id, username, token', 
  nsg:'++id, url',
  appctx: '++id, main-url',
  dconf: '++id, main-url, libs'
});

// Open the database
db.open().catch((err) => {
  console.error(`Open failed: ${err.stack}`);
});

export default db;
