from flask import Flask, render_template
from markupsafe import escape

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/hello')
def hello():
    return 'Hello'

@app.route('/user/<name>')
def show_prof(name):
    return 'User %s' % escape(name)

if __name__ == '__main__':
    app.run(debug=True)