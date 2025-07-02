import axios from "axios";
import _ from "lodash";

// class Player {
//   readonly first: string;
//   readonly last: string;

//   protected _score = 0; //infers + can accessed in a child class i.e. SuperPlayer
//   public numLoves: number = 10;
//   private prevScores: number = 0; // it can only be accessed within the class

//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }
//   get fullName(): string {
//     return `${this.first} ${this.last}`;
//   }

//   get score(): number {
//     return this._score;
//   }

//   set score(newScore: number) {
//     this.score = newScore;
//   }
// }

// const playerOne = new Player("Sarah", "Hackett");

// // SHORTCUTS
// class ShortcutPlayer {
//   constructor(public first: string, public last: string) {}
// }

// const shortcutPlayerOne = new ShortcutPlayer("Lazy", "Player");

// class SuperPlayer extends Player {
//   public isAdmin: boolean = true;
//   maxScore() {
//     this._score = 1000000;
//   }
// }

// // INTERFACES
// interface Visitor {
//   name: string;
// }

// class Watcher implements Visitor {
//   constructor(public name: string) {}
// }

// const anonWatcher = new Watcher("David");

///// AXIOS /////

// https://jsonplaceholder.typicode.com/users

///// AXIOS ///////

interface AnotherUser {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// Single User end point request. Uses the Another User interface to define the structure of the response.
axios
  .get<AnotherUser>("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    console.log("Successfully fetched users");
    const { data } = res;
    data;

    printAnotherUser(data);
  })
  .catch((err) => {
    console.log(err);
  });

/// Multiple users. Here we tell Axios we're expecting an array of AnotherUser objects to come back.
axios
  .get<AnotherUser[]>("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log("Successfully fetched users");
    res.data.forEach(printAnotherUser);
  })
  .catch((err) => {
    console.log(err);
  });

function printAnotherUser(user: AnotherUser) {
  console.log(user.name);
}

////// LODASH - DOESN'T HAVE TYPESCRIPT TYPE DEFINITIONS - NEED TO INSTALL SEPERATELY - DEFINITELYTYPED VIA @TYPES/ /////

_.sample([1, 2, 3, 4, 5]);
