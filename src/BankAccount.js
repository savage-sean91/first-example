import React from "react";
import PropTypes from "prop-types";

class BankAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: props.startingBalance,
      amount: "",
    };
    //Any function in the component that contains code using the "this" keyword msut be bound (like below)
    this.deposit = this.deposit.bind(this);
    this.addHundred = this.addHundred.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
  }

  addHundred() {
    /* 
      Adds 100 to the balance
      */

    // We tell react (using setState) HOW to create the NEXT state
    // It does not change the CURRENT state
    this.setState({ balance: this.state.balance + 100 });
  }
  handleAmountChange(event) {
    let numericalValue = parseInt(event.target.value);
    this.setState({ amount: numericalValue });
  }

  deposit() {
    alert("deposited");
    this.setState({
      balance: this.state.balance + this.state.amount,
      amount: "",
    });
  }
  /*
    * User can enter a number - X
    * User can click deposit button - X
    * * Clicking Deposit button will add the value from the input field to the balance 
    * *Input field should clear

  */

  render() {
    return (
      <div>
        <h1>Bank Account</h1>
        <h2>{this.props.name}</h2>
        <div>Balance: ${this.state.balance}</div>
        <hr />
        <section>
          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleAmountChange}
          />
          <button onClick={this.deposit}>Deposit</button>
          <button onClick={this.addHundred}>Add Hundred</button>
        </section>
      </div>
    );
  }
}

BankAccount.propTypes = {
  startingBalance: PropTypes.number,
  name: PropTypes.string,
};

BankAccount.defaultProps = {
  startingBalance: 0,
  name: "Customer",
};

export default BankAccount;
