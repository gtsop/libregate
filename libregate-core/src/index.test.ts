import { expect, test } from 'vitest';
import { App } from './index';

test("has an app that can store a goal", () => {

  const app = new App();

  app.setGoal("Conquer the world");

  expect(app.queryGoal()).toEqual("Conquer the world");
});
