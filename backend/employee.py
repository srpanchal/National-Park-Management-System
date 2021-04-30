import simplejson as json
import config
from flask import Flask, make_response, jsonify
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
    conn = mysql.connection
    cursor = conn.cursor(dictionary=True)
    cursor.execute(get_all_employees)
    rows = cursor.fetchall()
    return make_response(json.dumps(rows), 200)


@app.route('/')
def hello():
    return "hello"


if __name__ == '__main__':
    app.run(host= '127.0.0.1', debug=True)
