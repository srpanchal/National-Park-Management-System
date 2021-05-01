from flask_mysql_connector import MySQL
from flask import Flask
import config
from activity_booking import act_api
from employee import emp_api
from department_manager import dept_m_api
from inventory import inv_api
from inventory_manager import inv_mgr_api
from account import account_api
from accounts_clerk import account_clerk_api
from account_manager import account_mgr_api
from department import dept_api


app = Flask(__name__)
app.register_blueprint(act_api)
app.register_blueprint(emp_api)
app.register_blueprint(dept_m_api)
app.register_blueprint(inv_api)
app.register_blueprint(inv_mgr_api)
app.register_blueprint(account_api)
app.register_blueprint(account_clerk_api)
app.register_blueprint(account_mgr_api)
app.register_blueprint(dept_api)

app.config['MYSQL_HOST'] = config.URL
app.config['MYSQL_USER'] = config.USERNAME
app.config['MYSQL_PASSWORD'] = config.PASSWORD
app.config['MYSQL_DATABASE'] = config.DATABASE
mysql = MySQL()
mysql.init_app(app)


@app.route('/')
def hello():
    return "hello"


if __name__ == '__main__':
    app.run(host= '127.0.0.1', debug=True)