import simplejson as json
import config
from flask import Flask, make_response, jsonify, Blueprint, request
from flask_mysql_connector import MySQL

mysql = MySQL()

inv_api = Blueprint('inv_api', __name__)


@inv_api.route('/inventory', methods=['GET', 'POST', 'DELETE', 'PUT'])
def inventory():
    if request.method == 'GET':
        try:
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            if 'inv_id' in request.args:
                get_inv = """SELECT * FROM Inventory  \
                          WHERE inv_id = %s"""
                cursor.execute(get_inv, (request.args.get('inv_id'),))
                rows = cursor.fetchone()
            else:
                get_inv = "SELECT * FROM Inventory"
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
            post_inventory = """INSERT INTO Inventory (inv_id,name,category,quantity,cost_per_item)
            VALUES ( %s, %s, %s, %s, %s )"""
            data = (body['inv_id'], body['name'], body['category'], body['quantity'], body['cost_per_item'])
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
    if request.method == 'DELETE':
        try:
            delete_inventory = """DELETE FROM Inventory where inv_id = %s"""
            data = (request.args.get('inv_id'),)
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(delete_inventory, data)
            conn.commit()
            return make_response("true", 200)
        except Exception as e:
            print(e)
            return make_response("false", 500)
        finally:
            cursor.close()
            conn.close()
    if request.method == 'PUT':
        try:
            body = request.json
            update_inventory = """UPDATE Inventory set inv_id = %s,name = %s,category= %s, quantity= %s,cost_per_item= %s
            WHERE inv_id = %s"""
            data = (body['inv_id'], body['name'], body['category'], body['quantity'], body['cost_per_item'],body['inv_id'])
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(update_inventory, data)
            conn.commit()
            return make_response("true", 200)
        except Exception as e:
            print(e)
            return make_response("false", 500)
        finally:
            cursor.close()
            conn.close()
