package com.exam.services;

import java.util.List;

import com.exam.dto.BankDto;

public interface BankService {
	
	BankDto addBank(BankDto bankDto);

    List<BankDto> getAllBank();

    BankDto getBankById(long id);

    void deleteBankById(long id);

    BankDto updateBank(BankDto bankDto, long id);

}
