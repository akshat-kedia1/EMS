import React, { useState ,useEffect} from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  //form submit
  const submitHandler = async (values) => {
    try {
        setLoading(true);
      const { data } = await axios.post("/users/login", values);
      message.success("Login success");
      setLoading(false);
      localStorage.setItem("user", JSON.stringify({ ...data.user, password: "" }));
      navigate('/');
    } catch (error) {
        setLoading(false);
      message.error("Laude lag gye");
    }
  };
  
  //prevent for login user
useEffect(()=>{
  if(localStorage.getItem('user'))
  {
    navigate('/')
  }
},[navigate])

  return (
    <>
      <div className="register-page">
        {loading && <Spinner/>}
        <Form layout="vertical" onFinish={submitHandler}>
          <h1>Login Form</h1>

          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/register">Not a user ? click Here to login</Link>
            <button className="btn btn-primary">Login</button>
          </div>
        </Form>
      </div>
    </>
  );
};
export default Login;
