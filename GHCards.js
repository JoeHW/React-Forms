const Card = (props) => {
  return (
    <div>
       <img width="75" src={props.avatar_url} />
       <div style={{display: 'inline-block', marginLeft: 10}}>
         <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
         {props.name}
           </div>
         <div>{props.company}</div>
        </div>
    </div>

  );
};

let data = [
{name: "Paul O’Shannessy",
avatar_url: "https://avatars1.githubusercontent.com/u/8445?v=4",
company: "Facebook"},
{name: "Joseph Williamson",
avatar_url: "https://avatars3.githubusercontent.com/u/26691932?v=4", company: "Rover"}
];

const CardList = (props) => {
  return (
    <div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  );

};

class Form extends React.Component {
  render() {
  return (
    <form>
      <input type="text" placeholder="GitHub Username" />
      <button type="submit">Add Card</button>
    </form>
  );
 };
};


class App extends React.Component {
state = {
 cards = [
  { name: "Paul O’Shannessy",
    avatar_url: "https://avatars1.githubusercontent.com/u/8445?v=4",
    company: "Facebook"},
  { name: "Joseph Williamson",
    avatar_url: "https://avatars3.githubusercontent.com/u/26691932?v=4",
    company: "Rover"}
  ]};

  render() {
  return (
    <div>
     <Form />
     <CardList cards={this.state.cards} />
    </div>
  );
 };
};


ReactDOM.render(<App />, mountNode);
