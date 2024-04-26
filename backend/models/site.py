from .. import db
from datetime import datetime

class Site(db.Model):
    __tablename__ = 'site'
    id = db.Column(db.String, primary_key=True)
    company = db.Column(db.String)
    company_logo = db.Column(db.String)
    site_url = db.Column(db.String)
    industry = db.Column(db.String)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'company': self.company,
            'company_logo': self.company_logo,
            'site_url': self.site_url,
            'company_description': self.company_description,
            'industry': self.industry,
        }
