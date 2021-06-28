# pseudo code
import sys
import os
from flask import redirect, url_for, request, abort, send_file, jsonify, current_app
from services.ImageService import ImageService
from flask import current_app

def store():
    if not "." in request.files['postFile'].filename:
        return "Unsupported Media Type Provided", 415
        
    ext = request.files['postFile'].filename.rsplit(".", 1)[1]

    if ext.upper() in current_app.config["ALLOWED_EXTENSIONS"]:
        ImageService.save(request.files['postFile'])
        imageUrl = ImageService.getUrl(request.files['postFile'])
        ImageService.changeContrast(imageUrl, request.files['postFile'].filename, request.form.get('filter'))
        imageUrl = ImageService.getContrastUrl(request.files['postFile'].filename)
        return imageUrl
    else:
        return "Unsupported Media Type Provided", 415