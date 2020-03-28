import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/transaction.actions';
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    };
  }
  componentDidMount() {
    this.props.actions.listAllTransactions();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Transaction manager</h2>
        </div>
        {this.props.transactions.map((transaction, index) =>
          <div key={index}>
            {transaction.id}, {transaction.bankId},{transaction.amount}
            <button onClick={() => this.props.actions.deleteTransactionById(transaction.id)}>Delete</button>
          </div>)}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  transactions: [...state.transactions.transactions]
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
