# SJSU CMPE 138Spring2021TEAM8
from flask_mysql_connector import MySQL
from flask import Flask
import config
from activity_booking import act_book_api
from activity import act_api
from employee import emp_api
from login import auth_api
from department_manager import dept_m_api
from inventory import inv_api
from inventory_manager import inv_mgr_api
from account import account_api
from accounts_clerk import account_clerk_api
from account_manager import account_mgr_api
from department import dept_api
from animal import animals_api
import logging

app = Flask(__name__)
app.register_blueprint(act_api)
app.register_blueprint(act_book_api)
app.register_blueprint(emp_api)
app.register_blueprint(dept_m_api)
app.register_blueprint(inv_api)
app.register_blueprint(inv_mgr_api)
app.register_blueprint(account_api)
app.register_blueprint(account_clerk_api)
app.register_blueprint(account_mgr_api)
app.register_blueprint(dept_api)
app.register_blueprint(auth_api)
app.register_blueprint(animals_api)


app.config['SECRET_KEY'] = 'NPMS'
app.config['MYSQL_HOST'] = config.URL
app.config['MYSQL_USER'] = config.USERNAME
app.config['MYSQL_PASSWORD'] = config.PASSWORD
app.config['MYSQL_DATABASE'] = config.DATABASE
mysql = MySQL()
mysql.init_app(app)

if __name__ != '__main__':
    gunicorn_logger = logging.getLogger('gunicorn.error')
    app.logger.handlers = gunicorn_logger.handlers
    app.logger.setLevel(gunicorn_logger.level)

@app.route('/')
def hello():
    return "hello"


if __name__ == '__main__':
    app.run(host='127.0.0.1', debug=True)