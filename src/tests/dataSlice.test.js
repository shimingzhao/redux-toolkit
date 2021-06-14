import data, { fetchStarted, initialState } from "../slices/dataSlice";

describe("data reducer", () => {
  it("should handle initial state", () => {
    expect(data(undefined, {})).toEqual({
      isFetching: false,
      data: {},
      error: null
    });
  });

  it("should handle fetchStarted", () => {
    expect(data(initialState, { type: fetchStarted.type })).toEqual({
      data: {},
      isFetching: true,
      error: null
    });
  });
});
