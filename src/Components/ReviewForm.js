import React, { useState } from 'react'; // Import React
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Review from './Reviews';

const ReviewForm = () => {
  // First, we set the state
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);

  // Then we handle the submission event
  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, reviewText]);
    setReviewText('');
  };

  return (
    <div>
      <h5>Leave a Review</h5>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit} 
      >
        <TextField
          id="outlined-basic"
          type='text'
          label="Review"
          variant="outlined"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)} 
        />
        <Button variant='outlined' type='submit'>Submit</Button>
      </Box>
      <ul>
        {reviews.map((text, index) => (
            <Review key={index} reviewText={text} />
        ))}
</ul>

    </div>
  );
};

export default ReviewForm;
