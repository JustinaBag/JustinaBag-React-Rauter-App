import React, {Component} from "react";
import "./ToDoList.css";
import { AiOutlineUnorderedList } from 'react-icons/ai';


class List extends Component {
    constructor(props) {
        super(props);

        this.state={
            newItem:"",
            list:[]
        }
    }

    updateInput(key, value) {
        //update react state
        this.setState({
            [key]: value
        });
    }

addItem(){
    //create item with unigue id
const newItem = {
    id: 1 + Math.random(),
    value: this.state.newItem.slice()
};

//copy of current list of items
const list =[...this.state.list];

//add new item to List
list.push(newItem);

//update state with new list and reset newItem inputed
this.setState({
    list,
    newItem:""
});
    }
    deleteItem(id){
        //copy current list of items to
        const list = [...this.state.list];

        //filter out item being deleted
        const updateList = list.filter(item => item.id !== id);

        this.setState({list: updateList});
    }

        render() {
            return (
                <div className="List text-center p-5 mb-5">
                <div>     
         <p className="Title">Add an Item
            <AiOutlineUnorderedList /></p>
                    <br />
                    <input 
                    type="text" 
                    placeholder="Type item here.."
                    value={this.state.newItem}
                    onChange={e => this.updateInput("newItem", e.target.value)}
                    />
                   <button
                   className="Btn ms-2"
                       onClick={() => this.addItem()}
                       >
                       Add
                   </button>
                   <br />
                   <ul className="text-center List-item">
                       {this.state.list.map(item => {
                           return(
                               <li  
                               key={item.id}>
                                    {item.value}
                                    <button className="Btn-x"
                                        onClick={()=> this.deleteItem(item.id)}
                                        >
                                        X
                                    </button>
                               </li>
                           )
                       })}
                   </ul>
                </div>
                </div>
            );
        }
    }

export default List;