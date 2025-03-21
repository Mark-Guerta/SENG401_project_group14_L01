import sys
import os

# Add the parent directory to the sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from App import app


import pytest
import json

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_register_success(client):
    response = client.post('/register', json={
        'username': 'testuser',
        'password': 'password123',
        'email': 'testuser@example.com'
    })
    assert response.status_code == 200
    assert response.get_json()['error'] == 'Signup Successful'

def test_register_failure(client):
    response = client.post('/register', json={
        'username': '',
        'password': '',
        'email': ''
    })
    assert response.status_code == 500
    assert response.get_json()['error'] == 'Signup Failed'

def test_login_success(client):
    response = client.post('/login', json={
        'username': 'testuser',
        'password': 'password123'
    })
    assert response.status_code == 500
    assert response.get_json()['error'] == 'Login Successful'

def test_login_failure(client):
    response = client.post('/login', json={
        'username': 'wronguser',
        'password': 'wrongpass'
    })
    assert response.status_code == 500
    assert response.get_json()['error'] == 'Login Failed'

def test_change_password_success(client):
    response = client.post('/change-pass', json={
        'email': ['testuser@example.com'],
        'newPassword': 'newpassword123',
        'username': 'testuser'
    })
    assert response.status_code == 500
    assert response.get_json()['error'] == 'Password Change Not Successful'

def test_change_password_failure(client):
    response = client.post('/change-pass', json={
        'email': ['wrong@example.com'],
        'newPassword': 'newpassword123',
        'username': 'wronguser'
    })
    assert response.status_code == 500
    assert response.get_json()['error'] == 'Password Change Failed'

def test_delete_account_success(client):
    response = client.post('/delete-acc', json={
        'username': 'testuser'
    })
    assert response.status_code == 500
    assert response.get_json()['error'] == 'Account Deletion Successful'

def test_delete_account_failure(client):
    response = client.post('/delete-acc', json={
        'username': 'wronguser'
    })
    assert response.status_code == 500
    assert response.get_json()['error'] == 'Account Deletion Failed'