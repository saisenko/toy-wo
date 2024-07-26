"""
Initialise app
"""


import os
from flask import Flask
from flask_pymongo import PyMongo
from dotenv import load_dotenv


load_dotenv()
mongo = PyMongo()

def create_app():
    """
    Create app
    """
    app = Flask(__name__)
    app.config["MONGO_URI"] = os.getenv("MONGO_URI")
    mongo.init_app(app)

    with app.app_context():
        from . import routes
        app.register_blueprint(routes.bp)
        # app.config['MONGO'] = mongo

    return app
