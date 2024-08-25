import React from 'react';
import Nav from '../../components/nav/Nav';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function TarifsFemme() {
    return (
        <div className="" >
            <Nav/>
<h1 className='text-4xl text-center font-syncopate '>Tarifs</h1>


<div className="flex flex-wrap mt-20 justify-center items-stretch space-x-20">

<Card className="m-5" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="140"
          image="src/assets/coiffeuse/courtfemme.avif"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Coupe cheveux court - 17€
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
          image="src/assets/coiffeuse/milongfemme.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Coupe cheveux mi-long - 19€
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
          image="src/assets/coiffeuse/longfemme.avif"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Coupe cheveux long de 15e a 25€
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Inclus un soins de la barbe, une tonte et une taille
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>




<Card className="m-5" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="140"
          image="src/assets/coiffeuse/coupebebe.webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Coupe bébé de 0 à 3ans - 6€
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
          image="src/assets/coiffeuse/fillette.jpeg"
          alt="green iguana"
        />
        <CardContent >
          <Typography gutterBottom variant="h6" component="div">
          Coupe de 3 à 12ans - 10€
          </Typography>
          <Typography  variant="body2" color="text.secondary">
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
          image="src/assets/coiffeuse/fille16.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Coupe de 12 à 16ans - 16€
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

export default TarifsFemme;