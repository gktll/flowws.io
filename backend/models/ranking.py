from .. import db

class Ranking(db.Model):
    __tablename__ = 'rankings'
    id = db.Column(db.Integer, primary_key=True)
    site_id = db.Column(db.String, db.ForeignKey('site.id'))
    device_type = db.Column(db.String)
    absolute_rank = db.Column(db.String)
    industry_rank = db.Column(db.String)
    absolute_usability_rank = db.Column(db.String)
    industry_usability_rank = db.Column(db.String)
    absolute_accessibility_rank = db.Column(db.String)
    industry_accessibility_rank = db.Column(db.String)
    absolute_performance_rank = db.Column(db.String)
    industry_performance_rank = db.Column(db.String)
    absolute_sentiment_rank = db.Column(db.String)
    industry_sentiment_rank = db.Column(db.String)
    
    site = db.relationship('Site', back_populates='rankings')