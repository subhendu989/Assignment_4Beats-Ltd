# 📌 API Testing Assignment – Reqres API

## 🔍 Overview

This repository contains an API testing assignment using the public **Reqres API**. The objective is to validate REST API functionality through **manual testing with Postman** and **automated API testing using Playwright**, following real-world QA practices.

---

## 🛠 Tools & Technologies

* **Postman** – Manual API testing
* **Playwright** – API test automation
* **JavaScript** – Test scripting
* **Reqres API** – Test API endpoints

---

## ✅ Test Scenarios Covered

* GET users list with valid and invalid query parameters
* GET users list with edge cases (page = 0, invalid page)
* POST create user with valid data
* POST create user with missing fields
* Status code validation (200, 201, 403)
* Response body validation

---

## ⚠️ Note on 403 Forbidden

Some API requests may return **403 Forbidden** due to server-side restrictions of the public API. This behavior is handled safely in both Postman and Playwright tests.

---

## ▶️ How to Run Playwright Tests

```bash
npm install
npx playwright test
```

---

## 📂 Project Structure

```
tests/
 └── reqres-api.spec.js
```

## 🎯 Outcome
This assignment demonstrates practical knowledge of **API testing, test case design, validation logic, and automation using Playwright**, suitable for an entry-level SQA/QA Engineer role.

