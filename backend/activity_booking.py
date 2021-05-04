# SJSU CMPE 138Spring2021TEAM8
from flask import make_response, jsonify, Blueprint, request
from flask_mysql_connector import MySQL
from flask import current_app

act_book_api = Blueprint('act_book_api', __name__)
mysql = MySQL()

get_all_activity_bookings = "SELECT * FROM Activity_Booking"
insert_into_activity_booking = "INSERT INTO `Activity_Booking` (`tourist_id`, `actv_id`, `booking_date`) " \
                               "VALUES (%s, %s, %s);"
cancel_activity_booking = "UPDATE Activity_Booking SET status = 'CANCELLED' " \
                          "WHERE tourist_id = %s AND actv_id = %s AND booking_date = %s;"
get_activity_booking_by_id = """
                            SELECT * 
                            FROM Activity_Booking 
                            LEFT JOIN Hiking ON Activity_Booking.actv_id = Hiking.actv_id 
                            LEFT JOIN Camping ON Activity_Booking.actv_id = Camping.actv_id
                            LEFT JOIN Tour ON Activity_Booking.actv_id = Tour.actv_id
                            JOIN Activity ON Activity_Booking.actv_id = Activity.actv_id 
                            WHERE tourist_id = %s
                            ORDER BY booking_date ASC;"""
update_activity_booking = "UPDATE Activity_Booking SET actv_id = %s, booking_date = %s " \
                          "WHERE tourist_id = %s AND actv_id = %s AND booking_date = %s;"


@act_book_api.route('/booking', methods=['GET', 'POST', 'DELETE', 'PUT'])
def getBookings():
    if request.method == 'POST':
        return insertIntoActivityBooking(request.json)
    elif request.method == 'GET':
        if 'tourist_id' in request.args:
            return getActivityBookingByTouristId(request.args)
        else:
            return getAllActivityBookings()
    elif request.method == 'DELETE':
        return deleteActivityBooking(request.json)
    elif request.method == 'PUT':
        return updateActivityBooking(request.json)


def insertIntoActivityBooking(form):
    try:
        conn = mysql.connection
        cursor = conn.cursor(dictionary=True)
        cursor.execute(insert_into_activity_booking, (form['tourist_id'], form['actv_id'], form['booking_date']))
        conn.commit()
        cursor.close()
        conn.close()
        return make_response("True", 200)
    except Exception as e:
        current_app.logger.error(e)
    return make_response("False", 500)


def getActivityBookingByTouristId(args):
    try:
        conn = mysql.connection
        cursor = conn.cursor(dictionary=True)
        cursor.execute(get_activity_booking_by_id, (args.get('tourist_id'),))
        rows = cursor.fetchall()
        cursor.close()
        conn.close()
        new_rows = []
        for row in rows:
            row = cleanNullTerms(row)
            new_rows.append(row)
        current_app.logger.info("Get booking activity for tourist id %s ", args.get('tourist_id'))
        return make_response(jsonify(new_rows), 200)
    except Exception as e:
        current_app.logger.error(e)


def cleanNullTerms(d):
    return {
        k: v
        for k, v in d.items()
        if v is not None
    }


def getAllActivityBookings():
    try:
        conn = mysql.connection
        cursor = conn.cursor(dictionary=True)
        cursor.execute(get_all_activity_bookings)
        current_app.logger.info("Get all activity bookings")
        rows = cursor.fetchall()
        cursor.close()
        conn.close()
        return make_response(jsonify(rows), 200)
    except Exception as e:
        current_app.logger.error(e)


def deleteActivityBooking(form):
    try:
        conn = mysql.connection
        cursor = conn.cursor(dictionary=True)
        cursor.execute(cancel_activity_booking, (form['tourist_id'], form['actv_id'], form['booking_date']))
        conn.commit()
        current_app.logger.info("Delete booking for %s,%s,%s" , form['tourist_id'], form['actv_id'], form['booking_date'])
        cursor.close()
        conn.close()
        return make_response("True", 200)
    except Exception as e:
        current_app.logger.error(e)
    return make_response("False", 500)


def updateActivityBooking(form):
    try:
        conn = mysql.connection
        cursor = conn.cursor(dictionary=True)
        cursor.execute(update_activity_booking, (
        form['new_actv_id'], form['new_booking_date'], form['tourist_id'], form['actv_id'], form['booking_date']))
        current_app.logger.info("Update booking for tourist id %s", form['tourist_id'])
        conn.commit()
        cursor.close()
        conn.close()
        return make_response("True", 200)
    except Exception as e:
        current_app.logger.error(e)
    return make_response("False", 500)
