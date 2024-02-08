package com.exam.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.dto.BankDto;
import com.exam.model.dashboard.Bank;
import com.exam.repositories.BankRepo;
import com.exam.services.BankService;

@Service
public class BankServiceImpl implements BankService {

	@Autowired
	private BankRepo bankRepo;
	
	//add bank details
	@Override
	public BankDto addBank(BankDto bankDto) {
		Bank bank = mapToEntity(bankDto);
        Bank save = bankRepo.save(bank);
        BankDto bankDto1 = mapToDto(save);
        return bankDto1;
	}

	//get all bank details
	@Override
	public List<BankDto> getAllBank() {
		 List<Bank> allbank = bankRepo.findAll();
         return allbank.stream().map(bank -> mapToDto(bank)).collect(Collectors.toList());
	}

	//get by bank id
	@Override
	public BankDto getBankById(long id) {
		 Bank bank = bankRepo.findById(id).get();
	        return mapToDto(bank);
	}

	//delete 
	@Override
	public void deleteBankById(long id) {
		 bankRepo.deleteById(id);
		
	}

	@Override
	public BankDto updateBank(BankDto bankDto, long id) {
		 Bank bank = bankRepo.findById(id).get();
	        bank.setBankName(bankDto.getBankName());
	        bank.setAccountHolderName(bankDto.getAccountHolderName());
	        bank.setAccountNumber(bankDto.getAccountNumber());
	        bank.setIfscCode(bankDto.getIfscCode());
	        bank.setUpiId(bankDto.getUpiId());
	        Bank save = bankRepo.save(bank);

	        return mapToDto(save);
	}
	
	
	private BankDto mapToDto(Bank bank){
        BankDto bankDto = new BankDto();
        bankDto.setId(bank.getId());
        bankDto.setBankName(bank.getBankName());
        bankDto.setAccountHolderName(bank.getAccountHolderName());
        bankDto.setAccountNumber(bank.getAccountNumber());
        bankDto.setIfscCode(bank.getIfscCode());
        bankDto.setUpiId(bank.getUpiId());
        return bankDto;
    }
    private Bank mapToEntity(BankDto bankDto){
        Bank bank =new Bank();
        bank.setBankName(bankDto.getBankName());
        bank.setAccountHolderName(bankDto.getAccountHolderName());
        bank.setAccountNumber(bankDto.getAccountNumber());
        bank.setIfscCode(bankDto.getIfscCode());
        bank.setUpiId(bankDto.getUpiId());
        return bank;
    }

}
