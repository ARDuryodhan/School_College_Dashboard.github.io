package com.exam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.dto.ReviewDto;
import com.exam.services.ReviewService;


@RestController
@CrossOrigin("*")
@RequestMapping("/review")
public class ReviewController {
	
	@Autowired
	private ReviewService reviewService;
	
	
	 @PostMapping("/create")
	    public ResponseEntity<ReviewDto> createReview(@RequestBody ReviewDto reviewDto) {
	        return new ResponseEntity<>(reviewService.createReview(reviewDto), HttpStatus.CREATED);
	    }
	    @GetMapping("/getAllReview")
	    public List<ReviewDto> getAllReview(){
	        return reviewService.getAllReview();
	    }
	    @GetMapping("get/{id}")
	    public ResponseEntity<ReviewDto> getReviewById(@PathVariable(name = "id") long id){

	        return ResponseEntity.ok(reviewService.getReviewById(id));
	    }

	    @DeleteMapping("delete/{id}")
	    public ResponseEntity<String> deleteReview(@PathVariable(name = "id") long id){
	        reviewService.deleteReviewById(id);
	        return new ResponseEntity<>("Review entity deleted successfully.", HttpStatus.OK);
	    }
	    @PutMapping("update/{id}")
	    public ResponseEntity<ReviewDto> updateReview(@RequestBody ReviewDto reviewDto, @PathVariable long id){
	        ReviewDto reviewResponse = reviewService.updateReview(reviewDto, id);

	        return new ResponseEntity<>(reviewResponse, HttpStatus.OK);
	    }

	
	
	//old code only for save
//	@PostMapping("/create")
//	public ResponseEntity<String> createReview(@RequestBody ReviewDto reviewDto)
//	{
//			
//	    String s=this.reviewService.createReview(reviewDto);
//		return new ResponseEntity<>(s,HttpStatus.CREATED);
//		
//	}

}
