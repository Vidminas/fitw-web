import React from "react";
import Phaser from "phaser";
import { IonPhaser } from "@ion-phaser/react";
import MainScene from "../game/MainScene";

const Game: React.FC<{}> = () => {
  const [initialize, setInitialize] = React.useState(true);
  const [game, setGame] = React.useState({
    width: "100%",
    height: "100%",
    type: Phaser.AUTO,
    scene: MainScene,
  });

  return <IonPhaser game={game} initialize={initialize} />;
};

export default Game;
