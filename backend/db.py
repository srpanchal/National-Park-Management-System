import config
from server import app
from flask_mysql_connector import MySQL


app.config['MYSQL_HOST'] = config.URL
app.config['MYSQL_USER'] = config.USERNAME
app.config['MYSQL_PASSWORD'] = config.PASSWORD
app.config['MYSQL_DATABASE'] = config.DATABASE
mysql = MySQL(app)