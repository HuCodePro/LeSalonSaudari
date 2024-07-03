import Nav from "../../components/nav/Nav";
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

const Services = () => {
  return (
    <div>
      <Nav />
      <h1 className=" text-center text-5xl font-syncopate  mt-10">Nos prestations</h1>

      <div className="flex mt-20 justify-center items-stretch space-x-20" >

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
          <Card className="relative flex flex-col mt-6 text-gray-700  shadow-md bg-clip-border rounded-xl"
            variant="outlined"
            sx={{
              minHeight: '200px',
              width: '400px',
              backgroundColor: 'white',
            }}
          >

            <Typography className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-dark-500" level="h2" fontSize="lg" textColor="#fff">
              <img src="src/assets/coiffeuse/homme.jpeg" alt="" />
            </Typography>
            <CardContent
              sx={{
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >

              <Typography className=" cursor-pointer align-middle select-none font-opens text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-[95%]" level="h2" fontSize="xs" textColor="#fff" m={2}>
               <a href="/homme">Homme</a>
              </Typography>
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
          <Card className="relative flex flex-col mt-6 text-gray-700  shadow-md bg-clip-border rounded-xl"
            variant="outlined"
            sx={{
              minHeight: '200px',
              width: '400px',
              backgroundColor: 'white',
            }}
          >

            <Typography className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-dark-500" level="h2" fontSize="lg" textColor="#fff">
              <img src="src/assets/coiffeuse/femme.jpeg" alt="" />
            </Typography>
            <CardContent
              sx={{
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >


              <Typography className=" cursor-pointer align-middle select-none font-opens text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-[95%]" level="h2" fontSize="xs" textColor="#fff" m={2}>
                <a href="/femme">Femme</a>
              </Typography>
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
          <Card className="relative flex flex-col mt-6 text-gray-700  shadow-md bg-clip-border rounded-xl"
            variant="outlined"
            sx={{
              minHeight: '200px',
              width: '400px',
              backgroundColor: 'white',
            }}
          >

            <Typography className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-dark-500" level="h2" fontSize="lg" textColor="#fff">
              <img src="src/assets/coiffeuse/enfant.jpeg" alt="" />
            </Typography>
            <CardContent
              sx={{
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >

              <Typography className=" cursor-pointer align-middle select-none font-opens text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-[95%]" level="h2" fontSize="xs" textColor="#fff" m={2}>
                <a href="/homme">Enfant</a>
              </Typography>
            </CardContent>
          </Card>
        </Box>

      </div>

      <div className="flex mt-20 justify-center items-stretch space-x-20" >

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
          <Card className="relative flex flex-col mt-6 text-gray-700  shadow-md bg-clip-border rounded-xl"
            variant="outlined"
            sx={{
              minHeight: '200px',
              width: '400px',
              backgroundColor: 'white',
            }}
          >

            <Typography className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-dark-500" level="h2" fontSize="lg" textColor="#fff">
              <img src="src/assets/coiffeuse/brushing.jpeg" alt="" />
            </Typography>
            <CardContent
              sx={{
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >

<a href="/brushing"><Typography className=" cursor-pointer align-middle select-none font-opens text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-[95%]" level="h2" fontSize="xs" textColor="#fff" m={2}>
                Brushing
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
          <Card className="relative flex flex-col mt-6 text-gray-700  shadow-md bg-clip-border rounded-xl"
            variant="outlined"
            sx={{
              minHeight: '200px',
              width: '400px',
              backgroundColor: 'white',
            }}
          >

            <Typography className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-dark-500" level="h2" fontSize="lg" textColor="#fff">
              <img src="src/assets/coiffeuse/colo.jpeg" alt="" />
            </Typography>
            <CardContent
              sx={{
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >

<a href="/technique"><Typography className=" cursor-pointer align-middle select-none font-opens text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-[95%]" level="h2" fontSize="xs" textColor="#fff" m={2}>
                Techniques
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
          <Card className="relative flex flex-col mt-6 text-gray-700  shadow-md bg-clip-border rounded-xl"
            variant="outlined"
            sx={{
              minHeight: '200px',
              width: '400px',
              backgroundColor: 'white',
            }}
          >

            <Typography className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-dark-500" level="h2" fontSize="lg" textColor="#fff">
              <img src="src/assets/coiffeuse/coiffure.jpeg" alt="" />
            </Typography>
            <CardContent
              sx={{
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >

              <Typography className=" cursor-pointer align-middle select-none font-opens text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-[95%]" level="h2" fontSize="xs" textColor="#fff" m={2}>
                Coiffage
              </Typography>
            </CardContent>
          </Card>
        </Box>

      </div>

      <div className="flex mt-20 justify-center items-stretch space-x-20" >

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
          <Card className="relative flex flex-col mt-6 text-gray-700  shadow-md bg-clip-border rounded-xl"
            variant="outlined"
            sx={{
              minHeight: '200px',
              width: '400px',
              backgroundColor: 'white',
            }}
          >

            <Typography className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-dark-500" level="h2" fontSize="lg" textColor="#fff">
              <img src="src/assets/coiffeuse/mariage.jpeg" alt="" />
            </Typography>
            <CardContent
              sx={{
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >

              <Typography className=" cursor-pointer align-middle select-none font-opens text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-[95%]" level="h2" fontSize="xs" textColor="#fff" m={2}>
                Forfait Mariée
              </Typography>
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
          <Card className="relative flex flex-col mt-6 text-gray-700  shadow-md bg-clip-border rounded-xl"
            variant="outlined"
            sx={{
              minHeight: '200px',
              width: '400px',
              backgroundColor: 'white',
            }}
          >

            <Typography className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-dark-500" level="h2" fontSize="lg" textColor="#fff">
              <img src="src/assets/coiffeuse/soins.webp" alt="" />
            </Typography>
            <CardContent
              sx={{
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >

              <Typography className=" cursor-pointer align-middle select-none font-opens text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-[95%]" level="h2" fontSize="xs" textColor="#fff" m={2}>
                Soins
              </Typography>
            </CardContent>
          </Card>
        </Box>

      </div>


    </div>
  );
};

export default Services;