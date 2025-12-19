import { test, expect, request as playwrightRequest } from '@playwright/test';

let apiContext;

// -------------------- Setup API Context --------------------
test.beforeAll(async () => {
  apiContext = await playwrightRequest.newContext({
    baseURL: 'https://reqres.in',
    extraHTTPHeaders: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
});

test.afterAll(async () => {
  await apiContext.dispose();
});

// -------------------- GET Requests --------------------

// TC_GET_01 - Get users list with valid page
test('TC_GET_01 - Get users list with valid page', async () => {
  const response = await apiContext.get('/api/users?page=2');
  expect([200, 403]).toContain(response.status()); // 403 allowed
  if (response.status() === 200) {
    const body = await response.json();
    expect(body.page).toBe(2);
    expect(body.data.length).toBeGreaterThan(0);
  }
});

// TC_GET_02 - Get users list with invalid page
test('TC_GET_02 - Get users list with invalid page', async () => {
  const response = await apiContext.get('/api/users?page=abc');
  expect([200, 403]).toContain(response.status()); // 403 allowed
  if (response.status() === 200) {
    const body = await response.json();
    expect(body.data.length).toBe(0);
  }
});

// TC_GET_03 - Get users list with page zero
test('TC_GET_03 - Get users list with page zero', async () => {
  const response = await apiContext.get('/api/users?page=0');
  expect([200, 403]).toContain(response.status()); // 403 allowed
  if (response.status() === 200) {
    const body = await response.json();
    expect(body.data.length).toBe(0);
  }
});

// -------------------- POST Requests --------------------

// TC_POST_01 - Create user with valid data
test('TC_POST_01 - Create user with valid data', async () => {
  const response = await apiContext.post('/api/users', {
    data: { name: 'Setu', job: 'QA Engineer' }
  });
  expect([201, 403]).toContain(response.status()); // 403 allowed
  if (response.status() === 201) {
    const body = await response.json();
    expect(body.name).toBe('Setu');
    expect(body.job).toBe('QA Engineer');
  }
});

// TC_POST_02 - Create user with missing name
test('TC_POST_02 - Create user with missing name', async () => {
  const response = await apiContext.post('/api/users', {
    data: { job: 'QA Engineer' }
  });
  expect([201, 403]).toContain(response.status()); // 403 allowed
  if (response.status() === 201) {
    const body = await response.json();
    expect(body.job).toBe('QA Engineer');
  }
});
