import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { newPost, editPost } from "../store/actions";

import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, FormGroup, Input, Label } from "reactstrap";

const PostForm = ({ history, location, selectpost, newPost, editPost }) => {
    const [ editing, setEditing ] = useState(0)
    const [ post, setPost ] = useState({
        userId: 0,
        title: "",
        body: ""
    });

    useEffect(() => {
      if (location.state) {
        const { edit } = location.state;
        setEditing(edit);
        if (selectpost) {
          setPost(selectpost);
        }
      }
    }, [location.state, selectpost]);


    
    const handleInputChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value});
    }

    const handleOnCancel = () => {
        history.push('/posts')
    }

    const handleOnSave = (e) => {
        e.preventDefault();
        if (editing) {
            const { id } = selectpost;
            editPost({ id, post })
        } else {
            newPost({ post })
        }
        history.push("/posts");
    };


    const { userId, title, body } = post;
    return (  
        <Container className="themed-container">
            <Card>
                <CardHeader>
                    {editing ? "Edit post" : "New post"}
                </CardHeader>
                <CardBody>
                    <Form>
                        <FormGroup row>
                            <Label for="userId" sm={2}>User</Label>
                            <Col sm={10}>
                            <Input type="number" name="userId" id="userId" placeholder="User" value={userId} onChange={handleInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="title" sm={2}>Title</Label>
                            <Col sm={10}>
                            <Input type="text" name="title" id="title" placeholder="title" value={title} onChange={handleInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="body" sm={2}>Body</Label>
                            <Col sm={10}>
                            <Input type="textarea" name="body" id="title" placeholder="Body" value={body} onChange={handleInputChange} />
                            </Col>
                        </FormGroup>
                    </Form>
                </CardBody>
                <CardFooter>
                    <Button style={{marginRight: 10}} color="success" onClick={handleOnSave}>Save</Button>
                    <Button style={{marginRight: 10}} color="danger" onClick={handleOnCancel}>Cancel</Button>
                </CardFooter>
            </Card>
        </Container>
    );
}
 
const mapStatetoProps = ({ post: { selectpost } }) => ({ selectpost });

export default connect(mapStatetoProps, { newPost, editPost })(PostForm);