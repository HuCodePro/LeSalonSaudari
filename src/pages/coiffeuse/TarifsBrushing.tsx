import React from 'react';
import Nav from '../../components/nav/Nav';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function TarifsBrushing() {
    return (
        <div className="" >
            <Nav/>
<h1 className='text-4xl text-center font-syncopate mt-10'>Tarifs</h1>

<div className="flex flex-wrap mt-20 justify-center items-stretch ">

<Card className="m-5" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="140"
          image="src/assets/coiffeuse/brushingcourt.webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Brushing cheveux courts - 18€
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
          image="src/assets/coiffeuse/brushingmiolng.avif"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Brushing cheveux mi-longs - 20€
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
          image="src/assets/coiffeuse/brushinglong.avif"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Brushing cheveux longs à partir de 22€
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

export default TarifsBrushing;