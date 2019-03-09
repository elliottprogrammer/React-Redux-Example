import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactHeader from './components/ReactHeader';




class App extends Component {
    state= {
        age: 21
    }

    handleAgeUp(e) {
        const {age} = this.state;
        this.setState({ age: age + 1 });
    }

    handleAgeDown(e) {
        const {age} = this.state;
        this.setState({ age: age - 1 });
    }

    render() {
        return (
        <div>
            <ReactHeader/>
            <div className="container page-wrapper">
                <div>Age: <span>{this.props.age}</span></div>
                <br/>
                <button onClick={this.props.onAgeUp}>Age Up</button>
                <button onClick={this.props.onAgeDown}>Age Down</button>
                <hr />
                <div>History:</div>
                <ul className="history-list">
                    {this.props.history.map((val, index) => (
                    <li key={index} onClick={() => this.props.onDelItem(index)}>age: {val.age} <span className="del-item"><span className="plus">+</span></span></li>
                    ))}
                </ul>
            </div>
        </div>
        );
    }
}
 const mapStateToProps = (state) => {
     return {
        age: state.age,
        history: state.history
     }
 }

 const mapDispatchToProps = (dispatch) => {
     return {
         onAgeUp: () => dispatch({type: 'AGE_UP', value: 1 }),
         onAgeDown: () => dispatch({type: 'AGE_DOWN', value: 1 }),
         onDelItem: (key) => dispatch({type: 'DELETE_HIST_ITEM', index: key })
     }
 }
export default connect(mapStateToProps, mapDispatchToProps)(App);

