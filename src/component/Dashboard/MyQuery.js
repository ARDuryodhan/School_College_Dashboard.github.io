import React, { useEffect, useState } from "react";

import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import { Button, Container, Table } from "react-bootstrap";

import QueryForm from "./QueryForm";
import axios from "axios";

function MyQuery() {
  const [queryList, setQueryList] = useState([]);

  const [showQueryForm, setShowQueryForm] = useState(false);
  

  const handleQuerySubmit = (queryData) => {
    setQueryList((prevQueryList) => [queryData, ...prevQueryList]);
    setShowQueryForm(false);
  };

  useEffect(() => {
    loadQueryList();
  }, []);

  const loadQueryList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/query/getAll");
      // console.log("Query List Data:", response.data);

      setQueryList(response.data);
    } catch (error) {
      console.error("Error loading query list:", error);
    }
  };

  return (
    <div className="myquery_container">
      <DashboardHeader />
      <div className="d-flex">
        <div>
          <DashboardSidebar />
        </div>
        <main className="queryMain_container">
          <Container>
            <h5>
              Query
              <Button variant="link" onClick={() => setShowQueryForm(true)}>
                Ask any Question?
              </Button>
            </h5>
            <hr />
            {showQueryForm && <QueryForm onSubmit={handleQuerySubmit} />}

            <div className="queryTable">
              <Table bordered hover>
                <thead>
                  <tr className="queryTable-heading">
                    <th>Query Category</th>
                    <th>Query Description</th>
                    <th>Query Date</th>
                    <th>Query Time</th>
                    <th>Status</th>
                    <th>Reply</th>
                  </tr>
                </thead>
                <tbody>
                  {queryList.map((queryItem, index) => (
                    <tr key={queryItem.id}>
                      <td className="text-center">{queryItem.queryCategory}</td>
                      <td>{queryItem.queryDescription}</td>

                      <td className="text-center">
                        {new Date(queryItem.date).toLocaleDateString()}
                      </td>
                      <td className="text-center">
                        {new Date(queryItem.date).toLocaleTimeString()}
                      </td>
                      <td className="text-center">{queryItem.status}</td>

                      <td className="text-center">{queryItem.replay}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Container>
        </main>
      </div>
    </div>
  );
}

export default MyQuery;
