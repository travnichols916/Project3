import React, { useState, useEffect } from 'react';

import {
  CssBaseline,
  Box,
  Grid,
  Container,
  Rating,
  Stack,
  Tab,
  TextField,
  Button
} from '@mui/material'

import { 
  TabContext,
  TabList,
  TabPanel 
} from '@mui/lab';
// import StarIcon from '@mui/icons-material/Star';
import { styled  } from '@mui/material/styles';
import { lightBlue } from '@mui/material/colors';

import Auth from '../../utils/auth';

import {gridSectionStyles, gridStyles, imageStyles} from './ProductStyles.js';

const BoxBackground = styled(Box)(({ theme }) => ({
  paddingTop: '2rem',
  paddingBottom: '3rem',
  background: 'rgb(240, 240, 255)'
}));

const ContainerStyled = styled(Container)(({ theme }) => ({
  status: {
    background: lightBlue,
  },
}));

const labels = {
  0: 'Strong Dislike',
  0.5: 'Strong Dislike',
  1: 'Strong Dislike',
  1.5: 'Dislike',
  2: 'Dislike',
  2.5: 'Below Average',
  3: 'Average',
  3.5: 'Above Average',
  4: 'Above Average',
  4.5: 'Excellent',
  5: 'Amazing',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const Product = () => {
  const [userData, setUserData] = useState({});
  const [userReview, setUserReview] = useState({});
  const [productData, setProductData] = useState({});
  const [tabReviewValue, setTabReviewValue] = React.useState('1');
  const [reviewerStarValue, setReviewerStarValue] = React.useState(0.5);
  const [reviewerStarHover, setReviewerStarHover] = React.useState(-1);
  const [titleValue, setTitleValue] = React.useState('');
  const [commentValue, setCommentValue] = React.useState('');
  const [submittedValue, setSubmittedValue] = React.useState(false);

  const [dataReviews, setDataReviews] = React.useState([
    {
      username: "MissingNo.",
      rating: 1,
      title: "Lorem ipsum dolor sit amet.",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      username: "Tom",
      rating: 4,
      title: "Great bait.",
      comment: "Worked as intended to lure stuff."
    },
    {
      username: "Jerry",
      rating: 2,
      title: "Definitely did not like product.",
      comment: "Did not taste like cheese."
    },
    {
      username: "Rock",
      rating: 4.5,
      title: "Great product.",
      comment: "Amazingly hard cheese."
    }
  ]);

  const handleTabReviewChange = (event, newValue) => {
    event.preventDefault();
    setTabReviewValue(newValue);
  };

  const buildReviews = (reviews) => {
    return (
      <Stack spacing={4} sx={{m: 1}}>
        {reviews.map((review) => {
          return(
            <Stack spacing={0.5} sx={{borderTop: '1px solid #eee', paddingTop: '1rem'}}>
              <Box component="span">{review.username}</Box>
              <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Rating name="half-rating-read" value={review.rating} precision={0.5} readOnly />
                <Box component="span" sx={{ml: 1, fontWeight: 'bold'}}>{review.title}</Box>
              </Box>
              <Box component="p">{review.comment}</Box>
            </Stack>
            )
        })}
      </Stack>
    )
  };

  const handleReviewFormSubmit = (event) => {
    event.preventDefault();
    console.log("Submit button titleValue: ", titleValue);
    console.log("Submit button reviewerStarValue: ", reviewerStarValue);
    console.log("Submit button commentValue: ", commentValue)
  }

  const buildReviewerForm = () => {
    return (
      <Stack spacing={1}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '60ch' },
            '& .MuiButton-root': { width: '15ch' }
          }}
          onSubmit={handleReviewFormSubmit}
          noValidate
          autoComplete="off"
        >
          <Stack spacing={0}>
            <TextField
              id="reviewFormTitle"
              label="Title"
              placeholder="Title"
              multiline
              
              onChange={(event) => setTitleValue(event.target.value)}
            />
            <Box sx={{m: 1, display: 'flex', alignItems: 'center'}}>
              <Rating name="half-rating" defaultValue={reviewerStarValue} precision={0.5} 
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setReviewerStarValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setReviewerStarHover(newHover);
                }}
                // emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              {reviewerStarValue !== null && (
                <Box sx={{ ml: 2, mb: '0.5rem', alignItems: 'center' }}>{labels[reviewerStarHover !== -1 ? reviewerStarHover : reviewerStarValue]}</Box>
              )}
            </Box>
            <TextField
              id="reviewFormComment"
              label="Comment"
              multiline
              rows={4}
              placeholder="Comment"
              onChange={(event) => setCommentValue(event.target.value)}
            />
            <Button sx={{m: 1}} variant="contained" type="submit">Submit</Button>
            {submittedValue === true && (<Box component="span">Submitted</Box>)}
          </Stack>
        </Box>
      </Stack>
    )

  }


  // useEffect(() => {
  // }, [productData])

  return (
    <BoxBackground>
      <CssBaseline />
      <ContainerStyled maxWidth="lg" >
        <Grid
          container 
          spacing={0}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sx={gridSectionStyles} xs={12}
            container
            alignItems="center"
          >
            <Box component="h2" sx={{}}>Name of Product</Box>
            <Grid item sx={gridStyles} xs={12} 
              container
              justifyContent="center"
              alignItems="center"
            >
              <Grid item sx={gridStyles} xs={12} md={5}>
                <Box component="img" sx={imageStyles}
                  src='https://via.placeholder.com/1200x700'
                  alt=''
                />
              </Grid>
              <Grid item sx={gridStyles} xs={12} md={7}>
                <Stack spacing={1}>
                  <Box component="h3">Product description
                  </Box>
                  <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size="large" readOnly />
                    {reviewerStarValue !== null && (
                        <Box sx={{ ml: 1, alignItems: 'center' }}>{labels[reviewerStarValue]}</Box>
                      )}
                  </Box>
                  <Box component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Box>
                </Stack>
              </Grid>
            </Grid>
            <Grid item sx={gridStyles} xs={12} 
              container
              justifyContent="center"
              alignItems="center"
            >
              <Grid item sx={gridStyles} xs={12} >
                <Box sx={{ width: '100%', typography: 'body1' }}>
                  <TabContext value={tabReviewValue}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <TabList onChange={handleTabReviewChange} aria-label="lab API tabs example">
                        <Tab label="Reviews" value="1" />
                        <Tab label="Write a Review" value="2" />
                      </TabList>
                    </Box>
                    <TabPanel value="1">
                      {buildReviews(dataReviews)}
                    </TabPanel>
                    <TabPanel value="2">
                      {buildReviewerForm()}
                    </TabPanel>
                  </TabContext>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ContainerStyled>
    </BoxBackground>
  );
}

export default Product;
