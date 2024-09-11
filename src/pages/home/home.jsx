

// import React, { Component } from 'react';
// import './home.css';
// import Bottombar from '../../Components/Bottombar/Bottombar';
// import Feed from '../../Components/Feed/Feed';
// import Search from '../../Components/Search/Search'; // Import the Search component

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       query: ''
//     };
//   }

//   handleSearch = (query) => {
//     // Set the query to state or pass it to another method to handle the search
//     this.setState({ query: query });
//   };

//   render() {
//     return (
//       <div>
//         <Bottombar />
//         <Search handleSearch={this.handleSearch} /> {/* Pass handleSearch method as prop */}
//         <Feed query={this.state.query} /> {/* Pass query as prop to Feed component */}
//       </div>
//     );
//   }
// }

// export default Home
import React, { Component } from 'react';
import './home.css';
import Bottombar from '../../Components/Bottombar/Bottombar';
import Feed from '../../Components/Feed/Feed';
import Search from '../../Components/Search/Search'; // Import the Search component

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  handleSearch = (query) => {
    // Set the query to state or pass it to another method to handle the search
    this.setState({ query: query });
  };

  render() {
    return (
      <div>
        <Bottombar />
        <Search handleSearch={this.handleSearch} /> {/* Pass handleSearch method as prop */}
        <Feed query={this.state.query} /> {/* Pass query as prop to Feed component */}
      </div>
    );
  }
}

export default Home;
