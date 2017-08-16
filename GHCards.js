const Card = (props) => {
  return (
    <div>
       <img src="http://placeholder.it/75" />
       <div>
         <div>Name here...</div>
         <div>Company Name here...</div>
        </div>
    </div>

  );
};

ReactDOM.render(<Card />, mountNode);
