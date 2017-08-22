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
      <button className="btn btn-success">
      <i className="fa fa-check"></i></button>
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
   <div className="col-2">
     {button}
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
    answerIsCorrect: null
  }

selectNumber = (clickedNumber) => {
 if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0){return;}
 this.setState(prevState => ({
 selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
 }));
};

unselectNumber = (clickedNumber) => {
 this.setState(prevState => ({
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

 render() {
   const {selectedNumbers,
          randomNumberOfStars,
          answerIsCorrect} = this.state;

   return (
   <div className="container">
     <h3>Play Nine</h3>
     <hr />
     <div className="row">
     <Stars numberOfStars={randomNumberOfStars} />
     <Button answerIsCorrect={answerIsCorrect}
     checkAnswer={this.checkAnswer} selectedNumbers={selectedNumbers} />
     <Answer selectedNumbers={selectedNumbers}
     unselectNumber={this.unselectNumber} />
     </div>
     <br />
     <Numbers selectedNumbers={selectedNumbers}
     selectNumber={this.selectNumber}/>
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
