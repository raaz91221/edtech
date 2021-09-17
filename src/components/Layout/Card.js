import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';


function Card({ backgroundColor, height, width, padding, margin, ...props }) {
    return (
        <Fragment>
            <Box height={height} width={width} style={{backgroundColor:backgroundColor,borderRadius:'14px', padding:padding, margin:margin}}>
                {props.children}
            </Box>
        </Fragment>
    )
}
Card.propTypes = {
   
    height: PropTypes.string,
    width: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.string,
    backgroundColor: PropTypes.string,
   
};
Card.defaultProps = {
    width: 'auto',
    padding:'5px',
    backgroundColor: '#F5F5F7'
}

export default Card;