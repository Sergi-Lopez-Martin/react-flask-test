import os
from flask import current_app, request
from PIL import Image, ImageEnhance

class ImageService():
    @property
    def serialize(self):
        return {

        }
    def save(image):
        image.save(os.path.join(current_app.config['UPLOAD_PATH'], image.filename))
    def getUrl(image):
        return current_app.config['UPLOAD_PATH']+'/'+image.filename
    def changeContrast(imageUrl,filename,filter):
        image = Image.open(imageUrl)
        contrast = ImageEnhance.Contrast(image)
        contrast.enhance(int(filter)/10).save(current_app.config['UPLOAD_PATH']+'/'+'contrast-'+filename)
    def getContrastUrl(filename):
        return request.url_root+current_app.config['UPLOAD_PATH']+'/'+'contrast-'+filename