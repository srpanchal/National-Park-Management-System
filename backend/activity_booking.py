import config
from flask import Flask, make_response, jsonify, Blueprint
from db import mysql

routes = Blueprint('routes', __name__)


get_all_activity_bookings = "SELECT * FROM Activity_Booking"


@routes.route('/bookings', methods=['GET'])
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
