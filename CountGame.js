const Stars = (props) => {
//lodash
return (
   <div className="col-5">
    {_.range(props.numberOfStars).map(i =>
    <i key={i} className="fa fa-star"></i>)}
   </div>
)};

const Button = (props) => {
  let button;
  switch(props.answerIsCorrect) {
    case true:
    button =
      <button disabled={props.redraws === 0}
      className="btn btn-success" onClick={props.acceptAnswer}>
      <i className="fa fa-check"></i>{props.redraws}</button>
    break;
    case false:
    button =
      <button className="btn btn-danger">
      <i className="fa fa-times"></i></button>
    break;
    default:
    button =
      <button onClick={props.checkAnswer}
           disabled={props.selectedNumbers.length === 0}
           className="btn">=</button>
    break;
   }

  <button onClick={props.checkAnswer}
         disabled={props.selectedNumbers.length === 0} className="btn">
         =</button>

return (
   <div className="col-2 text-center">
     {button}
     <br /><br />
     <button disabled={props.redraws === 0} className="btn btn-warning btn-sm" onClick={props.redraw}>
     <i className="fa fa-refresh"></i> {props.redraws}</button>
   </div>
)};

const Answer = (props) => {
return (
   <div className="col-5">
   {props.selectedNumbers.map((x,i) => <span id={i}
   onClick={() => props.unselectNumber(x)} >{x}</span>)}
   </div>
)};

const Numbers = (props) => {
const numbersClassName = (x) => {
  if(props.usedNumbers.indexOf(x) >= 0){
    return 'used';
  }
  if(props.selectedNumbers.indexOf(x) >= 0){
    return 'selected';
  }
}
  return (
   <div className="card text-center">
    <div>
      {Numbers.list.map((x,i) =>
      <span id={i} className={numbersClassName(x)}
      onClick={() => props.selectNumber(x)}>{x}</span>)}
    </div>
   </div>
 );
}

Numbers.list = _.range(1,10);


class Game extends React.Component {
  state = {
    selectedNumbers: [],
    randomNumberOfStars: 1 + Math.floor(Math.random()*9),
    answerIsCorrect: null,
    usedNumbers: [],
    redraws: 5
  }

selectNumber = (clickedNumber) => {
 if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0){return;}
 this.setState(prevState => ({
 answerIsCorrect: null,
 selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
 }));
};

unselectNumber = (clickedNumber) => {
 this.setState(prevState => ({
 answerIsCorrect: null,
 selectedNumbers: prevState.selectedNumbers
                          .filter(x => x !== clickedNumber)
 }));
}

checkAnswer = () => {
 this.setState(prevState => ({
  answerIsCorrect: prevState.randomNumberOfStars ===
   prevState.selectedNumbers.reduce((a,x) => a + x, 0)
 }));
}

acceptAnswer = () => {
  this.setState(prevState => ({
    usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
    selectedNumbers: [],
    answerIsCorrect: null,
    randomNumberOfStars: 1 + Math.floor(Math.random()*9),
  }));
}

redraw = () => {
if(this.state.redraws === 0){return;}
this.setState(prevState => ({
randomNumberOfStars: 1 + Math.floor(Math.random()*9),
answerIsCorrect: null,
selectedNumbers: [],
redraws: prevState.redraws -1
}));
}

 render() {
   const {selectedNumbers,
          randomNumberOfStars,
          answerIsCorrect, usedNumbers, redraws} = this.state;

   return (
   <div className="container">
     <h3>Play Nine</h3>
     <hr />
     <div className="row">
     <Stars numberOfStars={randomNumberOfStars} />
     <Button answerIsCorrect={answerIsCorrect}
     checkAnswer={this.checkAnswer} selectedNumbers={selectedNumbers}
     acceptAnswer={this.acceptAnswer} redraw={this.redraw} redraws={redraws} />
     <Answer selectedNumbers={selectedNumbers}
     unselectNumber={this.unselectNumber} />
     </div>
     <br />
     <Numbers selectedNumbers={selectedNumbers}
     selectNumber={this.selectNumber} usedNumbers={usedNumbers} />
   </div>
  );
 }
}


class App extends React.Component {
 render() {
   return (
   <div>
     <Game />
   </div>
  );
 }
}

ReactDOM.render(<App />, mountNode);
