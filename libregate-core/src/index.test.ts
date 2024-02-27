import { app } from './index';

it("has an app that can store a goal", () => {
  app.setGoal("Conquer the world");

  expect(app.queryGoal()).toEqual("Conquer the world");
});
