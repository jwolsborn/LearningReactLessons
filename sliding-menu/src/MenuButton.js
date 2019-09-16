import React, {Component} from "react";
import "./MenuButton.css"

class MenuButton extends Component{
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextProps.handleMouseDown === this.props.handleMouseDown){
            return false;
        } else {
            return true;
        }
    }

    render(){
        return (
            <button id="roundButton"
                    onMouseDown={this.props.handleMouseDown}></button>
        );
    }
}

export default MenuButton;