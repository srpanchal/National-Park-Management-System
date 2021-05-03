import simplejson as json
from flask import Flask, make_response, jsonify, Blueprint, request
from flask_mysql_connector import MySQL
from flask import current_app
mysql = MySQL()

animals_api = Blueprint('animals_api', __name__)


@animals_api.route('/animals', methods=['GET', 'POST', 'DELETE', 'PUT'])
def animals():
    if request.method == 'GET':
        try:
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            if 'species_id' in request.args:
                get_animal = """SELECT * FROM Species  \
                          WHERE species_id = %s"""
                cursor.execute(get_animal, (request.args.get('species_id'),))
                current_app.logger.info("Fetching species %s",request.args.get('species_id'))
                rows = cursor.fetchone()
            else:
                get_animal = "SELECT * FROM Species"
                cursor.execute(get_animal)
                current_app.logger.info("Fetching all species in the park")
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
            post_animal = """INSERT INTO Species (species_id,name,age,description,gender,category)
            VALUES ( %s, %s, %s, %s, %s, %s )"""
            data = (
                body['species_id'], body['name'], body['age'], body['description'], body['gender'], body['category'])
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(post_animal, data)
            current_app.logger.info("Inserting species %s", body['name'])
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
            delete_species = """DELETE FROM Species where species_id = %s"""
            data = (request.args.get('species_id'),)
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(delete_species, data)
            current_app.logger.info("Delete species %s", request.args.get('species_id'))
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
            update_employee = """UPDATE Species set species_id = %s,name = %s,age= %s, description= %s,gender= %s,
            category = %s WHERE species_id = %s"""
            data = (
                body['species_id'], body['name'], body['age'], body['description'], body['gender'], body['category'],body['species_id'])
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(update_employee, data)
            current_app.logger.info("Update species %s", body['name'])
            conn.commit()
            return make_response("true", 200)
        except Exception as e:
            current_app.logger.error(e)
            return make_response("false", 500)
        finally:
            cursor.close()
            conn.close()
