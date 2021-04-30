import config
from flask import Flask
from flask_mysql_connector import MySQL

app = Flask(__name__)
app.config['MYSQL_HOST'] = config.URL
app.config['MYSQL_USER'] = config.USERNAME
app.config['MYSQL_PASSWORD'] = config.PASSWORD
app.config['MYSQL_DATABASE'] = config.DATABASE
mysql = MySQL(app)


get_all_employees = "SELECT * FROM Employee"


@app.route('/get-all-employees')
def new_cursor():
    df = mysql.execute_sql(get_all_employees, to_pandas=True)
    return str(df.to_dict())


@app.route('/')
def hello():
    return "hello"


if __name__ == '__main__':
    app.run(host= '127.0.0.1', debug=True)
