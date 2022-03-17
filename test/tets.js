const supertest = require("supertest");
const mocha = require("mocha");

const agent = supertest.agent(server);

describe("This will test status codes 200 and 404", () => {
  it("should return 200", function (done) {
    agent.get("/").expect(200, done);
  });

  it("should return 200", function (done) {
    agent.get("/about").expect(200, done);
  });

  it("should return 404", function (done) {
    agent.get("/no").expect(404, done);
  });
});
