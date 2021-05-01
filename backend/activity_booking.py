from flask import Flask, make_response, jsonify, Blueprint, request
from flask_mysql_connector import MySQL


act_api = Blueprint('act_api', __name__)
mysql = MySQL()

get_all_activity_bookings = "SELECT * FROM Activity_Booking"
insert_into_activity_booking = "INSERT INTO `Activity_Booking` (`tourist_id`, `actv_id`, `booking_date`) " \
                               "VALUES (%s, %s, %s);"
cancel_activity_booking = "UPDATE Activity_Booking SET status = 'CANCELLED' " \
                          "WHERE tourist_id = %s AND actv_id = %s AND booking_date = %s;"
get_activity_booking_by_id = "SELECT * FROM Activity_Booking " \
                             "WHERE tourist_id = %s AND actv_id = %s AND booking_date = %s;"


@act_api.route('/booking', methods=['GET', 'POST', 'DELETE', 'PUT'])
def getBookings():
    if request.method == 'POST':
        return insertIntoActivityBooking(request.json)
    elif request.method == 'GET':
        if 'tourist_id' in request.args and 'actv_id' in request.args and 'booking_date' in request.args:
            return getActivityBookingById(request.args)
        else:
            return getAllActivityBookings()
    elif request.method == 'DELETE':
        return deleteActivityBooking(request.json)


def insertIntoActivityBooking(form):
    try:
        conn = mysql.connection
        cursor = conn.cursor(dictionary=True)
        cursor.execute(insert_into_activity_booking, (form['tourist_id'], form['actv_id'], form['booking_date']))
        conn.commit()
        return make_response("True", 200)
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()
    return make_response("False", 500)


def getActivityBookingById(args):
    try:
        conn = mysql.connection
        cursor = conn.cursor(dictionary=True)
        cursor.execute(get_activity_booking_by_id,
                       (request.args.get('tourist_id'), request.args.get('actv_id'), request.args.get('booking_date')))
        rows = cursor.fetchall()
        return make_response(jsonify(rows), 200)
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()


def getAllActivityBookings():
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


def deleteActivityBooking(form):
    try:
        conn = mysql.connection
        cursor = conn.cursor(dictionary=True)
        cursor.execute(cancel_activity_booking, (form['tourist_id'], form['actv_id'], form['booking_date']))
        conn.commit()
        return make_response("True", 200)
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()
    return make_response("False", 500)
