from flask import Flask
from config.app_config import Config

app = Flask(__name__)
app.config.from_object(Config)

from routes.user import user_bp
app.register_blueprint(user_bp)

if __name__ == '__main__':
    app.run()
