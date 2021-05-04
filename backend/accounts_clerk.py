# SJSU CMPE 138Spring2021TEAM8
import simplejson as json
import config
from flask import Flask, make_response, jsonify, Blueprint, request
from flask_mysql_connector import MySQL
from flask import current_app

mysql = MySQL()

account_clerk_api = Blueprint('account_clerk_api', __name__)


@account_clerk_api.route('/account/clerk', methods=['GET', 'POST', 'DELETE'])
def account_clerk():
    if request.method == 'GET':
        try:
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            if 'emp_id' in request.args:
                get_acc_clerk = """SELECT * FROM Accounts_Clerk  \
                          WHERE emp_id = %s"""
                cursor.execute(get_acc_clerk, (request.args.get('emp_id'),))
                current_app.logger.info('fetching account clerk with emp id  %s.', request.args.get('emp_id'))
                rows = cursor.fetchone()
            else:
                get_acc_clerk = "SELECT * FROM Accounts_Clerk"
                cursor.execute(get_acc_clerk)
                current_app.logger.info('Fetching all account clerks')
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
            post_acc_clerk = """INSERT INTO Accounts_Clerk (emp_id)
            VALUES ( %s )"""
            data = (body['emp_id'],)
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(post_acc_clerk, data)
            current_app.logger.info('Inserting into account clerk employee - %s', body['emp_id'] )
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
            delete_account_clerk = """DELETE FROM Accounts_Clerk where emp_id = %s"""
            data = (request.args.get('emp_id'),)
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(delete_account_clerk, data)
            current_app.logger.info('Deleting account clerk employee - %s', body['emp_id'])
            conn.commit()
            return make_response("true", 200)
        except Exception as e:
            current_app.logger.error(e)
            return make_response("false", 500)
        finally:
            cursor.close()
            conn.close()
