# demo-sonarqube

<!-- prettier-ignore-start -->

[![sonarqube](https://github.com/piecioshka/demo-sonarqube/actions/workflows/sonarqube.yml/badge.svg)](https://github.com/piecioshka/demo-sonarqube/actions/workflows/sonarqube.yml)

<!-- prettier-ignore-end -->

🚁 Demo project showing how SonarQube detects code quality and security issues in JavaScript.

## Video

Follow instructions in this video to set up SonarQube and analyze this project:

<a href="https://www.youtube.com/watch?v=y4L8_Ie8oj8">
  <img src="video-thumbnail.png" alt="SonarQube demo video" width="600">
</a>

## Project structure

```
src/
  auth.js         - authentication module (SQL injection, command injection examples)
  calculator.js   - math utilities (eval usage, code smells examples)
tests/
  auth.test.js
  calculator.test.js
```

## Intentional issues (for SonarQube demo)

| File                | Issue                                   | Type                         |
| ------------------- | --------------------------------------- | ---------------------------- |
| `src/auth.js`       | SQL query built by string concatenation | Security - SQL Injection     |
| `src/auth.js`       | Hardcoded default password `admin123`   | Security - Sensitive Data    |
| `src/auth.js`       | `exec()` called with unsanitized input  | Security - Command Injection |
| `src/calculator.js` | Use of `eval()`                         | Security - Code Injection    |
| `src/calculator.js` | Duplicate null/undefined check          | Bug - Copy-paste error       |
| `src/calculator.js` | Unused first assignment in `square()`   | Code Smell - Dead code       |
| `src/calculator.js` | Empty `catch` block in `parseNumber()`  | Code Smell - Silent error    |

## Usage

```bash
npm install
npm run test
npm run test:coverage
```

## License

[The MIT License](https://piecioshka.mit-license.org) @ 2026
