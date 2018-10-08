import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "./store/actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className="counter">{this.props.ctr}</span>
        <button className="increment" onClick={this.props.onIncrementCounter}>
          Increment
        </button>
        <button className="decrement" onClick={this.props.onDecrementCounter}>
          Decrement
        </button>
        <button className="log" onClick={this.props.onLog}>
          Log
        </button>
        {this.props.log}
        <button className="fetch" onClick={this.props.onFetchPosts}>
          Fetch Posts
        </button>
        <ul className="posts">
          {this.props.posts.map(post => (
            <li>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.rootCtr.counter,
    log: state.rootLog.logCounter,
    posts: state.rootPosts.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onLog: () => dispatch(actionCreators.log()),
    onFetchPosts: () => dispatch(actionCreators.fetchPosts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
