import React, { Component } from 'react';
import './Shop.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';



class Shop extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="shop">
                <div class="shop-contents">
                    <div class="shop-contents-title">
                        Shop
                    </div>
                    <div class="shop-contents-items">
                        <Router>
                            {this.props.storeItems.map(
                                ({ itemName, itemPicture, itemGender, itemPrice, itemUrlName, itemIndex, id }) =>
                                    <Link to={"/shop/" +  itemUrlName } >
                                        <div class="shop-contents-items-ind">
                                            <div class="shop-contents-items-ind-pic">
                                                <img src={itemPicture} class="shop-img" />
                                                <div class="shop-contents-items-desc">
                                                    <div class="shop-contents-items-ind-name">
                                                        {itemName}
                                                    </div>
                                                    <div class="shop-contents-items-ind-gender">
                                                        {itemGender}
                                                    </div>
                                                    <div class="shop-contents-items-ind-price">
                                                        ${itemPrice}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                            )}

                        </Router>
                    </div>
                </div>


            </div>
        );
    }
}

export default Shop;
