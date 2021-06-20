import React from 'react';
import Wrapper, { A } from './Wrapper';

function LeftMenuFooter() {
  // PROJECT_TYPE is an env variable defined in the webpack config
  // eslint-disable-next-line no-undef
  const projectType = PROJECT_TYPE;

  return (
    <Wrapper>
      <div className="poweredBy">
        <p>powered by</p>
        <A key="website" href="https://reactavancado.com.br" target="_blank" rel="noopener noreferrer">
          React avançado
        </A>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
