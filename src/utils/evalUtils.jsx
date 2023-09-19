import { Stack } from './stack';

const ConToRPNExp = (exp) => {
  let stack = new Stack();
  let tempNum = 0;
  let conExp = [];
  let digit = 10;

  for (let i = 0; i <= exp.length; i++) {
    if (Number.isNaN(Number(exp[i])) === false) {
      if (exp[i] === ' ') continue;
      tempNum = tempNum * digit + parseInt(exp[i]);
    } else {
      conExp.push(tempNum);
      tempNum = 0;
      switch (exp[i]) {
        case '(':
          stack.push('(');
          break;
        case ')':
          while (!stack.isEmpty()) {
            let popOp = stack.pop();
            if (popOp === '(') break;
            conExp.push(popOp);
          }
          break;
        case '+':
        case '-':
        case '*':
        case '/':
          while (!stack.isEmpty() && WhoPreOp(stack.peek(), exp[i]) >= 0)
            conExp.push(stack.pop);
          stack.push(exp[i]);
          break;
        default:
      }
    }
  }
  while (!stack.isEmpty()) conExp.push(stack.pop());
  return conExp;
};

const GetOpPrec = (op) => {
  switch (op) {
    case '*':
    case '/':
      return 5;
    case '+':
    case '-':
      return 3;
    case '(':
      return 1;
    default:
  }
  return -1;
};

const WhoPreOp = (op1, op2) => {
  let op1prec = GetOpPrec(op1);
  let op2prec = GetOpPrec(op2);

  if (op1prec > op2prec) return 1;
  else if (op1prec < op2prec) return -1;
  else return 0;
};

const EvalRPNExp = (exp) => {
  let stack = new Stack();
  let op1;
  let op2;

  for (let i = 0; i < exp.length; i++) {
    if (Number.isNaN(Number(exp[i])) === false) stack.push(+exp[i]);
    else {
      op2 = stack.pop();
      op1 = stack.pop();

      switch (exp[i]) {
        case '+':
          stack.push(op1 + op2);
          break;
        case '-':
          stack.push(op1 - op2);
          break;
        case '*':
          stack.push(op1 * op2);
          break;
        case '/':
          stack.push(op1 / op2);
          break;
        default:
      }
    }
  }
  return stack.pop();
};

export { EvalRPNExp, ConToRPNExp };
