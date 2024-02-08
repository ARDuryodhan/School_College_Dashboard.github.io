package com.exam.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class FileUploadDto {

	private int id;
	private String selectCategory;
	
	
	private byte[] document;


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getSelectCategory() {
		return selectCategory;
	}


	public void setSelectCategory(String selectCategory) {
		this.selectCategory = selectCategory;
	}


	public byte[] getDocument() {
		return document;
	}


	public void setDocument(byte[] document) {
		this.document = document;
	}
	
	
}
