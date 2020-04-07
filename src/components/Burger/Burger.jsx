import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Burger.css'
class Burger extends Component {

    renderBreadMid = () => {
        let burger = this.props.burger;
        // Duyệt Object cách 1 dùng For in
        // for (let objBurger in burger) {
        //     key: là objBurger
        //     value: là burger[objBurger]
        // }

        // ES6: Tupple obj được lưu trữ dưới dạng mảng
        return Object.entries(burger).map(([keyBurger, valueBurger], index) => {
            let breadMid = [];
            for (let i = 0; i < valueBurger; i++) {
                breadMid.push(<div className={keyBurger} key={i}></div>)
            }
            return breadMid;
        })
    }

    renderTableBody = () => {
        let { menu, burger } = this.props;
        return Object.entries(menu).map(([key, value], index) => {
            return (
                <tr>
                    <td className="content__title">{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                    <td>
                        <button className=" btn-less" onClick={() => this.props.addTopping(key, -1)}>Less</button>
                        <button className=" btn-more" onClick={() => this.props.addTopping(key, 1)}>More</button>
                    </td>
                    <td className="text-center bold ">{value}</td>
                    <td className="text-center bold pl-5">{value * burger[key]}</td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div className="container">
                <h1 className="text-danger bold text-center m-3">L'Demajor Burger</h1>
                <div className="line"></div>
                <div className="row">
                    {/* Burger */}
                    <div className="col-lg-6 burger-left">
                        <h2 className="text-center">Your taste Burger</h2>
                        <div className="box">
                            <div className="bread-top">
                                <div className="seed"></div>
                                <div className="seed2"></div>
                            </div>

                            {(this.props.total === 0) ? <p className="burger-mid">Please start adding ingredients</p> : this.renderBreadMid()}
                            <div className="bread-bottom"></div>
                        </div>
                    </div>

                    {/* Menu */}
                    <div className="col-lg-6 burger-right">
                        <p className="burger-right__title text-center">Custom your burger</p>
                        <div className="content">
                            <div className="line-order"></div>
                            <table>
                                <thead className="table-lable">
                                    <tr>
                                        <th>TOPPING</th>
                                        <th className="text-center">OPTION</th>
                                        <th className="text-center ">UNIT PRICE</th>
                                        <th className="text-center pl-5">PRICE</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {this.renderTableBody()}
                                </tbody>
                            </table>
                            <div className="line-order"></div>
                            <div className="content-foot d-flex justify-content-between">
                                <span>Total cost</span>
                                <span className="total">{this.props.total}$</span>
                            </div>
                        </div>
                        <button className="btn-order">Order</button>
                        <button className="btn-reset">Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        burger: state.BurgerReducer.burger,
        menu: state.BurgerReducer.menu,
        total: state.BurgerReducer.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTopping: (topping, amount) => {
            dispatch({
                type: 'ADD_TOPPING',
                topping: topping,
                amount: amount
            });
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Burger);