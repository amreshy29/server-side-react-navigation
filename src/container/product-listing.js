import React, {Fragment} from 'react';
import Filter from '../components/filter';
import ProductCard from '../components/product-card';
import Search from '../components/search';
import Sorting from '../components/sorting';
import {connect} from 'react-redux';
import PLPActions from '../actions/plp-actions';

class ProductListing extends React.Component{

    constructor(props){
        super(props);

        this.searchHandler = this.searchHandler.bind(this);
    }

    componentDidMount(){

        this.props.dispatch({type:"GET_DATA"});
    }

    searchHandler (searchKey){
       // this.props.dispatch({type:"SEARCH_PRODUCTS", data: searchKey})
    }

    createCardList () {

        let filteredCards = this.props.products;

        let cards = filteredCards.map((item, index) => {
                return (
                    <ProductCard key={index} data = {item} ></ProductCard>
                )
        });
        return cards;
    }

    render(){
        return(
            <Fragment>
                <div className="row">
                    <div className="col-sm-10">
                        <Search searchHandler = {this.searchHandler}></Search>
                    </div>
                    <div className="col-sm-2">
                        <Sorting></Sorting>
                    </div>

                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <Filter></Filter>
                    </div>
                    <div className="col-sm-10">
                        {
                            this.createCardList()
                        }
                    </div>
                </div>
            </Fragment>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

const mapDispatchFunctionToProps = (dispatch)=>{
    return {
        dispatch
    }
};

export default connect ( mapStateToProps, mapDispatchFunctionToProps)(ProductListing)



