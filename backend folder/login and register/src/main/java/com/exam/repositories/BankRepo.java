package com.exam.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.exam.model.dashboard.Bank;

@Repository
public interface BankRepo extends JpaRepository<Bank, Long> {

}
