import config
from flask import Flask, make_response, jsonify, Blueprint
from flask import current_app
from flask_mysql_connector import MySQL


act_api = Blueprint('act_api', __name__)
mysql = MySQL()

get_all_activity_bookings = "SELECT * FROM Activity_Booking"


@act_api.route('/bookings', methods=['GET'])
def getBookings():
    try:
        conn = mysql.connection
        cursor = conn.cursor(dictionary=True)
        cursor.execute(get_all_activity_bookings)
        rows = cursor.fetchall()
        return make_response(jsonify(rows), 200)
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()
