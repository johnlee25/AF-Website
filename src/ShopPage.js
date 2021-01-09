import React, { Component } from 'react';
import './ShopPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class ShopPage extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
                <div class="shop-page">
KILL ME {this.props.storeItems.itemName}

                </div>

        );
    }
}

export default ShopPage;

