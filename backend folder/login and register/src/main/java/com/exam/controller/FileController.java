package com.exam.controller;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import javax.servlet.http.HttpServletResponse;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.exam.dto.FileResponse;
import com.exam.dto.FileUploadDto;
import com.exam.model.dashboard.FileUpload;
import com.exam.services.FileService;



@RestController
@RequestMapping("/file")
@CrossOrigin("*")
public class FileController {
	
	@Autowired
	private FileService fileService;
	
	@Value("${project.image}")
	private String path;
	
	 @PostMapping("/upload")
	    public String uploadFile(@RequestParam("selectCategory") String selectCategory,
	                             @RequestParam("multipartFile") MultipartFile multipartFile) throws IOException 
	 {
	        return this.fileService.uploadFile(selectCategory, multipartFile);
	    
//		String fileName=null;
//		
//		try 
//		{
//			fileName=this.fileService.uploadFile(path, multipartFile);
//		} 
//		catch (IOException e)
//		{
//			
//			e.printStackTrace();
//			return new ResponseEntity<>(new FileResponse(fileName, "Image not upload due to some issue!!!"),HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//		
//		return new ResponseEntity<>(new FileResponse(fileName, "Image Upload successfully"),HttpStatus.OK);
	}

	
	@GetMapping(value = "profile/{imageName}",produces = MediaType.IMAGE_JPEG_VALUE)
    public void downloadImage(@PathVariable("imageName") String imageName, HttpServletResponse response) throws IOException {

        InputStream resource = this.fileService.getResource(path, imageName);
        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(resource,response.getOutputStream());
    }
	

	 //get by id using file
	 
	 @GetMapping("/get/{id}")
	    public ResponseEntity<FileUpload> getFileUpload(@PathVariable int id) {
	        FileUpload fileUpload = fileService.getFileUpload(id);
	        if (fileUpload != null) {
	            return ResponseEntity.ok(fileUpload);
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }
	 
	 //get all file
	 @GetMapping("/getAllFile")
	    public List<FileUploadDto> getAllFile(){
	        return fileService.getAllFile();
	    }
	 
	 //delete file
	 @DeleteMapping("deleteFile/{id}")
	    public ResponseEntity<String> deleteFile(@PathVariable(name = "id") int id){
	        fileService.deleteFile(id);
	        return new ResponseEntity<>("file  deleted successfully.", HttpStatus.OK);
	    }
	 
	 

	 
	 //update file
	 @PutMapping(value = "/updateFile/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	    public ResponseEntity<FileUploadDto> updateFile(@RequestParam("multipartFile") MultipartFile multipartFile,
	                                                    @RequestParam("selectCategory") String selectCategory,
	                                                    @PathVariable("id") int id) throws IOException {

	        FileUploadDto fileUploadDto = new FileUploadDto();
	        fileUploadDto.setSelectCategory(selectCategory);
	        fileUploadDto.setDocument(multipartFile.getBytes());

	        FileUploadDto updatedFile = fileService.updateFile(fileUploadDto, id);

	        return new ResponseEntity<>(updatedFile, HttpStatus.OK);
	 }

	 
}
