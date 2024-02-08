package com.exam.model.dashboard;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class FileUpload {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String selectCategory;
	
	@Lob
	@Column(columnDefinition = "LONGBLOB")
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
