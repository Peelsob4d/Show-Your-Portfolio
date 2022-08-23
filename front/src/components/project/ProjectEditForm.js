import React, { useState } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';

function ProjectEditForm({ project, onClick, updateClosure }) {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [date, setDate] = useState(project.date);

  const { setUpdate, postUpdate } = updateClosure;

  const handleEditClick = () => {
    setUpdate({ ...project, name, description, date });
    postUpdate();
    onClick();
  };

  return (
    <Form className='mt-3 mb-3'>
      <Form.Group className='mb-3'>
        <Form.Control
          type='text'
          placeholder='프로젝트 제목'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control
          type='text'
          placeholder='상세내역'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group className='mb-3 w-50'>
        <Row>
          <Col>
            <Form.Control
              type='date'
              value={date.start}
              onChange={(e) => setDate({ ...date, start: e.target.value })}
            />
          </Col>
          <Col>
            <Form.Control
              type='date'
              value={date.end}
              onChange={(e) => setDate({ ...date, end: e.target.value })}
            />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className='d-flex justify-content-center'>
        <Button variant='primary' className='me-3' onClick={handleEditClick}>
          확인
        </Button>
        <Button variant='secondary' onClick={onClick}>
          취소
        </Button>
      </Form.Group>
    </Form>
  );
}

export default ProjectEditForm;
