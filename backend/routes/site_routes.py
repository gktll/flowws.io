from flask import Blueprint, jsonify
from backend.models.site import Site
from flask import abort
from sqlalchemy.exc import SQLAlchemyError
from flask import current_app



bp = Blueprint('sites', __name__, url_prefix='/sites')

@bp.route('/', methods=['GET'])
def get_sites():
    try:
        sites = Site.query.all()
        return jsonify([site.to_dict() for site in sites]), 200
    except SQLAlchemyError as e:
        current_app.logger.error(f"Database error: {e}")
        return jsonify({"error": "Database error"}), 500
    except Exception as e:
        current_app.logger.error(f"Unhandled exception: {e}")
        return jsonify({"error": "Internal server error"}), 500


@bp.route('/<int:site_id>', methods=['GET'])
def get_site(site_id):
    try:
        site = Site.query.get_or_404(site_id)
        return jsonify(site.to_dict()), 200
    except Exception as e:
        abort(404, description=f"Site with ID {site_id} not found")