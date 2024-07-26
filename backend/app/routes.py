"""
Initialise routes
"""

from bson import ObjectId
from flask import Blueprint, request, jsonify, current_app
from app import mongo

bp = Blueprint('routes', __name__)

def convert_object_id(doc):
    """
    Convert _id field from ObjectId to string
    """
    doc['_id'] = str(doc['_id'])
    return doc


@bp.route('/api/products', methods=['GET'])
def get_products():
    """
    Get all products from the shop db
    """
    query = request.args.get('query', '')
    if query:
        products = mongo.db.products.find({"name": {"$regex": query, "$options": "i"}})
    else:
        products = mongo.db.products.find()

    product_list = []
    for product in products:
        product["_id"] = convert_object_id(product["_id"])
        product_list.append(product)

    return jsonify(product_list)

@bp.route('/api/products/<id>')
def get_product(id):
    """
    Get data for a specific product
    """
    product = mongo.db.products.find_one({"_id": ObjectId(id)})
    if product:
        product["_id"] = convert_object_id(product["_id"])
        return jsonify(product)
    else:
        return jsonify({"error": "Product not found"}), 404

