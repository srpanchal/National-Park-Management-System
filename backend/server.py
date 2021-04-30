from flask_mysql_connector import MySQL
from flask import Flask
import config
from activity_booking import routes


app = Flask(__name__)
app.register_blueprint(routes)


app.config['MYSQL_HOST'] = config.URL
app.config['MYSQL_USER'] = config.USERNAME
app.config['MYSQL_PASSWORD'] = config.PASSWORD
app.config['MYSQL_DATABASE'] = config.DATABASE
mysql = MySQL(app)

if __name__ == '__main__':
    app.run(host= '127.0.0.1', debug=True)