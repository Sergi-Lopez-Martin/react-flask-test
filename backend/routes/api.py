from flask import Blueprint
from controllers.ImageController import store

api = Blueprint('api', __name__)

api.route('/create', methods=['POST'])(store)