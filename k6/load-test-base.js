import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
};

const BASE_URL = 'http://uceconnectqa.programacionwebuce.net/api/v1';

export default function () {
  // Test frontend
  const frontendRes = http.get('http://uceconnectqa.programacionwebuce.net/');
  check(frontendRes, {
    'frontend status 200': (r) => r.status === 200,
    'frontend response < 2000ms': (r) => r.timings.duration < 2000,
  });

  // Test backend register endpoint
  const payload = JSON.stringify({
    name: 'Test User',
    email: `test${Date.now()}@uce.edu.ec`,
    password: 'Test1234!',
  });

  const params = { headers: { 'Content-Type': 'application/json' } };
  const registerRes = http.post(`${BASE_URL}/auth/register`, payload, params);
  check(registerRes, {
    'register status not 500': (r) => r.status !== 500,
    'register response < 3000ms': (r) => r.timings.duration < 3000,
  });

  sleep(1);
}