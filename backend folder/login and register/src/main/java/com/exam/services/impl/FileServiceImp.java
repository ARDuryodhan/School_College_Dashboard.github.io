package com.exam.services.impl;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.exam.dto.FileUploadDto;
import com.exam.model.dashboard.FileUpload;
import com.exam.repositories.FileUploadRepo;
import com.exam.services.FileService;


@Service
public class FileServiceImp implements FileService {
	
	
	@Autowired
	private FileUploadRepo fileUploadRepo;


@Autowired
private ModelMapper modelMapper;
	@Override
	public String uploadFile(String path, MultipartFile multipartFile) throws IOException {
		
		
		FileUpload fileUpload= new FileUpload();
		fileUpload.setSelectCategory(path);
		
		fileUpload.setDocument(multipartFile.getBytes());
				
		this.fileUploadRepo.save(fileUpload);
		return "file upload  successfully saved in database";
		
		
		
		
		
//		String name=multipartFile.getOriginalFilename();
//		
//		String filePath=path+File.separator+ name;
//		
//		String randomId=UUID.randomUUID().toString();
//		  String fileName1=randomId.concat(name.substring(name.lastIndexOf(".")));
//		
//		  String filePath1=path+File.separator+ fileName1;
//		
//		  File f=new File(filePath1);
//		
//		
//		
//		if(!f.exists())
//		{
//			f.mkdir();
//		}
//		
//		Files.copy(multipartFile.getInputStream(), Paths.get(filePath1));
//		return name;
	}

	
	@Override
    public InputStream getResource(String path, String fileName) throws FileNotFoundException {
        String fullPath = path+File.separator+fileName;
        InputStream is= new FileInputStream(fullPath);
        
        //db login to return input stream
        return is;
    }
	
	@Override
    public FileUpload getFileUpload(int id) {
        // Assuming fileId is the primary key of your FileUpload entity
        return this.fileUploadRepo.findById(id).orElse(null);
    }
	
	
	//get all review
    @Override
    public List<FileUploadDto> getAllFile() {
        List<FileUpload> allFile = fileUploadRepo.findAll();
        return allFile.stream().map(file->fileUploadToDto(file)).collect(Collectors.toList());
    }
    
    //delete file
    @Override
	public void deleteFile(int id) {
		fileUploadRepo.deleteById(id);
		
	}

    //update file
	@Override
	public FileUploadDto updateFile(FileUploadDto fileUploadDto,int id) {
		FileUpload fileUpload=fileUploadRepo.findById(id).get();
		
		fileUpload.setSelectCategory(fileUploadDto.getSelectCategory());
		fileUpload.setDocument(fileUploadDto.getDocument());
		
		FileUpload save = fileUploadRepo.save(fileUpload);
		
		return fileUploadToDto(save);
	}
    
    
	
    
    //for model mapper used
	  private FileUploadDto fileUploadToDto(FileUpload fileUpload){
	    	
	    	FileUploadDto fileUploadDto1=this.modelMapper.map(fileUpload, FileUploadDto.class);
//        FileUploadDto fileUploadDto1 = new FileUploadDto();
//	        fileUploadDto1.setId(fileUpload.getId());
//	        fileUploadDto1.setSelectCategory(fileUpload.getSelectCategory());
//	        fileUploadDto1.setDocument(fileUpload.getDocument());
	        
	       
	        return fileUploadDto1;

	    }
	    private FileUpload dtoToFileUpload(FileUploadDto fileUploadDto){
	    	FileUpload fileUpload=this.modelMapper.map(fileUploadDto, FileUpload.class);
	    	
	    	//optional for map entity
//	    	FileUpload fileUpload=new FileUpload();
//	    	fileUpload.setId(fileUploadDto.getId());
//	    	fileUpload.setSelectCategory(fileUploadDto.getSelectCategory());
	    	fileUpload.setDocument(fileUploadDto.getDocument());

	        return fileUpload;
	    }

}
