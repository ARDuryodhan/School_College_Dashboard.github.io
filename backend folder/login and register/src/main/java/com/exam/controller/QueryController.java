package com.exam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.dto.QueryDto;

import com.exam.services.QueryService;


@RestController
@RequestMapping("/query")
@CrossOrigin(origins = "*")
public class QueryController {
	
	@Autowired
	private QueryService queryService;
	
	 @PostMapping("/create")
	    public ResponseEntity<QueryDto>createQuery(@RequestBody QueryDto queryDto){
	        QueryDto queryDt = queryService.createQuery(queryDto);
	        return new ResponseEntity<>(queryDt, HttpStatus.CREATED);

	    }
	    
	 @GetMapping("/getAll")
	    public List<QueryDto> getAllQuery(){
	        return queryService.getAllQuery();
	    }
	
	
	//old code
//	@PostMapping("/create")
//	public ResponseEntity<String> createQuery(@RequestBody QueryDto queryDto)
//	{
//			
//	    String s=this.queryService.createQuery(queryDto);
//		return new ResponseEntity<>(s,HttpStatus.CREATED);
//		
//	}

}
