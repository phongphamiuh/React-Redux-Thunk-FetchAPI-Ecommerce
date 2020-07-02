import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {formatMoney} from "../../pipes/priceFormatter";
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import './ExpansionPn.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%', 
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '50.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const ExpansionPn=(props) =>{
  const {price,ISBN}=props.product;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="col-md-3">
      <div className={classes.root}>
      <ExpansionPanel  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>eBook</Typography>
          <Typography className={classes.secondaryHeading}>
          <span className="currency">$</span>
          <span className="num">{formatMoney(price)}</span>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <button className="btn btn-warning wr"><NavLink className="nav-link" to={"/cart"}>Đặt hàng</NavLink></button>
            <div className="typo-text">
              <ul>
                <li>ISBN {ISBN}</li>
                <li>Digitally watermarked, DRM-free</li>
                <li>Included format: EPUB, PDF</li>
                <li>ebooks can be used on all reading devices</li>
                <li>Immediate eBook download after purchase</li>
              </ul>
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography >Một số lợi ích</Typography>       
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="typo-text">
              <ul>
                <li>ISBN 978-1-4842-5440-0</li>
                <li>Digitally watermarked, DRM-free</li>
                <li>Included format: EPUB, PDF</li>
                <li>ebooks can be used on all reading devices</li>
                <li>Immediate eBook download after purchase</li>
              </ul>
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel >
        <ExpansionPanelSummary 
        >
          <Typography>
          <div className="credit">
            <i className="fa fa-cc-visa"></i>
            <i className="fa fa-credit-card "></i>
          </div>
          </Typography>       
        </ExpansionPanelSummary>    
      </ExpansionPanel>
      <ExpansionPanel >
        <ExpansionPanelSummary 
        >
          <Typography>
          <div className="rules">
            <span>FAQ</span><span>Policy</span>
          </div>
          </Typography>
          
        </ExpansionPanelSummary>    
      </ExpansionPanel>
     
    </div>
    </div>
  );
}
export default connect()(ExpansionPn);