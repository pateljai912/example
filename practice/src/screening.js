import React from 'react';
import ReactDOM from 'react-dom';


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            array: [];
        }
        this.text = '';

        handleClick = () => {
            this.setState({
                array: [...this.state.array, this.text]
            });

            handleChange = (e) => {
                this.text = e.target.value;
            }

        }

        render(){
            return (
                <div>
                    <input type="text" onChange={this.handleChange}></input>
                    <button onClick={this.handleClick} Add></button>
                </div>
                
            );
        }
    }
}

ReactDOM.render(<Form />, document.querySelector('#root'));