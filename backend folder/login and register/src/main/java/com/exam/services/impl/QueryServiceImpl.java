package com.exam.services.impl;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.dto.QueryDto;
import com.exam.model.dashboard.Query;
import com.exam.repositories.QueryRepo;

import com.exam.services.QueryService;

@Service
public class QueryServiceImpl implements QueryService {

	
	@Autowired
	private QueryRepo queryRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	

	
	//create query
	@Override
	public QueryDto createQuery(QueryDto queryDto) {
		Query query = dtoToQuery(queryDto);
		
		query.setDate(new Date());
        Query save = queryRepo.save(query);
        QueryDto queryDto1 = queryToDto(save);
        return queryDto1;
		
	}
	
     //get all query
	@Override
	public List<QueryDto> getAllQuery() {
		 List<Query> allQuery = queryRepo.findAll();
	        return allQuery.stream().map(query -> queryToDto(query)).collect(Collectors.toList());
		
	}
	
	//mapping purpose
	private QueryDto queryToDto(Query query){
		
		QueryDto queryDto=this.modelMapper.map(query, QueryDto.class);
//        QueryDto queryDto = new QueryDto();
//        queryDto.setId(query.getId());
//        queryDto.setQueryCategory(query.getQueryCategory());
//        queryDto.setQueryDescription(query.getQueryDescription());
//         queryDto.setDate(new Date());
//         queryDto.setStatus(query.getStatus());
//         queryDto.setReplay(query.getReplay());
        return queryDto;
	}
	
	private Query dtoToQuery(QueryDto queryDto){
		
		Query query=this.modelMapper.map(queryDto, Query.class);
//        Query query = new Query();
//        query.setQueryCategory(queryDto.getQueryCategory());
//        query.setQueryDescription(queryDto.getQueryDescription());
//        query.setDate(new Date());
//        query.setStatus(queryDto.getStatus());
//        query.setReplay(queryDto.getReplay());
        return query;
	
	//old code
//	@Override
//	public String createQuery(QueryDto queryDto) {
//		
//		Query query =new Query(
//				queryDto.getId(),
//				queryDto.getQueryCategory(),
//				queryDto.getQueryDescription(),
//				queryDto.getDate(),
//				queryDto.getStatus(),
//				queryDto.getReplay());
//		
//			
//		query.setDate(new Date());
//		
//	    this.queryRepo.save(query);
//	   
//		return  "Query Submitted successfully !!!!";

		
	}
	
	

} 