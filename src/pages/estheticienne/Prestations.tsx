import Nav from "../../components/nav/Nav";
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Button } from "../../components/buttons/Butttons";

const Prestations = () => {
  return (
    <div>
      <Nav />
      <h1 className=" text-center text-5xl font-syncopate  mt-10">Nos prestations</h1>


      <div className="flex flex-wrap mt-20 justify-center items-stretch" >

        <Box
          sx={{
            perspective: '1000px',
            transition: 'transform 0.4s',
            '& > div, & > div > div': {
              transition: 'inherit',
            },
            '&:hover': {
              '& > div': {
                transform: 'rotateY(30deg)',
                '& > div:nth-child(2)': {
                  transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)',
                },
                '& > div:nth-child(3)': {
                  transform: 'translate3d(45px, 50px, 40px)',
                },
              },
            },
          }}
        >
          <Card className="m-5"
            variant="outlined"
            sx={{
              minHeight: '200px',
              width: '400px',
              backgroundColor: 'white',
            }}
          >

            <Typography className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-dark-500" level="h2" fontSize="lg" textColor="#fff">
              <img src="src/assets/estheticienne/Epilation.jpeg" alt="" />
            </Typography>
            <CardContent
              sx={{
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >

           <a href="/epilation">  <Typography className=" cursor-pointer align-middle select-none font-opens text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-[95%]" level="h2" fontSize="xs" textColor="#fff" m={2}>
                Épilation
              </Typography></a>
            </CardContent>
          </Card>
        </Box>

        <Box
          sx={{
            perspective: '1000px',
            transition: 'transform 0.4s',
            '& > div, & > div > div': {
              transition: 'inherit',
            },
            '&:hover': {
              '& > div': {
                transform: 'rotateY(30deg)',
                '& > div:nth-child(2)': {
                  transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)',
                },
                '& > div:nth-child(3)': {
                  transform: 'translate3d(45px, 50px, 40px)',
                },
              },
            },
          }}
        >
          <Card className="m-5"
            variant="outlined"
            sx={{
              minHeight: '200px',
              width: '400px',
              backgroundColor: 'white',
            }}
          >

            <Typography className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-dark-500" level="h2" fontSize="lg" textColor="#fff">
              <img src="src/assets/estheticienne/soinsdecorps.jpeg" alt="" />
            </Typography>
            <CardContent
              sx={{
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >

         <a href="/soinsducorps"><Typography className=" cursor-pointer align-middle select-none font-opens text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-[95%]" level="h2" fontSize="xs" textColor="#fff" m={2}>
                Soins du corps
              </Typography></a>
            </CardContent>
          </Card>
        </Box>

        <Box
          sx={{
            perspective: '1000px',
            transition: 'transform 0.4s',
            '& > div, & > div > div': {
              transition: 'inherit',
            },
            '&:hover': {
              '& > div': {
                transform: 'rotateY(30deg)',
                '& > div:nth-child(2)': {
                  transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)',
                },
                '& > div:nth-child(3)': {
                  transform: 'translate3d(45px, 50px, 40px)',
                },
              },
            },
          }}
        >
          <Card className="m-5"
            variant="outlined"
            sx={{
              minHeight: '200px',
              width: '400px',
              backgroundColor: 'white',
            }}
          >

            <Typography className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-dark-500" level="h2" fontSize="lg" textColor="#fff">
              <img src="src/assets/estheticienne/soinsduvisage.jpeg" alt="" />
            </Typography>
            <CardContent
              sx={{
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >

            <a href="/soinsduvisage"><Typography className=" cursor-pointer align-middle select-none font-opens text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-[95%]" level="h2" fontSize="xs" textColor="#fff" m={2}>
                Soins du visage
              </Typography></a> 
            </CardContent>
          </Card>
        </Box>



        <Box
          sx={{
            perspective: '1000px',
            transition: 'transform 0.4s',
            '& > div, & > div > div': {
              transition: 'inherit',
            },
            '&:hover': {
              '& > div': {
                transform: 'rotateY(30deg)',
                '& > div:nth-child(2)': {
                  transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)',
                },
                '& > div:nth-child(3)': {
                  transform: 'translate3d(45px, 50px, 40px)',
                },
              },
            },
          }}
        >
          <Card className="m-5"
            variant="outlined"
            sx={{
              minHeight: '200px',
              width: '400px',
              backgroundColor: 'white',
            }}
          >

            <Typography className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-dark-500" level="h2" fontSize="lg" textColor="#fff">
              <img src="src/assets/estheticienne/soinsduregard.jpeg" alt="" />
            </Typography>
            <CardContent
              sx={{
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >

              <a href="/beauteduregard"><Typography className=" cursor-pointer align-middle select-none font-opens text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-[95%]" level="h2" fontSize="xs" textColor="#fff" m={2}>
                Beaute du regard
              </Typography></a>
            </CardContent>
          </Card>
        </Box>

        <Box
          sx={{
            perspective: '1000px',
            transition: 'transform 0.4s',
            '& > div, & > div > div': {
              transition: 'inherit',
            },
            '&:hover': {
              '& > div': {
                transform: 'rotateY(30deg)',
                '& > div:nth-child(2)': {
                  transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)',
                },
                '& > div:nth-child(3)': {
                  transform: 'translate3d(45px, 50px, 40px)',
                },
              },
            },
          }}
        >
          <Card className="m-5"
            variant="outlined"
            sx={{
              minHeight: '200px',
              width: '400px',
              backgroundColor: 'white',
            }}
          >

            <Typography className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-dark-500" level="h2" fontSize="lg" textColor="#fff">
              <img src="src/assets/estheticienne/ongles.jpeg" alt="" />
            </Typography>
            <CardContent
              sx={{
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >

              <a href="/beautedesongles"><Typography className=" cursor-pointer align-middle select-none font-opens text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-[95%]" level="h2" fontSize="xs" textColor="#fff" m={2}>
                Beaute des ongles
              </Typography></a>
            </CardContent>
          </Card>
        </Box>

      </div>


    </div>
  );
};

export default Prestations;