const Stars = (props) => {
const numberOfStars = 1 + Math.floor(Math.random()*9);
//lodash
return (
   <div className="col-5">
    {_.range(numberOfStars).map(i =>
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
   {props.selectedNumbers.map((x,i) => <span id={i}>{x}</span>)}
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
      <span id={i} className={numbersClassName(x)}>{x}</span>)}
    </div>
   </div>
 );
}

Numbers.list = _.range(1,10);


class Game extends React.Component {
  state = {
    selectedNumbers: [2,4]
  }
 render() {
   return (
   <div className="container">
     <h3>Play Nine</h3>
     <hr />
     <div className="row">
     <Stars />
     <Button />
     <Answer selectedNumbers={this.state.selectedNumbers}/>
     </div>
     <br />
     <Numbers selectedNumbers={this.state.selectedNumbers}/>
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
