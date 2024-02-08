package com.exam.services.impl;

import java.util.Date;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.dto.ReviewDto;
import com.exam.model.dashboard.Review;
import com.exam.repositories.ReviewRepo;
import com.exam.services.ReviewService;
;

@Service
public class ReviewServiceImpl implements ReviewService {
	
	@Autowired
	private ReviewRepo reviewRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	//create review
	@Override
    public ReviewDto createReview(ReviewDto reviewDto) {
        Review review = dtoToQuery(reviewDto);

        review.setReview_date(new Date());
        Review saveReview = reviewRepo.save(review);
        ReviewDto revDto = queryToDto(saveReview);
        return revDto;
    }
   //get all review
    @Override
    public List<ReviewDto> getAllReview() {
        List<Review> allReview = reviewRepo.findAll();
        return allReview.stream().map(review->queryToDto(review)).collect(Collectors.toList());

    }

    //get review by id
    @Override
    public ReviewDto getReviewById(long id) {
        Review review = reviewRepo.findById(id).get();

        return queryToDto(review);
    }
    
    //delete review by id
    @Override
    public void deleteReviewById(long id) {
        reviewRepo.deleteById(id);
    }
  
    // update review
    @Override
    public ReviewDto updateReview(ReviewDto reviewDto, long id) {
        Review review = reviewRepo.findById(id).get();
        review.setReview_For(reviewDto.getReview_For());
        review.setReview_date(new Date());
        review.setCourse(reviewDto.getCourse());
        review.setOverall_Rating(reviewDto.getOverall_Rating());
        review.setIs_publish(reviewDto.getIs_publish());
        Review save = reviewRepo.save(review);
        return queryToDto(save);
    }

    private ReviewDto queryToDto(Review review){
    	
    	ReviewDto reviewDto=this.modelMapper.map(review, ReviewDto.class);
//        ReviewDto reviewDto = new ReviewDto();
//        reviewDto.setId(review.getId());
//        reviewDto.setReview_For(review.getReview_For());
//        reviewDto.setCourse(review.getCourse());
//        reviewDto.setOverall_Rating(review.getOverall_Rating());
//        reviewDto.setIs_publish(review.getIs_publish());
//        reviewDto.setReview_date(new Date());
        return reviewDto;

    }
    private Review dtoToQuery(ReviewDto reviewDto){
    	Review review=this.modelMapper.map(reviewDto, Review.class);
    	
    	//optional for map entity
//        Review review= new Review();
//        review.setReview_For(reviewDto.getReview_For());
//        review.setCourse(reviewDto.getCourse());
//        review.setOverall_Rating(reviewDto.getOverall_Rating());
//        review.setIs_publish(reviewDto.getIs_publish());
//        review.setReview_date(new Date());
        return review;
    }
	
	//old code
//	@Override
//	public String createReview(ReviewDto reviewDto) {
//		Review review= new Review(
//				reviewDto.getId(),
//				reviewDto.getReview_For(),
//				reviewDto.getCourse(),
//				reviewDto.getOverall_Rating(),
//				reviewDto.getIs_publish(),
//				reviewDto.getReview_date());
//				
//		review.setReview_date(new Date());
//	     this.reviewRepo.save(review);
//		return  "Review created !!!!";
		
	//}


}

