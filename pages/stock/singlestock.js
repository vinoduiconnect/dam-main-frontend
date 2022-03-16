import * as React from 'react';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ArticleIcon from '@mui/icons-material/Article';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import CopyrightIcon from '@mui/icons-material/Copyright';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import DownloadIcon from '@mui/icons-material/Download';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Singlestock() {
    const styles = {
        stockContainer: {
            m: '0 auto',
        },
        masonryList: {
            with: '100%',
        },
    }
    return (
        <>
            <div maxWidth="100%">
                <Container maxWidth="lg" sx={styles.stockContainer}>
                    <Box sx={{ flexGrow: '1' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Typography variant="h6" gutterBottom component="div">
                                    <ArticleIcon /> DESCRIPTION
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                    quasi quidem quibusdam.
                                </Typography>
                                <Divider component="div" />
                                <Typography variant="h6" gutterBottom component="div">
                                    <PhotoSizeSelectActualIcon /> Photo Information
                                </Typography>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: '100%' }} aria-label="simple table">
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>
                                                    Title</TableCell>
                                                <TableCell>
                                                    profile_Ex.jpg</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                Updated at	</TableCell>
                                                <TableCell>
                                                2022-01-18 08:04:54</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                File Size</TableCell>
                                                <TableCell>
                                                29.56 KB</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    File Type & Format</TableCell>
                                                <TableCell>
                                                    profile_Ex.jpg</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                Dimension</TableCell>
                                                <TableCell>
                                                W:400px X H:400px</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <Divider component="div" />
                                <Typography variant="h6" gutterBottom component="div">
                                    <ToggleOffOutlinedIcon /> STATUS
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                Approved
                                </Typography>
                                <Divider component="div" />
                                <Typography variant="h6" gutterBottom component="div">
                                    <CopyrightIcon /> COPYRIGHTS
                                </Typography>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: '100%' }} aria-label="simple table">
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>
                                                Copyright Status</TableCell>
                                                <TableCell>
                                                Copyrighted</TableCell>
                                            </TableRow>
                                            
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <Divider component="div" />
                                <Typography variant="h6" gutterBottom component="div">
                                    <LocalOfferIcon /> TAGS
                                </Typography>
                                
                                <Divider component="div" />
                                <Typography variant="h6" gutterBottom component="div">
                                    <DownloadIcon /> IPTC
                                </Typography>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: '100%' }} aria-label="simple table">
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>
                                                Creator</TableCell>
                                                <TableCell>
                                                    Name</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                Creator job title	</TableCell>
                                                <TableCell>
                                                 </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                Address</TableCell>
                                                <TableCell>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                Email</TableCell>
                                                <TableCell>
                                                    example@example.com</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                Website</TableCell>
                                                <TableCell>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <Divider component="div" />
                            </Grid>
                            <Grid item xs={8}>
                                <div sx={styles.imageContainer}>
                                    <Image
                                        alt="Next.js logo"
                                        src="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
                                        width={1200}
                                        height={400}
                                    />
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>

            </div>

        </>
    );
}
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
        author: 'swabdesign',
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
        author: 'Pavel Nekoranec',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
        author: 'Charles Deluvio',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
        author: 'Christian Mackie',
    },
    {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds',
        author: 'Darren Richardson',
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
        author: 'Taylor Simpson',
    },
    {
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop',
        author: 'Ben Kolde',
    },
    {
        img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title: 'Doors',
        author: 'Philipp Berndt',
    },
    {
        img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
        title: 'Coffee',
        author: 'Jen P.',
    },
    {
        img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        title: 'Storage',
        author: 'Douglas Sheppard',
    },
    {
        img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        title: 'Candle',
        author: 'Fi Bell',
    },
    {
        img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        title: 'Coffee table',
        author: 'Hutomo Abrianto',
    },
];