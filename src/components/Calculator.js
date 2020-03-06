import React from 'react'

const Calculator = () => {
  const [ numOne, setNumOne ] = React.useState(0);
  const [ numTwo, setNumTwo ] = React.useState(0);
  
  return ( 
    <div id="Calculator">
      <div>Calculator</div>
      <form>
        Add:
        <input 
          type='text'
          id='numOne'
          defaultValue={numOne}
        />
        <input 
          type='text'
          id='numTwo'
          defaultValue={numTwo}
        />
        <input 
          type='submit'
          id='calcButton'
          value='='
        />
      </form> 
    </div>
  );
}

export default Calculator;