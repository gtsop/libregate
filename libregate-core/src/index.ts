class Goal {
  title: string;
  constructor(title: string) {
    this.title = title;
  }
}

export class App {
  private _goal: Goal;

  constructor() {
    this._goal = new Goal('');
  }

  setGoal(goal: string) {
    this._goal = new Goal(goal);
  }

  queryGoal() {
    return this._goal.title;
  }
};

export const app = new App();

