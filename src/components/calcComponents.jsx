import React from 'react';
import { connect } from 'react-redux';
import {
  plus,
  minus,
  multiply,
  divide,
  result,
} from '../actions/calculatorActions';

import BtnNumber from './btnNumber';
import BtnOperator from './btnOperator';
import BtnUtils from './btnUtils';

import { Container, Row } from './style/btnStyle';

const CounterComponent = ({ count, plus, minus, multiply, divide, result }) => {
  return (
    <Container>
      {/* input창 */}
      <div>1</div>
      {/* util (ac, enter) */}
      <div>
        <BtnUtils text={'AC'} />
        <BtnUtils text={'enter'} />
      </div>
      <div>
        <BtnOperator text={'('} />
        <BtnOperator text={')'} />
        <BtnOperator text={'%'} />
        <BtnOperator text={'+ / -'} />
      </div>
      <Row>
        {/* number Btn */}
        <div>
          {Array.from({ length: 9 }).map((_, index) => (
            <BtnNumber text={index + 1} />
          ))}
        </div>
        {/* utils (- + * /) */}
        <div>
          <BtnOperator text={'*'} />
        </div>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps, {
  plus,
  minus,
  multiply,
  divide,
  result,
})(CounterComponent);
