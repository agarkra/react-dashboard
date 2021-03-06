import React, { Component } from 'react';
import "./App.css";
import ScreenBanner from './components/ScreenBanner.jsx'
import ShowServer from './components/ShowServer.jsx'
import AddServer from './components/AddServer.jsx'
class App extends Component {
  state = {
    selected: 1,
    arrayObj: [],
  };
  onClick = (v, arrayObj) => {
    this.setState({
      arrayObj: arrayObj,
      selected: v
    })
  }
  componentDidMount() {
    // var data = new FormData();
    // const payload = {
    // id: self.refs.id,
    // studentName: self.refs.sname,
    // age: self.refs.age,
    // emailId: self.refs.emailId

    // };
    // data.append("myjsonkey", JSON.stringify(payload));
    // fetch('http://localhost:8083/students/', {
    // method: 'POST',
    // body: data
    // })
  }


  render() {
    return (
      <React.Fragment>

        <main className="react-dashboard">
          <section>
            <nav>
              <ScreenBanner selected={this.state.selected} onClick={this.onClick}>
                <h1>Work Space</h1>
              </ScreenBanner>
            </nav>
            {
              this.state.selected === 1 ?
                <ShowServer selected={this.state.selected} arrayObj={this.state.arrayObj} onClick={this.onClick} />
                :
                <AddServer selected={this.state.selected} arrayObj={this.state.arrayObj} onClick={this.onClick} />
            }
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
