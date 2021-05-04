# SJSU CMPE 138Spring2021TEAM8
import simplejson as json
import config
from flask import Flask, make_response, jsonify, Blueprint,request
from flask_mysql_connector import MySQL

mysql = MySQL()

dept_m_api = Blueprint('dept_m_api', __name__)


@dept_m_api.route('/manager', methods = ['GET', 'POST', 'DELETE','PUT'])
def manager():
    if request.method == 'GET':
        try:
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            if 'emp_id' in request.args:
                get_dept_manager = """SELECT * FROM Department_Manager  \
                          WHERE emp_id = %s"""
                cursor.execute(get_dept_manager,(request.args.get('emp_id'),))
                rows = cursor.fetchone()
            else:
                get_dept_manager = "SELECT * FROM Department_Manager"
                cursor.execute(get_dept_manager)
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
            post_dept_manager = """INSERT INTO Department_Manager (emp_id)
            VALUES ( %s )"""
            data =(body['emp_id'],)
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(post_dept_manager,data)
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
            delete_dept_manager = """DELETE FROM department_manager where emp_id = %s"""
            data = (request.args.get('emp_id'),)
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(delete_dept_manager,data)
            conn.commit()
            return make_response("true", 200)
        except Exception as e:
            return make_response("false", 500)
        finally:
            cursor.close()
            conn.close()
