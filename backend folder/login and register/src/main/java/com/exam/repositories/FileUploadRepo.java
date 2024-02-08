package com.exam.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.exam.model.dashboard.FileUpload;

@Repository
public interface FileUploadRepo extends JpaRepository<FileUpload, Integer> {

}
