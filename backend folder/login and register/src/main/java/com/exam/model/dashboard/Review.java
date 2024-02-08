package com.exam.model.dashboard;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="Reviews")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Review {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
   private long id;
   private String review_For;
   private String course;
   private String overall_Rating;
   private String is_publish;
   private Date review_date;
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getReview_For() {
	return review_For;
}
public void setReview_For(String review_For) {
	this.review_For = review_For;
}
public String getCourse() {
	return course;
}
public void setCourse(String course) {
	this.course = course;
}
public String getOverall_Rating() {
	return overall_Rating;
}
public void setOverall_Rating(String overall_Rating) {
	this.overall_Rating = overall_Rating;
}
public String getIs_publish() {
	return is_publish;
}
public void setIs_publish(String is_publish) {
	this.is_publish = is_publish;
}
public Date getReview_date() {
	return review_date;
}
public void setReview_date(Date review_date) {
	this.review_date = review_date;
}
   
   
}
