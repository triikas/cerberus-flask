from flask import Flask, request, render_template
from flask_mobility import Mobility
from flask_mobility.decorators import mobile_template

app = Flask(__name__)
Mobility(app)

@app.route('/', methods=['post', 'get'])
@mobile_template('home{-mobile}.html')
def home(template):
    # if request.method == 'POST':
    #     msg = Message("Запрос с skyparts.ru", recipients=mails)
    #     name = request.form.get('name')
    #     email = request.form.get('email')
    #     number = request.form.get('number')
    #     comment = request.form.get('comment')
    #     msg.body = "Имя:     {}\nПочта:   {}\nТелефон: {}\n\nКомментарий:\n\n{}".format(name, email, number, comment)
    #     if name is not None:
    #         mail.send(msg)

    return render_template(template)


if __name__ == '__main__':
    app.run()
