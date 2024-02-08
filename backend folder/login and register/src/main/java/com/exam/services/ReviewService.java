package com.exam.services;

import java.util.List;

import com.exam.dto.ReviewDto;

public interface ReviewService {
	
	//create review
    public ReviewDto createReview(ReviewDto reviewDto);

    //get all reviews
    List<ReviewDto> getAllReview();
    
    //get review by id
    ReviewDto getReviewById(long id);

    //delete review
   void deleteReviewById(long id);

   //update review
    ReviewDto updateReview(ReviewDto reviewDto, long id);

//old code
//	//create review
//		public String createReview(ReviewDto reviewDto);
}
