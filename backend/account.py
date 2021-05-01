import simplejson as json
import config
from flask import Flask, make_response, jsonify, Blueprint, request
from flask_mysql_connector import MySQL

mysql = MySQL()

account_api = Blueprint('account_api', __name__)


@account_api.route('/account', methods=['GET', 'POST', 'DELETE', 'PUT'])
def account():
    if request.method == 'GET':
        try:
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            if 'transaction_id' in request.args:
                get_acc = """SELECT * FROM Account  \
                          WHERE transaction_id = %s"""
                cursor.execute(get_acc, (request.args.get('transaction_id'),))
                rows = cursor.fetchone()
            else:
                get_acc = "SELECT * FROM Account"
                cursor.execute(get_acc)
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
            post_acc = """INSERT INTO Account (transaction_id,type,pupose,amount,details)
            VALUES ( %s, %s,%s, %s,%s)"""
            data = (body['transaction_id'], body['type'], body['pupose'], body['amount'], body['details'])
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(post_acc, data)
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
            delete_account = """DELETE FROM Account where transaction_id = %s"""
            data = (request.args.get('transaction_id'),)
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(delete_account,data)
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
            update_account = """UPDATE Account set transaction_id = %s,type = %s,pupose= %s, amount= %s,
            details = %s WHERE transaction_id = %s"""
            data = (body['transaction_id'], body['type'], body['pupose'], body['amount'], body['details'],body['transaction_id'])
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(update_account,data)
            conn.commit()
            return make_response("true", 200)
        except Exception as e:
            print(e)
            return make_response("false", 500)
        finally:
            cursor.close()
            conn.close()
