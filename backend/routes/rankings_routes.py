# backend/routes/ranking_routes.py
from flask import Blueprint, request, jsonify
from backend.models.ranking import Ranking
from backend import db

bp = Blueprint('rankings', __name__, url_prefix='/rankings')

@bp.route('/', methods=['GET'])
def get_rankings():
    all_rankings = Ranking.query.all()
    return jsonify([ranking.to_dict() for ranking in all_rankings]), 200

@bp.route('/<int:id>', methods=['GET'])
def get_ranking(id):
    ranking = Ranking.query.get_or_404(id)
    return jsonify(ranking.to_dict()), 200

# Add more routes as needed for creating, updating, and deleting rankings
