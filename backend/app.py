from flask import Flask, send_from_directory
from flask_cors import CORS
from routes.api import api

app = Flask(__name__)
app.config.from_object('config')
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.url_map.strict_slashes = False

app.register_blueprint(api, url_prefix='/api')

@app.route('/'+app.config['UPLOAD_PATH']+"/<path:path>")
def static_dir(path):
    return send_from_directory(app.config['UPLOAD_PATH'], path)

if __name__ == '__main__':
    app.debug = True
    app.run()