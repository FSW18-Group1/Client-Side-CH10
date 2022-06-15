import { Form, Button, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { authenticatedAction } from "../../redux/actions/authenticated";
import axios from "axios";
import Link from 'next/link'

export default function Profile() {
  const profile = useSelector((state) => state);
  const { token, data } = useSelector((state) => state.authenticatedReducer);
  const dispatch = useDispatch();
  const router = useRouter();
  const id = data.id;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    dispatch(authenticatedAction());
  }, []);

  useEffect(() => {
    setName(data.username);
    setEmail(data.email);
  }, [data]);

  const onSubmit = (e) => {
    console.log("masuk gan", token);
    e.preventDefault();
    const bodyUpdate = {
      name,
      email,
      id,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const url = `https://challenge-chapter-9.herokuapp.com/profile/${id}`;
    axios
      .put(url, bodyUpdate, config)
      .then((res) => {
        localStorage.removeItem("data");
        localStorage.setItem("data", JSON.stringify(bodyUpdate));
        // router.push("/");
        console.log("res", JSON.stringify(bodyUpdate))
      })
      .catch((err) => {
        // console.log("3. gagal: " + err.message);
      });
  };
  return (
    <>
      <div className="section">
        <Form onSubmit={(e) => onSubmit(e)} className="container profile-form">
          <div className="profile-picture"></div>
          <h1 className="py-4">Edit Profile</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <div className="d-flex justify-content-start">
            <div className="me-4 btn btn-danger">
              <Link href={'/'}><a className='ahref'>back</a></Link>
            </div>
            <Button variant="primary" type="submit">
              Edit data
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}
