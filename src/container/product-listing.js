import React, {Fragment} from 'react';
import Filter from '../components/filter';
import ProductCard from '../components/product-card';
import Search from '../components/search';
import Sorting from '../components/sorting';

export default class ProductListing extends React.Component{

    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <Fragment>
                <div className="row">
                    <div className="col-sm-10">
                        <Search></Search>
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
                        <ProductCard></ProductCard>
                    </div>
                </div>
            </Fragment>
    )
    }
}