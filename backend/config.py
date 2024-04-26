import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'a-very-secret-key'
    # Change the name of the database file here
    DATABASE_NAME = 'flowwsnext.db'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'sqlite:///' + os.path.join(os.getcwd(), DATABASE_NAME)
    SQLALCHEMY_TRACK_MODIFICATIONS = False

