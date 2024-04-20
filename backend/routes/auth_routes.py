from flask import Blueprint, request, jsonify, session
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash
from backend import db
from backend.models.user import User

auth_bp = Blueprint('auth', __name__, url_prefix='/auth')

@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'error': 'Username and password are required'}), 400

    existing_user = User.query.filter_by(username=username).first()
    if existing_user:
        return jsonify({'error': 'User already exists'}), 409

    new_user = User(username=username)
    new_user.set_password(password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User created successfully'}), 201


@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()
    if user and user.check_password(password):
        session['user_id'] = user.id  
        return jsonify({'message': 'Login successful', 'username': username}), 200
    else:
        return jsonify({'error': 'Invalid credentials'}), 401


@auth_bp.route('/check-auth', methods=['GET'])
def check_auth():
    user_id = session.get('user_id')
    if user_id:
        # Assuming User is your user model and you have a method to get a user by ID
        user = User.query.get(user_id)
        if user:
            return jsonify({'username': user.username}), 200
    return jsonify({'error': 'Not authenticated'}), 401


@auth_bp.route('/logout', methods=['GET'])
def logout():
    session.pop('user_id', None)  # Use 'user_id' to match what you set during login
    return jsonify({'message': 'Logout successful'}), 200



