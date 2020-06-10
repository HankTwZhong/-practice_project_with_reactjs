import React from 'react';
import { thisExpression } from '@babel/types';

class ProductCategoryRow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const category = this.props.category;
        return(
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        );
    }
}

class ProductRow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const product = this.props.product;
        const name = product.stocked ? product.name : (<span style={{color:'red'}}>{product.name}</span>)
        return(
            <tr>
                <td>
                    {name}
                </td>
                <td>
                    {product.price}
                </td>
            </tr>
        )
    }
}



class ProductTable extends React.Component{
    constructor(props){
        super(props)
    }

    CategoryDescendingSorting(product){

        product.sort(function(first, second){
            if (first.category > second.category)
                return 1;
            else if (first.category < second.category)
                return -1;
            else
                return 0 ;
        });
    }

    RowsGeneration(products){
        const rows = []
        let previousCategory =''
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        products.forEach((product) => {
            if (product.name.indexOf(filterText) === -1){
                return;
            }
            if (inStockOnly && !product.stocked){
                return;
            }
            if (previousCategory != product.category){
                rows.push(<ProductCategoryRow category={product.category} key={product.key}/>);
                previousCategory = product.category
            }
            rows.push(<ProductRow product={product}/>)
        });
        return rows;
    }

    render(){
        const products = this.props.products
        this.CategoryDescendingSorting(products);
        const rows = this.RowsGeneration(products);
        
        return(
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
    }

    handleFilterTextChange(e){
        this.props.onFilterTextChange(e.target.value)
    }

    handleInStockOnlyChange(e){
        this.props.onInStockOnlyChange(e.target.checked)
    }

    render(){
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        return(
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={filterText}
                    onChange={this.handleFilterTextChange}/>
                <p>
                    <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={this.handleInStockOnlyChange}/>
                    {' '}
                    Only show producs in stock
                </p>
            </form>
        )
    }
}

class FilterProductTable extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            filterText: '',
            inStockOnly: false
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this)
    }

    handleFilterTextChange(filterText){
        this.setState({
            filterText: filterText
        });

    }

    handleInStockOnlyChange(inStockOnly){
        this.setState({
            inStockOnly: inStockOnly
        });
    }

    render(){

        return(
            <form>
                <div>
                    <SearchBar
                        filterText={this.state.filterText}
                        inStockOnly={this.state.inStockOnly}
                        onFilterTextChange={this.handleFilterTextChange}
                        onInStockOnlyChange={this.handleInStockOnlyChange}/>
                    <ProductTable
                        products={this.props.products}
                        filterText={this.state.filterText}
                        inStockOnly={this.state.inStockOnly}
                        />
                </div>
            </form>
        )
    }
}

export {FilterProductTable, SearchBar}