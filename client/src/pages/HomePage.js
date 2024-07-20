import React, { useState } from "react";
import { Modal, Form, Input, Select, message } from "antd"; // Correct import statements
import Layout from "../components/Layout/Layout";
import axios from "axios";
import Spinner from "../components/Spinner";

function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [loading,setLoading]= useState(false)

  // Form Handling
  const handleSubmit = async(values) => {
    try{
      const user= JSON.parse(localStorage.getItem('user'))
    setLoading(true)
    await axios.post('/transections/add-transection',{userid:user._id})  
    setLoading(false)
    message.success('Transaction Added Succesfully')
    setShowModal(false)
    } catch(error){
      setLoading(false)
      message.error('Failed to add Transaction')

    }
  };

  return (
    <Layout>
      {loading && <Spinner/>}
      <div className="filters">
        <div>Range Filters</div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            New Transaction
          </button>
        </div>
      </div>
      <div className="content"></div>
      <Modal
        title="Add Transaction"
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Amount" name="amount">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Type" name="type">
            <Select>
              <Select.Option value="income">Income</Select.Option>
              <Select.Option value="expense">Expense</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Category" name="category">
            <Select>
              <Select.Option value="salary">Salary</Select.Option>
              <Select.Option value="tip">Tip</Select.Option>
              <Select.Option value="project">Project</Select.Option>
              <Select.Option value="food">Food</Select.Option>
              <Select.Option value="movie">Movie</Select.Option>
              <Select.Option value="bills">Bills</Select.Option>
              <Select.Option value="medical">Medical</Select.Option>
              <Select.Option value="fee">Fee</Select.Option>
              <Select.Option value="tax">Tax</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Date" name="date">
            <Input type="date" />
          </Form.Item>
          <Form.Item label="Reference" name="reference">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input type="text" />
          </Form.Item>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">{" "} SAVE</button>
          </div>
        </Form>
      </Modal>
    </Layout>
  );
}

export default HomePage;
