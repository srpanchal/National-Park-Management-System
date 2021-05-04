# SJSU CMPE 138Spring2021TEAM8
import simplejson as json
import config
from flask import Flask, make_response, jsonify, Blueprint, request
from flask_mysql_connector import MySQL
from flask import current_app

mysql = MySQL()

account_mgr_api = Blueprint('account_mgr_api', __name__)


@account_mgr_api.route('/manage/account', methods=['GET', 'POST', 'DELETE'])
def account():
    if request.method == 'GET':
        try:
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            get_acc_mgr = "SELECT * FROM Manage_Account"
            cursor.execute(get_acc_mgr)
            rows = cursor.fetchall()
            current_app.logger.info("Fetching account managers")
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
            post_acc_mgr = """INSERT INTO Manage_Account (emp_id,transaction_id)
            VALUES ( %s, %s)"""
            data = (body['emp_id'], body['transaction_id'])
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(post_acc_mgr, data)
            current_app.logger.info("Inserting account manager with employee id %s ", body['emp_id'])
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
            delete_account_mgr = """DELETE FROM Manage_Account where transaction_id = %s and emp_id = %s"""
            data = (request.args.get('transaction_id'), request.args.get('emp_id'))
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(delete_account_mgr, data)
            current_app.logger.info("Deleting account manager emp_id = %s" ,request.args.get('emp_id') )
            conn.commit()
            return make_response("true", 200)
        except Exception as e:
            current_app.logger.error(e)
            return make_response("false", 500)
        finally:
            cursor.close()
            conn.close()
