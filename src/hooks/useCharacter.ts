import * as React from 'react';
import { CharacterSides } from '../types/CharacterSides'
import { mapSpots } from '../data/mapSpots';

export default function useCharacter() {
  const [spot, setSpot] = React.useState({ x: 4, y: 5 });
  const [side, setSide] = React.useState(<CharacterSides>('down'));

  const moveLeft = () => {
    setSpot(spot => ({
      x: canMove(spot.x - 1, spot.y) ? spot.x - 1 : spot.x,
      y: spot.y
    }));
    setSide('left');
  }

  const moveRight = () => {
    setSpot(spot => ({
      x: canMove(spot.x + 1, spot.y) ? spot.x + 1 : spot.x,
      y: spot.y
    }))
    setSide('right');
  }


  const moveTop = () => {
    setSpot(spot => ({
      x: spot.x,
      y: canMove(spot.x, spot.y - 1) ? spot.y - 1 : spot.y,
    }))
    setSide('top');
  }


  const moveBottom = () => {
    setSpot(spot => ({
      x: spot.x,
      y: canMove(spot.x, spot.y + 1) ? spot.y + 1 : spot.y,
    }))
    setSide('down');
  }

  const canMove = (x: number, y: number) => {
    if(mapSpots[y] !== undefined && mapSpots[x] !== undefined){
      return (mapSpots[y][x] === 1);
    }

    return false;
  }

  return {
    x: spot.x,
    y: spot.y,
    side,
    moveLeft,
    moveRight,
    moveBottom,
    moveTop
  }
} 