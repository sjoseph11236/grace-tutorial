import React from 'react';
import { render, prettyDOM,  fireEvent } from '@testing-library/React';
import { add, subtract } from '../utils/calculations';
import Calculator from '../Calculator';

describe('The Calculator component', () => { 
  describe('Bussiness logic', () => {
    // it is the description 
      it('the add function adds two numbers together', () => { 
        expect(add(1,3)).toBe(4);
        // toBe is matcher 
        // expect is assertion
        expect(add(-1,3)).toBe(2);
      });

      it('the subtract function subtracts two numbers', () => { 
        expect(subtract(3, 1)).toBe(2);
        console.log(subtract(-1, 3))
        expect(subtract(-1, 3)).tobe(-4);
      });
  });

  describe('Visual Component', () => {
    // it is the description 
    it('renders', () => { 
      // contains various meth
      // render method create a virtual dom with a componen given and debug shows you that virtual fom 
      const { container, debug } = render(<Calculator />);
      expect(container.firstChild.toBeTruthy);
      //console.log(debug()) 
      // console.log(prettyDOM(container.firstChild));
    });

    it('has a header with the text Calulator', () => {
      const { getByText } = render(<Calculator />);
      expect(getByText((content, element) => { 
          return element.tagName.toLowerCase() === 'div' && content === 'Calculator'
      })).toBeTruthy();
    });

    it('has two inputs to input the numbers used in the calculator', () => { 
      const { container, getAllByRole } = render(<Calculator />);
      const inputs = getAllByRole('textbox');
      // tool for identifing roles
      // console.log('>>>', getRoles(container));
      expect(inputs).toHaveLength(2);
    });

    it('has ids of numOne and numTwo and are set to 0 as default values', () => { 
      const { getByDisplayValue } = render(<Calculator />);
      
      expect(getByDisplayValue((value, element) => {
        return element.id === 'numOne' && Number(value) === 0;
      }));

      expect(getByDisplayValue((value, element) => {
        return element.id === 'numTwo' && Number(value) === 0;
      }));
    });

    it('renders a calculate button represented by =', ()=> { 
      const { getByText } = render(<Calculator />);
      expect(getByText((content, element) => {
        return element.id === 'calcButton' && content === '=';
      })).toBeTruthy();
    });

    it('can add two numbers together by filling in the number froms and hitting the calculate button', () => { 
      // creates a fake virtual DOM
      const { getAllByRole, getByText } = render(<Calculator />);
      const expectations = { 
        numOne: 1, 
        numTwo: 2
      }
      const inputs = getAllByRole('textbox');
      inputs.forEach(input => { 
        fireEvent.change(input, { target: { value: expectations[input.id]}})
      });
      // simulating a click on the first element with that getByText
      fireEvent.click(getByText('='));
      expect(getByText((content, element) => { 
        return element.className === 'result' && Number(content) === 3;
      })).toBeTruthy();
    });
  });
});