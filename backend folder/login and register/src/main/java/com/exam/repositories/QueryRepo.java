package com.exam.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.exam.model.dashboard.Query;

@Repository
public interface QueryRepo  extends JpaRepository<Query, Integer>{

}
