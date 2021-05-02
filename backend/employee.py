import simplejson as json
from flask import Flask, make_response, jsonify, Blueprint, request
from flask_mysql_connector import MySQL
import random

mysql = MySQL()

emp_api = Blueprint('emp_api', __name__)

insert_into_accounts_clerk = """INSERT INTO Accounts_Clerk (emp_id)
            VALUES ( %s )"""

insert_into_tour_guide = """INSERT INTO Tour_Guide (emp_id)
            VALUES ( %s )"""

insert_into_ticket_issuer = """INSERT INTO Ticket_Issuer (emp_id)
            VALUES ( %s )"""

insert_into_forest_officer = """INSERT INTO Forest_Officer (emp_id,post)
            VALUES ( %s,%s )"""

insert_into_doctor = """INSERT INTO Veterinary_Doctor (emp_id,vet_type,speciality, degree)
            VALUES ( %s, %s, %s, %s)"""


@emp_api.route('/employees', methods=['GET', 'POST', 'DELETE', 'PUT'])
def employees():
    if request.method == 'GET':
        try:
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            if 'emp_id' in request.args:
                get_emp = """SELECT * FROM Employee  \
                          WHERE emp_id = %s"""
                cursor.execute(get_emp, (request.args.get('emp_id'),))
                rows = cursor.fetchone()
            else:
                get_emp = "SELECT * FROM Employee"
                cursor.execute(get_emp)
                rows = cursor.fetchall()

            return make_response(json.dumps(rows), 200)
        except Exception as e:
            print(e)
            return make_response("false", 500)
        finally:
            cursor.close()
            conn.close()
    #         Ticket issuer|Tour guide|Forest officer|Accounts clerk|Veterinary doctor
    if request.method == 'POST':
        try:
            body = request.json
            post_employee = """INSERT INTO employee (emp_id,salary,emp_name, role,emp_dept,age, gender)
            VALUES ( %s, %s, %s, %s, %s, %s, %s )"""
            emp_id = random.randint(100, 999999)
            data = (
                emp_id, body['salary'], body['emp_name'], body['role'], body['emp_dept'],
                body['age'],
                body['gender'])
            role = body['role']
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(post_employee, data)
            if role == "Ticket issuer":
                cursor.execute(insert_into_ticket_issuer, (emp_id,))
            elif role == "Tour guide":
                cursor.execute(insert_into_tour_guide, (emp_id,))
            elif role == "Forest officer":
                cursor.execute(insert_into_forest_officer, (emp_id, body['post']))
            elif role == "Accounts clerk":
                cursor.execute(insert_into_accounts_clerk, (emp_id,))
            elif role == "Veterinary doctor":
                cursor.execute(insert_into_doctor, (emp_id, body['vet_type'], body['speciality'], body['degree']))
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
            delete_employee = """DELETE FROM Employee where emp_id = %s"""
            data = (request.args.get('emp_id'),)
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(delete_employee, data)
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
            update_employee = """UPDATE employee set emp_id = %s,salary = %s,emp_name= %s, role= %s,emp_dept= %s,
            age = %s, gender = %s WHERE emp_id = %s"""
            data = (body['emp_id'], body['salary'], body['emp_name'], body['role'], body['emp_dept'], body['age'],
                    body['gender'], body['emp_id'])
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(update_employee, data)
            conn.commit()
            return make_response("true", 200)
        except Exception as e:
            print(e)
            return make_response("false", 500)
        finally:
            cursor.close()
            conn.close()
