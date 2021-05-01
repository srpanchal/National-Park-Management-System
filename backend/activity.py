from flask import make_response, jsonify, Blueprint, request
from flask_mysql_connector import MySQL

act_api = Blueprint('act_api', __name__)
mysql = MySQL()


@act_api.route('/activity', methods=['GET'])
def getBookings():
    if 'camping' in request.args:
        return getCamping()
    elif 'hiking' in request.args:
        return getHiking()
    elif 'tour' in request.args:
        return getTour()
    else:
        return getActivity()


def getCamping():
    get_all_camping = "SELECT * FROM Camping"
    try:
        conn = mysql.connection
        cursor = conn.cursor(dictionary=True)
        cursor.execute(get_all_camping)
        rows = cursor.fetchall()
        return make_response(jsonify(rows), 200)
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()


def getHiking():
    get_all_hiking = "SELECT * FROM Hiking"
    try:
        conn = mysql.connection
        cursor = conn.cursor(dictionary=True)
        cursor.execute(get_all_hiking)
        rows = cursor.fetchall()
        return make_response(jsonify(rows), 200)
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()


def getTour():
    get_all_tour = "SELECT * FROM Tour"
    try:
        conn = mysql.connection
        cursor = conn.cursor(dictionary=True)
        cursor.execute(get_all_tour)
        rows = cursor.fetchall()
        return make_response(jsonify(rows), 200)
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()

def getActivity():
    get_all_camping = "SELECT * FROM Camping"
    get_all_hiking = "SELECT * FROM Hiking"
    get_all_tour = "SELECT * FROM Tour"
    try:
        conn = mysql.connection
        cursor = conn.cursor(dictionary=True)
        cursor.execute(get_all_tour)
        rows = cursor.fetchall()
        cursor.execute(get_all_hiking)
        rows += cursor.fetchall()
        cursor.execute(get_all_camping)
        rows += cursor.fetchall()
        return make_response(jsonify(rows), 200)
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()
