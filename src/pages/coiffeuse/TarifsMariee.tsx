import React from 'react';
import Nav from '../../components/nav/Nav';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function TarifsMariee() {
    return (
        <div className="" >
            <Nav/>
<h1 className='text-4xl text-center font-syncopate mt-10'>Tarifs</h1>

<div className="flex flex-wrap mt-20 justify-center items-stretch space-x-20">

<Card className="m-5" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="140"
          image="src/assets/coiffeuse/forfaitmariage.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Forfaits Mariée
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Inclus : Essai coiffure - La préparation la veille - Le chignon le jour J de 117 à 127€ en fonction du travail réalisé,ornements... 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</div>

        </div>
    );
}

export default TarifsMariee;