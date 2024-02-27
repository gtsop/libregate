class App {
  private _goal: string;

  constructor() {
    this._goal = '';
  }

  setGoal(goal: string) {
    this._goal = goal;
  }

  queryGoal() {
    return this._goal;
  }
};

export const app = new App();
