import { createAvatar } from "@dicebear/core";
import { adventurer } from "@dicebear/collection";

const seed = [
  "Callie",
  "Lucky",
  "Cuddles",
  "Socks",
  "Bob",
  "Cookie",
  "Miss kitty",
  "Sugar",
  "Felix",
  "Casper",
  "Loki",
  "Missy",
  "Garfield",
  "Sam",
  "Angel",
  "Peanut",
  "Sophie",
  "Princess",
  "Bandit",
  "Maggie",
];

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateAvatar() {
  const avatar = createAvatar(adventurer, {
    seed: seed[getRandomInt(0, seed.length - 1)],
  });

  return avatar.toDataUriSync();
}
