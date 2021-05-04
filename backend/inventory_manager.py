# SJSU CMPE 138Spring2021TEAM8
import simplejson as json
import config
from flask import Flask, make_response, jsonify, Blueprint, request
from flask_mysql_connector import MySQL

mysql = MySQL()

inv_mgr_api = Blueprint('inv_mgr_api', __name__)


@inv_mgr_api.route('/manage/inventory', methods=['GET', 'POST', 'DELETE', 'PUT'])
def inventory():
    if request.method == 'GET':
        try:
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            if 'inv_id' in request.args and 'emp_id' in request.args:
                get_inv = """SELECT * FROM Manage_Inventory  \
                          WHERE inv_id = %s and emp_id = %s"""
                cursor.execute(get_inv, (request.args.get('inv_id'), (request.args.get('emp_id'))))
                rows = cursor.fetchone()
            else:
                get_inv = "SELECT * FROM Manage_Inventory"
                cursor.execute(get_inv)
                rows = cursor.fetchall()

            return make_response(json.dumps(rows), 200)
        except Exception as e:
            print(e)
            return make_response("false", 500)
        finally:
            cursor.close()
            conn.close()
    if request.method == 'POST':
        try:
            body = request.json
            post_inventory = """INSERT INTO Manage_Inventory (emp_id,inv_id)
            VALUES ( %s, %s)"""
            data = (body['emp_id'], body['inv_id'])
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(post_inventory, data)
            conn.commit()
            return make_response("true", 200)
        except Exception as e:
            print(e)
            return make_response("false", 500)
        finally:
            cursor.close()
            conn.close()
