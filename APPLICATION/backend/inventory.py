# SJSU CMPE 138Spring2021TEAM8
import simplejson as json
import config
from flask import Flask, make_response, jsonify, Blueprint, request
from flask_mysql_connector import MySQL
import random
from flask import current_app

mysql = MySQL()

inv_api = Blueprint('inv_api', __name__)

get_inventory = """SELECT i.inv_id, i.name, i.category, i.quantity, i.cost_per_item, emp_name, m.emp_id
FROM Inventory i 
JOIN Manage_Inventory m on i.inv_id = m.inv_id 
LEFT JOIN Employee e on m.emp_id = e.emp_id
WHERE i.inv_id = %s"""

get_all_inventory = """SELECT i.inv_id, i.name, i.category, i.quantity, i.cost_per_item, emp_name, m.emp_id
FROM Inventory i 
JOIN Manage_Inventory m on i.inv_id = m.inv_id 
LEFT JOIN Employee e on m.emp_id = e.emp_id"""


@inv_api.route('/inventory', methods=['GET', 'POST', 'DELETE', 'PUT'])
def inventory():
    if request.method == 'GET':
        try:
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            if 'inv_id' in request.args:
                cursor.execute(get_inventory, (request.args.get('inv_id'),))
                current_app.logger.info("Fetching inventory for inventory id %s", request.args.get('inv_id'))
                rows = cursor.fetchone()
            else:
                # get_inv = "SELECT * FROM Inventory"
                current_app.logger.info("Fetching all inventories")
                cursor.execute(get_all_inventory)
                rows = cursor.fetchall()

            return make_response(json.dumps(rows), 200)
        except Exception as e:
            current_app.logger.error(e)
            return make_response("false", 500)
        finally:
            cursor.close()
            conn.close()

    if request.method == 'POST':
        try:
            body = request.json
            post_inventory = """INSERT INTO Inventory (inv_id,name,category,quantity,cost_per_item)
            VALUES ( %s, %s, %s, %s, %s )"""
            inv_id = random.randint(100, 999999)
            data = (inv_id, body['name'], body['category'], body['quantity'], body['cost_per_item'])
            post_mge_inv = """INSERT INTO Manage_Inventory (emp_id,inv_id)
                        VALUES ( %s, %s)"""
            data_mge = (body['emp_id'],inv_id)
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(post_inventory, data)
            cursor.execute(post_mge_inv, data_mge)
            current_app.logger.info("Inserting inventory data. Inventory id is %s", inv_id)
            conn.commit()
            return make_response("true", 200)
        except Exception as e:
            current_app.logger.error(e)
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
            current_app.logger.info("Deleting inventory %s", request.args.get('inv_id'))
            conn.commit()
            return make_response("true", 200)
        except Exception as e:
            current_app.logger.error(e)
            return make_response("false", 500)
        finally:
            cursor.close()
            conn.close()
    if request.method == 'PUT':
        try:
            body = request.json
            update_inventory = """UPDATE Inventory set inv_id = %s,name = %s,category= %s, quantity= %s,cost_per_item= %s
            WHERE inv_id = %s"""
            data = (
                body['inv_id'], body['name'], body['category'], body['quantity'], body['cost_per_item'], body['inv_id'])
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(update_inventory, data)
            current_app.logger.info("Updating inventory %s", body['inv_id'])
            conn.commit()
            return make_response("true", 200)
        except Exception as e:
            current_app.logger.error(e)
            return make_response("false", 500)
        finally:
            cursor.close()
            conn.close()
