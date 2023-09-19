import React from 'react';
import { NumberBtn } from './style/btnStyle';

export default function btnNumber({ color, text }) {
  return <NumberBtn color={color}>{text}</NumberBtn>;
}
