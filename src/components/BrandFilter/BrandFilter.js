import React, {Component} from 'react';
import {connect} from 'react-redux';
import './BrandFilter.scss';
import {categorys} from "../../data/brands";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {addBrandToFilter, removeBrandFromFilter} from "../../actions";
import Checkbox from '@material-ui/core/Checkbox';


const BrandFilter = (props) => {

    const {dispatch, brandItemsCount} = props;
    
    const handleSelectBox = (e) => {
        const name = e.target.name;
        const value = e.target.checked;

        if(e.target.checked) {
            dispatch(addBrandToFilter(name));
        } else {
            dispatch(removeBrandFromFilter(name));
        }
    };
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
        return (
            <div className="card mb-3">
                <div className="card-header">
                    <h3>Danh mục</h3>
                </div>
                <ul className="list-group flex-row flex-wrap">
                    {categorys.map(category => (
                        <li className="list-group-item flex-50">
                            <label className="custom-checkbox text-capitalize"> {category} ({brandItemsCount[category]})
                                <input type="checkbox"
                                       name={category}
                                       className="custom-checkbox__input " onInput={handleSelectBox}/>
                                <span className="custom-checkbox__span"></span>
                            </label>                                                              
                        </li>
                    ))}
                </ul>
            </div>
        );

};

const mapStateToProps = (state) => {
    const brandItemsCount = {};

    state.shop.products.forEach(p => {
        brandItemsCount[p.category] = brandItemsCount[p.category] + 1 || 1;
    });

    return {
        brandItemsCount
    }

};

export default connect(mapStateToProps)(BrandFilter);