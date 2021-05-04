# SJSU CMPE 138Spring2021TEAM8
import simplejson as json
import config
from flask import Flask, make_response, jsonify, Blueprint, request
from flask_mysql_connector import MySQL
from flask import current_app

mysql = MySQL()

account_api = Blueprint('account_api', __name__)

get_account_data = """SELECT a.transaction_id, a.type, a.pupose, a.amount, a.details, emp_name, m.emp_id
                    FROM Account a 
                    JOIN Manage_Account m on a.transaction_id = m.transaction_id 
                    LEFT JOIN Employee e on m.emp_id = e.emp_id
                    WHERE a.transaction_id = %s"""
get_all_account_data = """SELECT a.transaction_id, a.type, a.pupose, a.amount, a.details, emp_name, m.emp_id
                            FROM Account a 
                            JOIN Manage_Account m on a.transaction_id = m.transaction_id 
                            LEFT JOIN Employee e on m.emp_id = e.emp_id"""


@account_api.route('/account', methods=['GET', 'POST', 'DELETE', 'PUT'])
def account():
    if request.method == 'GET':
        try:
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            if 'transaction_id' in request.args:
                cursor.execute(get_account_data, (request.args.get('transaction_id'),))
                rows = cursor.fetchone()
                current_app.logger.info('fetching account details for %s.', request.args.get('transaction_id'))
            else:
                current_app.logger.info('fetching all accounts. \n')
                cursor.execute(get_all_account_data)
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
            post_acc = """INSERT INTO Account (transaction_id,type,pupose,amount,details)
            VALUES ( %s, %s,%s, %s,%s)"""
            data = (body['transaction_id'], body['type'], body['pupose'], body['amount'], body['details'])
            post_mge_acc = """INSERT INTO Manage_Account (emp_id,transaction_id)
            VALUES ( %s, %s)"""
            data_mge = (body['emp_id'], body['transaction_id'])
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(post_acc, data)
            current_app.logger.info('Posting account data for Employee id %s. Transaction id is %s',
                            body['emp_id'], body['transaction_id'])
            cursor.execute(post_mge_acc, data_mge)
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
            delete_account = """DELETE FROM Account where transaction_id = %s"""
            data = (request.args.get('transaction_id'),)
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(delete_account, data)
            current_app.logger.info('Deleting transaction %s', request.args.get('transaction_id'))
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
            update_account = """UPDATE Account set transaction_id = %s,type = %s,pupose= %s, amount= %s,
            details = %s WHERE transaction_id = %s"""
            data = (body['transaction_id'], body['type'], body['pupose'], body['amount'], body['details'],
                    body['transaction_id'])
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            current_app.logger.info("Updating account data for %s", body['transaction_id'])
            cursor.execute(update_account, data)
            conn.commit()
            return make_response("true", 200)
        except Exception as e:
            current_app.logger.error(e)
            return make_response("false", 500)
        finally:
            cursor.close()
            conn.close()
