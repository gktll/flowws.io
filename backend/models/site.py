from .. import db

# from .language import Language
# from .market import Market
from .ranking import Ranking

# # Association table for the many-to-many relationship between Sites and Languages
# site_languages = db.Table('site_languages',
#     db.Column('site_id', db.String, db.ForeignKey('site.id'), primary_key=True),
#     db.Column('language_id', db.String, db.ForeignKey('languages.id'), primary_key=True)
# )

# # Association table for the many-to-many relationship between Sites and Markets
# site_markets = db.Table('site_markets',
#     db.Column('site_id', db.String, db.ForeignKey('site.id'), primary_key=True),
#     db.Column('market_id', db.String, db.ForeignKey('markets.id'), primary_key=True)
# )


class Site(db.Model):
    __tablename__ = 'site'
    id = db.Column(db.String, primary_key=True)
    company = db.Column(db.String)
    company_logo = db.Column(db.String)
    site_url = db.Column(db.String)
    company_description = db.Column(db.String)
    industry = db.Column(db.String)
    country = db.Column(db.String)
    tot_desktop_audits = db.Column(db.Integer)
    tot_mobile_audits = db.Column(db.Integer)
    tot_app_audits = db.Column(db.Integer)
    total_datapoints = db.Column(db.Integer)
    # languages = db.relationship('Language', secondary=site_languages, backref='sites')
    languages = db.Column(db.String)
    # markets = db.relationship('Market', secondary=site_markets, backref='sites')
    markets = db.Column(db.String)
    rankings = db.relationship('Ranking', back_populates='site')
    # related_sites = db.relationship('RelatedSite', backref='site')

    def to_dict(self):
        return {
            'id': self.id,
            'company': self.company,
            'company_logo': self.company_logo,
            'site_url': self.site_url,
            'company_description': self.company_description,
            'industry': self.industry,
            'country': self.country,
            'tot_desktop_audits': self.tot_desktop_audits,
            'tot_mobile_audits': self.tot_mobile_audits,
            'tot_app_audits': self.tot_app_audits,
            'total_datapoints': self.total_datapoints,
            # 'languages': [language.name for language in self.languages],
            'languages': self.languages,
            # 'markets': [market.name for market in self.markets],
            'markets': self.markets,
            'rankings': [ranking.to_dict() for ranking in self.rankings],  # Assuming Ranking has a to_dict method
            # 'related_sites': [related.site_id for related in self.related_sites]  # Adjust based on actual attributes
        }


# class RelatedSite(db.Model):
#     __tablename__ = 'related_sites'
#     site_id = db.Column(db.String, db.ForeignKey('site.id'), primary_key=True)
#     related_site_id = db.Column(db.String, primary_key=True)
    
#     # For a one-to-many relationship where a site can have multiple child sites
#     parent_site_id = db.Column(db.String, db.ForeignKey('site.id'))
#     related_sites = db.relationship('Site', backref=db.backref('parent_site', remote_side=[id]))