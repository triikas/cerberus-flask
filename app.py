from flask import Flask, request, render_template
from flask_mobility import Mobility
from flask_mobility.decorators import mobile_template

app = Flask(__name__)
Mobility(app)

@app.route('/', methods=['post', 'get'])
@mobile_template('home{-mobile}.html')
def home(template):
    return render_template(template)


if __name__ == '__main__':
    app.run()
