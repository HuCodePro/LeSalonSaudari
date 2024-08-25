import React from 'react';
import Nav from '../../components/nav/Nav';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function TarifsHomme() {
    return (
        <div className="" >
            <Nav/>
<h1 className='text-4xl text-center font-syncopate mt-10 '>Tarifs</h1>


<div className="flex flex-wrap mt-20 justify-center items-stretch">

<Card className="m-5" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="140"
          image="src/assets/coiffeuse/etudiant.webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Coupe Étudiant - 17€
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
          image="src/assets/coiffeuse/coupehomme.webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Coupe Homme - 19€
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
          image="src/assets/coiffeuse/rituelbarbe.avif"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Rituels Barbe  de 15€ à 25€
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
          image="src/assets/coiffeuse/enfant12ans.jpeg"
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
          image="src/assets/coiffeuse/coupeado.jpeg"
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

export default TarifsHomme;