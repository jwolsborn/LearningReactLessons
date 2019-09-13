import React, {Component} from "react";
import ToDoItems from "./ToDoItems"

class ToDoList extends Component {
    constructor(props){
        super(props);

        this.state={
            items: []
        };

        this.addItem=this.addItem.bind(this);
    }

    addItem(e){
        let itemArray = this.state.items;

        if (this._inputElement.value !== "") {
            itemArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });

            this.setState({
             items: itemArray
            });

            this._inputElement.value = ""
        }
        console.log(itemArray);

        e.preventDefault();
    }
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref = {(a) => this._inputElement = a }
                               placeholder="enter task">

                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <ToDoItems entries={this.state.items}/>
            </div>
        );
    }
}

export default ToDoList;