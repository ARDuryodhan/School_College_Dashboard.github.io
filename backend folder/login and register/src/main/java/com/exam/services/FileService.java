package com.exam.services;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.exam.dto.FileUploadDto;
import com.exam.model.dashboard.FileUpload;

public interface FileService {
	
	public String uploadFile(String path,MultipartFile multipartFile) throws IOException;
	
    InputStream getResource(String path, String fileName) throws FileNotFoundException;
    
  //get file
  	public FileUpload getFileUpload(int id);
  	
//get all file
  	
  	public List<FileUploadDto> getAllFile();
  	
  	//delete file 
  	public void deleteFile(int id);
  	
  	//update file
  	public FileUploadDto updateFile(FileUploadDto fileUploadDto,int id);
}
