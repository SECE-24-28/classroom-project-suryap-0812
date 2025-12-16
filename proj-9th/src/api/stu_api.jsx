import axios from 'axios';

// Use HTTP (not HTTPS) for a local json-server running on port 3000
export default axios.create({
  baseURL: 'http://localhost:3000',
});


