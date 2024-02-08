package com.exam.services;

import java.util.List;

import com.exam.dto.QueryDto;

public interface QueryService {
	
	//public String createQuery(QueryDto queryDto)
	
		public QueryDto createQuery(QueryDto queryDto);

	     List<QueryDto> getAllQuery();

}
