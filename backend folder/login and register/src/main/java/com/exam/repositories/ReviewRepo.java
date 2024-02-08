package com.exam.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.exam.model.dashboard.Review;


@Repository
public interface ReviewRepo extends JpaRepository<Review, Long> {

}
