import './App.css';
import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function App() {
  return (
 <div>
    <Button onClick={(e) => {
      e.preventDefault();
      window.location.href='https://github.com/RamosDc';
      }}>GitHub</Button>
      <Button primary onClick={(e) => {
      e.preventDefault();
      window.location.href='https://utd.edu.mx/';
      }}>UTD</Button>
      <Button onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.facebook.com/HRRS7';
      }}>Facebook</Button>
  </div>
  );
}

export default App;
