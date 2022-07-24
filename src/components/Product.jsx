import "./Product.css"
import React, { Component } from 'react'

export default class Product extends Component {
    state = {
        products: [
            {
                id: 1,
                name: "Buy a new gaming laptop"
            },
            {
                id: 2,
                name: "Complete a previous task"
            },
            {
                id: 3,
                name: "Create video for YouTube"
            },
            {
                id: 4,
                name: "Create a new portfolio site"
            }
        ],
        currentId: "",
    };

    addProduct = () => {
        let product = document.querySelector(".input");
        let items = this.state.products;
        let id;
        if (items.length !== 0) {
            id = items[items.length - 1].id + 1;
        } else {
            id = 1;
        }
        items.push({
            id: id,
            name: product.value
        })
        this.setState({
            products: items
        })
        console.log(product.value);
    }
    deleteProduct = (index) => {
        let items = this.state.products
        items.splice(index, 1)
        this.setState({
            products: items
        })
    }
    deleteAllproduct = (index) => {
        let items = this.state.products
        items.splice(index)
        this.setState({
            products: items
        })
    }
    editProduct = (index) => {
        let item = this.state.products[index];
        console.log(item);
        document.querySelector(".input").value = item.name
        this.setState({ currentId: item.id })
    }
    saveProduct = () => {
        let product = document.querySelector(".input");
        let items = this.state.products
        let currentIndex = items.findIndex(
            (item) => item.id === this.state.currentId
        );
        items[currentIndex] = {
            id: this.state.currentId,
            name: product.value
        };
        this.setState({
            products: items
        })
        if (currentIndex === -1) {
            alert("bunday element mavjud emas")
        } else {
            alert("Malumot o'zgartirasizmi?")
        }
        console.log(currentIndex);
        product.value = ""

    }
    render() {
        return (
            <div>
                <div className="boxes">
                    <h1>Todo App</h1>
                    <div className="input-group">
                        <input type="text" placeholder="Add your new todo" className="form-control input" aria-describedby="emailHelp" />
                        <button onClick={() => this.addProduct()} className="btn1"><img className="img" src="/img/add.png" alt="" /></button>
                        <img onClick={() => this.saveProduct()} className="img" src="/img/pencil.png" alt="" />
                    </div>
                    <table className="table">
                        <tbody>
                            {this.state.products.map((item, id) => (
                                <tr key={id}>
                                    <td>
                                        <div>{item.id} {item.name}</div>
                                        <div>
                                            <img onClick={() => this.editProduct(id)} className="img" src="/img/edit.png" alt="" />
                                            <img onClick={() => this.deleteProduct(id)} className="img" src="/img/delete.png" alt="" />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                            <div className="box">
                                <p className="text">You have 4 pending tasks</p>
                                <button onClick={()=>this.deleteAllproduct()} className="btn2"> Clear All</button>
                            </div>
                    </table>
                </div>
            </div>
        )
    }
}
