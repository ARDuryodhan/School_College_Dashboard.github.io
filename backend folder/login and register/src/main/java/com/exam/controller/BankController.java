package com.exam.controller;

import java.util.List;

import javax.validation.Valid;

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

import com.exam.dto.BankDto;
import com.exam.services.BankService;

@RestController
@CrossOrigin("*")
@RequestMapping("/bank")
public class BankController {

	@Autowired
	private BankService bankService;
	
	@PostMapping("/addBank")
    public ResponseEntity<BankDto> addBank( @Valid @RequestBody BankDto bankDto){
      return new ResponseEntity<>(bankService.addBank(bankDto), HttpStatus.CREATED);
    }
	
	
	 @PutMapping("updateBank/{id}")
	    public ResponseEntity<BankDto> updateReg( @Valid @RequestBody BankDto bankDto, @PathVariable long id){
	        BankDto bankResponse = bankService.updateBank(bankDto, id);

	        return new ResponseEntity<>(bankResponse, HttpStatus.OK);
	    }
	 
	 
    @GetMapping("/getAllBank")
    public List<BankDto> getAllBank(){
        return bankService.getAllBank();
    }
    
    @GetMapping("/getBank/{id}")
    public ResponseEntity<BankDto> getBankById(@PathVariable(name = "id") long id){

        return ResponseEntity.ok(bankService.getBankById(id));
    }

    @DeleteMapping("deleteBank/{id}")
    public ResponseEntity<String> deleteRegistration(@PathVariable(name = "id") long id){
        bankService.deleteBankById(id);
        return new ResponseEntity<>("Bank details deleted successfully.", HttpStatus.OK);
    }
    
}
