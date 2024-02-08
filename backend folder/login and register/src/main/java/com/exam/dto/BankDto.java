package com.exam.dto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BankDto {

	
	private long id;
	@NotEmpty(message="please enter bank name !!")
    private String bankName;
	
	@NotEmpty(message="please enter account holder name !!!")
    private String accountHolderName;
	
	@NotEmpty
    @Size(min=12,max=12,message="Account number should be 12 digit accepted")
    @Pattern(regexp ="^[0-9]{9,18}$",message="please enter correct Account number please check at once!!" )
    private String accountNumber;
	
	@NotEmpty(message="please enter IFSC code in your bank !!!")
	@Size(min=11,max=11)
	@Pattern(regexp = "^[A-Z]{4}[0][A-Z0-9]{6}$",message="Exact length should be 11 First 4 alphabets Fifth character is 0 Last six characters (usually numeric, but can be alphabetic)")
    private String ifscCode;
	
	@NotEmpty
//	@Pattern(regexp = "[a-zA-Z0-9\\\\.\\\\-]{2,256}\\\\@[a-zA-Z][a-zA-Z]{2,64}",message="UPI ID is an alphanumeric String i.e., formed using digits(0-9), alphabets (A-Z and a-z), and other special characters It must contain ‘@’ It should not contain whitespace. It may or may not contain a dot (.) or hyphen (-).")
	 private String upiId;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	public String getAccountHolderName() {
		return accountHolderName;
	}

	public void setAccountHolderName(String accountHolderName) {
		this.accountHolderName = accountHolderName;
	}

	public String getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}

	public String getIfscCode() {
		return ifscCode;
	}

	public void setIfscCode(String ifscCode) {
		this.ifscCode = ifscCode;
	}

	public String getUpiId() {
		return upiId;
	}

	public void setUpiId(String upiId) {
		this.upiId = upiId;
	}
	
	
	
	
	
	
	
	
}
