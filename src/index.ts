class Player {
  readonly first: string;
  readonly last: string;

  protected _score = 0; //infers + can accessed in a child class i.e. SuperPlayer
  public numLoves: number = 10;
  private prevScores: number = 0; // it can only be accessed within the class

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    this.score = newScore;
  }
}

const playerOne = new Player("Sarah", "Hackett");

// SHORTCUTS
class ShortcutPlayer {
  constructor(public first: string, public last: string) {}
}

const shortcutPlayerOne = new ShortcutPlayer("Lazy", "Player");

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 1000000;
  }
}

// INTERFACES
interface Visitor {
  name: string;
}

class Watcher implements Visitor {
  constructor(public name: string) {}
}

const anonWatcher = new Watcher("David");
