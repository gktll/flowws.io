import json
from sqlalchemy.exc import SQLAlchemyError
from backend.models.site import Site
from backend.models.ranking import Ranking
from .. import db

def load_json_data(filepath):
    try:
        with open(filepath, 'r') as file:
            return json.load(file)
    except Exception as e:
        print(f"Failed to load JSON data: {str(e)}")
        return None

def create_sites_from_json(json_data):
    sites = []
    if json_data is None:
        return sites
    for site_info in json_data:
        try:
            site = Site(
                id=site_info['id'],
                company=site_info['company'],
                company_logo=site_info['company_logo'],
                site_url=site_info['site_url'],
                company_description=site_info['company_description'],
                industry=site_info['industry'],
                country=site_info['country'],
                tot_desktop_audits=site_info['tot_desktop_audits'],  
                tot_mobile_audits=site_info['tot_mobile_audits'],
                tot_app_audits=site_info['tot_app_audits'],
                total_datapoints=site_info['total_datapoints']
            )
            db.session.add(site)
            sites.append(site)
        except KeyError as e:
            print(f"Key error: {str(e)} - incorrect data format.")
        except SQLAlchemyError as e:
            print(f"Database error: {str(e)}")
            db.session.rollback()
    db.session.commit()
    return sites

def upload_rankings(filepath):
    rankings_data = load_json_data(filepath)
    if rankings_data is None:
        return
    for ranking_info in rankings_data:
        try:
            site_id = ranking_info['site_id']
            site = Site.query.filter_by(id=site_id).first()
            if site:
                ranking = Ranking(
                    site_id=site.id,
                    device_type=ranking_info.get('device_type'),
                    absolute_rank=ranking_info.get('absolute_rank'),
                    industry_rank=ranking_info.get('industry_rank'),
                    absolute_usability_rank=ranking_info.get('absolute_usability_rank'),
                    industry_usability_rank=ranking_info.get('industry_usability_rank'),
                    absolute_accessibility_rank=ranking_info.get('absolute_accessibility_rank'),
                    industry_accessibility_rank=ranking_info.get('industry_accessibility_rank'),
                    absolute_performance_rank=ranking_info.get('absolute_performance_rank'),
                    industry_performance_rank=ranking_info.get('industry_performance_rank'),
                    absolute_sentiment_rank=ranking_info.get('absolute_sentiment_rank'),
                    industry_sentiment_rank=ranking_info.get('industry_sentiment_rank')
                )
                db.session.add(ranking)
        except KeyError as e:
            print(f"Key error in ranking data: {str(e)}")
        except SQLAlchemyError as e:
            print(f"Database error during ranking upload: {str(e)}")
            db.session.rollback()
    db.session.commit()
