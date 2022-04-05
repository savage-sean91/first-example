import React from 'react';

class BankAccount extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            balance: 0.00
        };
    }

    deposit(){
        alert('deposited');
    }

    render(){
        return (
            <div>
                <div>Bank Account</div>
                <div>Balance: ${this.state.balance}</div>
                < hr/>
                <section>
                    <input type="number" />
                    <button onClick={this.deposit}>Deposit</button>
                </section>
            </div>
        );
    }
}

export default BankAccount;