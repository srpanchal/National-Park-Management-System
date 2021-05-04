# SJSU CMPE 138Spring2021TEAM8
import simplejson as json
import config
from flask import Flask, make_response, jsonify, Blueprint,request
from flask_mysql_connector import MySQL
import random

mysql = MySQL()

dept_api = Blueprint('dept_api', __name__)


@dept_api.route('/department', methods = ['GET', 'POST', 'DELETE','PUT'])
def department():
    if request.method == 'GET':
        try:
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            if 'dept_id' in request.args:
                get_dept = """SELECT * FROM Department  \
                          WHERE dept_id = %s"""
                cursor.execute(get_dept,(request.args.get('dept_id'),))
                rows = cursor.fetchone()
            else:
                get_dept = "SELECT * FROM Department"
                cursor.execute(get_dept)
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
            post_dept = """INSERT INTO Department (dept_id,dept_name,dept_mgr)
            VALUES ( %s, %s, %s)"""
            data =(random.randint(100, 999999), body['dept_name'], body['dept_mgr'])
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(post_dept,data)
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
            delete_dept = """DELETE FROM Department where dept_id = %s"""
            data = (request.args.get('dept_id'),)
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(delete_dept,data)
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
            update_dept = """UPDATE Department set dept_id = %s,dept_name = %s,dept_mgr= %s WHERE dept_id = %s"""
            data = (body['dept_id'], body['dept_name'], body['dept_mgr'], body['dept_id'])
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(update_dept,data)
            conn.commit()
            return make_response("true", 200)
        except Exception as e:
            print(e)
            return make_response("false", 500)
        finally:
            cursor.close()
            conn.close()
