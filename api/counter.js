const fs = require('fs').promises;
const path = require('path');

// Simple file-based storage for visit count
const COUNTER_FILE = path.join(process.cwd(), 'data', 'counter.json');

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.dirname(COUNTER_FILE);
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Get current visit count
async function getVisitCount() {
  try {
    await ensureDataDir();
    const data = await fs.readFile(COUNTER_FILE, 'utf8');
    const counter = JSON.parse(data);
    return counter.count || 0;
  } catch (error) {
    // If file doesn't exist or is invalid, return 0
    return 0;
  }
}

// Update visit count
async function updateVisitCount() {
  try {
    await ensureDataDir();
    const currentCount = await getVisitCount();
    const newCount = currentCount + 1;
    
    await fs.writeFile(COUNTER_FILE, JSON.stringify({ count: newCount }));
    return newCount;
  } catch (error) {
    console.error('Error updating visit count:', error);
    throw error;
  }
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET' || req.method === 'POST') {
    try {
      const updatedCount = await updateVisitCount();
      res.status(200).json({ count: updatedCount });
    } catch (error) {
      console.error('Error in counter API:', error);
      res.status(500).json({ error: 'Failed to update visit count' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
