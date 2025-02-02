from flask import Flask, render_template
from markupsafe import escape



app = Flask(__name__)

def make_bold(function):
    def wrapper():
        return f'<b>{function()}</b> 123'

    return wrapper

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/hello')
@make_bold
def hello():
    return 'Hello'

@app.route('/user/<name>')
def show_prof(name):
    return 'User %s' % escape(name)

if __name__ == '__main__':
    app.run(debug=True)