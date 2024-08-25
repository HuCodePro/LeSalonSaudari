import React from 'react';
import Nav from '../../components/nav/Nav';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function TarifsCoiffage() {
    return (
        <div className="" >
            <Nav/>
<h1 className='text-4xl text-center font-syncopate mt-10'>Tarifs</h1>

<div className="flex flex-wrap mt-20 justify-center items-stretch">

<Card className="m-5" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="140"
          image="src/assets/coiffeuse/coiffageenfant.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Coiffage enfant - 26€
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Inclus coupe et shampoing
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className="m-5" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="140"
          image="src/assets/coiffeuse/coiffagecoiffe.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Coiffage soirée - 36€
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Inclus coupe et shampoing
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className="m-5" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="140"
          image="src/assets/coiffeuse/coiffagechignon.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Chignons à partir de 45€
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Inclus un soins de la barbe, une tonte et une taille
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</div>

        </div>
    );
}

export default TarifsCoiffage;