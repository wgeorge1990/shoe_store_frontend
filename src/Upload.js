import React from 'react'
import { Container, Segment, Form, Button, Input, Grid } from 'semantic-ui-react';

export default class Upload extends React.Component {
    state = {
        image: null
    }

    fileHandler = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    };

    handleSubmit = (e) => {
        const url = 'http://localhost:3000/api/v1/images'
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', this.state.image);
        formData.append('product_id', 1);

        const options = {
            method: 'POST',
            body: formData
        }
        fetch(url, options)
            .then(res => res.json).then(res => console.log(res.url))
    };

    render() {
        return (
            <div>Upload Component
            <Form onSubmit={(e) => this.handleSubmit(e)}>
                <Form.Input
                    label='File'
                    name='file'
                    type="file"
                    onChange={(e) => this.fileHandler(e)} />
                    <Button type="submit">Pin Image</Button>
                </Form>
                
            </div>
        )
    }
}