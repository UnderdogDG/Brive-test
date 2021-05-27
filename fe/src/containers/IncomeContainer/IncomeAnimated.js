import { useCallback, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { easeExpIn } from 'd3-ease';

import { AppContext } from '../../context/AppContext';

function IncomeAnimated({ income }){
  const { state } = useContext(AppContext);

  const [ { translatedIncome }, setTranslatedIncome ] = useSpring(()=>(
    {
      translatedIncome: income,
      config: {
        duration: 450,
        easing: easeExpIn
      }
    }
  ));

  const incomeToCurrency = useCallback((income)=>{
    const options2 = { style: 'currency', currency: 'USD' };
    return new Intl.NumberFormat('en-US', options2).format(income).replace('$', "");
  }, []);

  incomeToCurrency(income);

  useEffect(()=>{
    setTranslatedIncome({ 
      translatedIncome: income / state.fix.value
    })
  }, [state, setTranslatedIncome, income]);

  return(
    <Animated isred={ income } >
      { translatedIncome.interpolate(t => incomeToCurrency(t) ) }
    </Animated>
  );
};

export default IncomeAnimated;

const Animated = styled(animated.p)`
  flex-grow: 3;
  text-align: right;
  font-weight: 500;
  font-size: 1em;
  margin: 0;
  padding: 0 4px 0 0;
  color: ${ (props) => (props.isred < 10000) ? 'red' : 'green' };
`;
