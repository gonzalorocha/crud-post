import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { deletePost, getPost, selectPost } from "../store/actions";
import { Button, Card, CardBody, CardFooter, CardHeader, Container, Table } from "reactstrap";
import styled from "styled-components";

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContainerTable = styled.div`
  height: 600px;
  overflow: auto;`;

const Posts = ({ history, posts, deletePost, getPost, selectPost }) => {
    useEffect(() => {
        getPost();
    },[getPost])

    const handleOnEdit = (id) => {
        selectPost({id})
        history.push({
            pathname: '/post-form',
            state: { edit: true }
        })
    }

    const handleOnDelete = (id) => {
        deletePost({ id });
    }

    const handleOnCreate = () => {
        history.push('/post-form')
    }

    const handleOnRefresh = () => {
        getPost();
    }

    return (
        <Container className="themed-container">
            <Card>
            <CardHeader>
                <HeaderDiv>
                    Posts
                    <Button color="info" onClick={handleOnRefresh}>Refresh</Button>  
                </HeaderDiv>
            </CardHeader>
            <CardBody>
                <ContainerTable>
                    <Table
                        hover
                        style={{maxHeight: 600}}
                    >
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>User</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                        </thead>
                        <tbody>
                        {posts.map((post) => (
                            <tr key={post.id}>
                                <th scope="row">{post.id}</th>
                                <td>{post.userId}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td>
                                    <Button color="info" onClick={() => handleOnEdit(post.id)}>Edit</Button>
                                </td>
                                <td>
                                    <Button color="danger" onClick={() => handleOnDelete(post.id)}>Del</Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </ContainerTable>
            </CardBody>
            <CardFooter>
                <Button color="success" onClick={handleOnCreate}>New</Button>
            </CardFooter>
            </Card>
        </Container>
    );
};

const mapStatetoProps = ({  post: { posts } }) => ({ posts });

export default connect(mapStatetoProps, { getPost, selectPost, deletePost })(Posts);