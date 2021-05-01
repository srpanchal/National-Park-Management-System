import simplejson as json
import config
from flask import Flask, make_response, jsonify, Blueprint
from flask_mysql_connector import MySQL

mysql = MySQL()


get_all_employees = "SELECT * FROM Employee"

emp_api = Blueprint('emp_api', __name__)


@emp_api.route('/get-all-employees')
def new_cursor():
    conn = mysql.connection
    cursor = conn.cursor(dictionary=True)
    cursor.execute(get_all_employees)
    rows = cursor.fetchall()
    return make_response(json.dumps(rows), 200)


