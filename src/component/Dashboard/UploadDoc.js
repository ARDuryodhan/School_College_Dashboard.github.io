import React, { useEffect, useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import { Button, Card, Container } from "react-bootstrap";
import axios from "axios";

function UploadDoc() {
  const [document, setDocument] = useState();

  const [selectedCategory, setSelectedCategory] = useState("");

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files && e.target.files[0];

    if (selectedFile) {
      setDocument(selectedFile);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    
    
    formData.append("multipartFile", document);
    formData.append("selectCategory", selectedCategory);

    const config = {
      headers:{
        "Content-type": "multipart/form-data"
      }
    }
    const response = await axios.post("http://localhost:3000/file/upload",formData, config);
    console.log(response);
  };

  const fetchUploadedFiles = () => {
    axios
      .get(`http://localhost:8080/file/getAllFile`)
      .then((res) => {
        setUploadedFiles(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUploadedFiles();
  }, []);

  return (
    <div className="uploadDoc_container">
      <DashboardHeader />
      <div className="d-flex">
        <div>
          <DashboardSidebar />
        </div>
        <main className="uploadDocMain_container">
          <Container>
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <h5>Upload Documents</h5>
            </div>
            <hr />
            <div className="UploadDoc">
              <form
                onSubmit={(e) => handleSubmit(e)}
                encType="multipartFile/form-data"
              >
                <div className="">
                  <label>Select Document</label>
                  <select
                    name="type"
                    id="type"
                    className="form-control"
                    required
                    onChange={handleCategoryChange}
                  >
                    <option value="">- - Select Document - - </option>
                    <option value="profile pic"> Profile Image</option>
                    <option value="aadhar front"> Aadhar Front</option>
                    <option value="aadhar back"> Aadhar Back</option>
                    <option value="ten marksheet"> 10th Marksheet</option>
                    <option value="twel marksheet"> 12th Marksheet</option>
                    <option value="gradut marksheet">
                      Graduation Marksheet
                    </option>
                    <option value="post graduate">
                      Post Graduation Marksheet
                    </option>
                    <option value="caste"> Caste Certificate</option>
                    <option value="income"> Income Certificate</option>
                    <option value="fee receipt">
                      College Payment / Fee Receipt
                    </option>
                    <option value="signature">Signature</option>
                    <option value="neet_score_card">NEET Score Card</option>
                  </select>
                </div>
                <div>
                  <label>Upload File (max 1MB) &nbsp;</label>
                  <br />
                  <input
                    type="file"
                    accept=".jpg, .jpeg, .png, .pdf"
                    required
                    onChange={handleFileChange}
                  />
                </div>
                <Button type="submit">Upload</Button>
              </form>
            </div>
              <h6>Uploaded Documnents</h6>
            <div className="showDoc">
              {uploadedFiles.map((file) => (
                <Card key={file.id}>
                  <Card.Body>
                    {/* <Card.Img
                      src={`http://localhost:8080/file/get/${file.id}`}
                      alt={file.selectCategory}
                    /> */}
                    <Card.Text>{file.selectCategory}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Container>
        </main>
      </div>
    </div>
  );
}

export default UploadDoc;
