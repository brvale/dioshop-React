import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';

const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <Typography variant='h3'>
                Top 12 Futebol
            </Typography>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Button color="primary">Home</Button>
            </Link>
            <Link to="/contato" style={{ textDecoration: 'none' }}>
                <Button color="primary">Contato</Button>
            </Link>
            <Cart />   

            
        </Grid>
    )
}

export default Header;
