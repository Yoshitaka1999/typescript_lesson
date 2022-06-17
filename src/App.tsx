import React from 'react';
import logo from './logo.svg';
import './App.css';

type PROFILE = {
  age: number;
  city: string;
}

let msg: string = "Hi";
let msg2: typeof msg;

let animal = { cat: "small cat" };
let newAnimal: typeof animal = { cat: "big cat" }

type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary"

const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};

let keySports: keyof typeof SPORTS;
keySports = "soccer";

enum OS {
  Windows,
  Mac,
  Linux,
}
interface PC {
  id: number;
  OSType: OS;
}

const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
};

const PC2: PC = {
  id: 2,
  OSType: OS.Mac,
};




function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
