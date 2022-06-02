import styled from 'styled-components';

export const Body = styled.main`
  min-height:100vh;
  min-width: 100vw;
  background-color: #404040;
`;


export const Container = styled.main`
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;


export const Map = styled.div`
  width:480px;
  height:480px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: url('/assets/map.png');
`;

// export const Button = styled.div`
//   gap: 15px;
//   display: flex;

//   button {
//     background: transparent;
//     border: none;
//     padding: 10px;
//     width: 30px;
//     height: 30px;
//     cursor: pointer;
//   }

//   button:first-child{
//     background: url('/assets/arrow.svg') no-repeat center;
//   }

//   button:nth-child(2){
//     transform: rotate(180deg);
//     background: url('/assets/arrow.svg') no-repeat center;
//   }

//   button:nth-child(3){
//     transform: rotate(90deg);
//     background: url('/assets/arrow.svg') no-repeat center;
//   }

//   button:nth-child(4){
//     transform: rotate(-90deg);
//     background: url('/assets/arrow.svg') no-repeat center;
//   }
//`;

export const Text = styled.div`
  display:flex;
  justify-content: center;
  color: #fff;
  font-size: 3rem;
  font-family: 'Poppins',sans-serif;
`