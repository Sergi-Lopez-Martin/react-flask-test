import os
SECRET_KEY = os.urandom(32)
basedir = os.path.abspath(os.path.dirname(__file__))
DEBUG = True
TESTING = True
CORS_HEADERS = "Access-Control-Allow-Origin"
CORS_HEADERS = 'Content-Type'
UPLOAD_PATH = 'uploads'
ALLOWED_EXTENSIONS = {'JPG', 'PNG'}