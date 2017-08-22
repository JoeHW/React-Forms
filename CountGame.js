const Stars = (props) => {
//lodash
return (
   <div className="col-5">
    {_.range(props.numberOfStars).map(i =>
    <i key={i} className="fa fa-star"></i>)}
   </div>
)};

const Button = (props) => {
return (
   <div className="col-2">
     <button>=</button>
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
    answerIsCorrect:
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
  this.setState(prevState({
    prevState.randomNumberOfStars ===
    prevState.selectedNumbers.reduce((a,x) => a + x, 0);
  }));
}

 render() {
   return (
   <div className="container">
     <h3>Play Nine</h3>
     <hr />
     <div className="row">
     <Stars numberOfStars={this.state.randomNumberOfStars}/>
     <Button />
     <Answer selectedNumbers={this.state.selectedNumbers}
     unselectNumber={this.unselectNumber} />
     </div>
     <br />
     <Numbers selectedNumbers={this.state.selectedNumbers}
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
