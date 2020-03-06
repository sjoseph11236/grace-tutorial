import React from 'react';
import { render, prettyDOM } from '@testing-library/React';
import { add } from '../utils/calculations';
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
  });

  describe('Visual Component', () => {
    // it is the description 
    it('renders', () => { 
      // contains various meth
      // render method create a virtual dom with a componen given and debug shows you that virtual fom 
      const { container, debug } = render(<Calculator />);
      
      
      //console.log(debug()) 

      // console.log(prettyDOM(container.firstChild));
    });
  });
});