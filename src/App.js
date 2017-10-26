import React from 'react';
import SearchInput from './components/SearchInput';
import Dropdown from './components/Dropdown';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    console.log(buttonName);
  }

  render() {
    var genre = [
	"all",
	"movie",
	"tv shows",
	"people"
    ];
    return (
      <div className="search">
	<Dropdown list={genre}/>
	<SearchInput/>
      </div>
    );
  }
}
export default App;