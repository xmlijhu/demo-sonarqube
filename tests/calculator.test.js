const { divide, grade, square } = require("../src/calculator");

describe("divide", () => {
  describe("normal division", () => {
    test("divides two positive numbers", () => {
      expect(divide(10, 2)).toBe(5);
    });

    test("divides with a negative dividend", () => {
      expect(divide(-10, 2)).toBe(-5);
    });

    test("divides with a negative divisor", () => {
      expect(divide(10, -2)).toBe(-5);
    });

    test("divides both negative numbers", () => {
      expect(divide(-10, -2)).toBe(5);
    });

    test("divides resulting in a float", () => {
      expect(divide(1, 3)).toBeCloseTo(0.3333, 4);
    });

    test("divides zero by a number", () => {
      expect(divide(0, 5)).toBe(0);
    });
  });

  describe("division by zero", () => {
    test("returns null when dividing by zero", () => {
      expect(divide(10, 0)).toBeNull();
    });

    test("returns null when dividing zero by zero", () => {
      expect(divide(0, 0)).toBeNull();
    });
  });

  describe("null and undefined handling", () => {
    test("returns 0 when first argument is null", () => {
      expect(divide(null, 5)).toBe(0);
    });

    test("returns 0 when first argument is undefined", () => {
      expect(divide(undefined, 5)).toBe(0);
    });

    test("returns 0 when second argument is undefined", () => {
      expect(divide(10, undefined)).toBe(0);
    });

    test("returns 0 when both arguments are null", () => {
      expect(divide(null, null)).toBe(0);
    });

    test("returns 0 when both arguments are undefined", () => {
      expect(divide(undefined, undefined)).toBe(0);
    });
  });
});

describe("grade", () => {
  test("returns A+ for high score with good attendance and participation", () => {
    expect(grade(95, 90, true, false)).toBe("A+");
  });

  test("returns A for high score with good attendance but no participation", () => {
    expect(grade(92, 85, false, false)).toBe("A");
  });

  test("returns A for score >= 95 with low attendance", () => {
    expect(grade(96, 70, false, false)).toBe("A");
  });

  test("returns B+ for score 90-94 with low attendance", () => {
    expect(grade(91, 70, false, false)).toBe("B+");
  });

  test("returns B for score 80-89 with good attendance", () => {
    expect(grade(85, 85, false, false)).toBe("B");
  });

  test("returns B for score 80-89, attendance 60-79, with participation", () => {
    expect(grade(82, 65, true, false)).toBe("B");
  });

  test("returns C+ for score 80-89, attendance 60-79, no participation", () => {
    expect(grade(80, 65, false, false)).toBe("C+");
  });

  test("returns C for score 80-89 with very low attendance", () => {
    expect(grade(80, 50, false, false)).toBe("C");
  });

  test("returns C+ for score 70-79 with extra credit", () => {
    expect(grade(75, 50, false, true)).toBe("C+");
  });

  test("returns C for score 70-79 without extra credit", () => {
    expect(grade(70, 50, false, false)).toBe("C");
  });

  test("returns F for score below 70", () => {
    expect(grade(65, 90, true, true)).toBe("F");
  });
});

describe("square", () => {
  test("returns square of a positive number", () => {
    expect(square(4)).toBe(16);
  });

  test("returns square of a negative number", () => {
    expect(square(-3)).toBe(9);
  });

  test("returns 0 for 0", () => {
    expect(square(0)).toBe(0);
  });

  test("returns 1 for 1", () => {
    expect(square(1)).toBe(1);
  });
});
