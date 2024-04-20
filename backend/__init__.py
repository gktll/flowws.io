from dotenv import load_dotenv
import os
from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from backend.config import Config
from flask_sqlalchemy import SQLAlchemy
from flask.cli import with_appcontext
import click

# Load environment variables
dotenv_path = os.path.join(os.path.dirname(__file__), 'SECRET_KEY.env')
load_dotenv(dotenv_path)

# Initialize extensions
db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    # Initialize CORS and other extensions with app
    CORS(app, supports_credentials=True, origins=["http://localhost:3000"])
    db.init_app(app)
    migrate.init_app(app, db)
    
    # Import and register blueprints
    from backend.models.user import User # Ensure this import is necessary here
    from backend.routes.auth_routes import auth_bp
    app.register_blueprint(auth_bp)
    from backend.routes.site_routes import bp as site_bp
    app.register_blueprint(site_bp)
    from backend.routes.rankings_routes import bp as ranking_bp
    app.register_blueprint(ranking_bp)
    
    # Register CLI commands
    register_commands(app)
    
    return app

# Register CLI commands
def register_commands(app):
    @app.cli.command('load-json')
    @click.argument('filepath')
    @with_appcontext
    def load_json_command(filepath):
        from backend.utils.pub_utils import load_json_data, create_sites_from_json
        try:
            json_data = load_json_data(filepath) # Load JSON data from the file
            create_sites_from_json(json_data) # Process and save site data
            click.echo(f"Data from {filepath} loaded successfully.")
        except Exception as e:
            # current_app.logger.error(f"Failed to load data from {filepath}: {str(e)}")
            click.echo(f"Failed to load data from {filepath}: {str(e)}")

# Assuming 'app' is the Flask application instance created somewhere
app = create_app()
