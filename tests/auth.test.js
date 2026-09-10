const { login, runReport } = require("../src/auth");

jest.mock("child_process", () => ({ exec: jest.fn() }));

const { exec } = require("child_process");

describe("login", () => {
  describe("query construction", () => {
    test("returns a SQL query string", () => {
      const result = login("alice", "secret");
      expect(typeof result).toBe("string");
    });

    test("includes the provided username in the query", () => {
      const result = login("alice", "secret");
      expect(result).toContain("alice");
    });

    test("includes the provided password in the query", () => {
      const result = login("alice", "secret");
      expect(result).toContain("secret");
    });

    test("returns expected query for valid credentials", () => {
      const result = login("alice", "secret");
      expect(result).toBe(
        "SELECT * FROM users WHERE name='alice' AND password='secret'",
      );
    });

    test("handles username with spaces", () => {
      const result = login("john doe", "pass123");
      expect(result).toContain("john doe");
    });

    test("handles numeric-like username", () => {
      const result = login("12345", "pass");
      expect(result).toContain("12345");
    });

    test("uses DEFAULT_PASSWORD when no password given", () => {
      const result = login("alice", "");
      expect(result).toContain("admin123");
    });
  });
});

describe("runReport", () => {
  beforeEach(() => jest.clearAllMocks());

  test("calls exec with the username appended to the command", () => {
    runReport("alice");
    expect(exec).toHaveBeenCalledWith("generate-report.sh alice");
  });

  test("calls exec once per invocation", () => {
    runReport("bob");
    expect(exec).toHaveBeenCalledTimes(1);
  });
});
