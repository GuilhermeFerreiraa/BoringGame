import styled from 'styled-components';

export const Container = styled.div<
{
  left: number,
  top: number,
  size: number,
  sideSpot: number
}>
`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  position: relative;
  background-image: url('/assets/char.png');
  background-position: 0px ${props => props.sideSpot}px;
`;