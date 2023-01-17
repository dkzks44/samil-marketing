from flask import Flask, render_template, request
from crawling.crawling import crawlSet, title


application = Flask(__name__)

@application.route('/')
def home():
    return render_template('index.html')

@application.route('/result')
def search():
    keyword = request.args.get("keyword")
    data = []
    getting = crawlSet(data, keyword)
    return render_template('result.html', keyword=keyword, getting=getting, title=title)


@application.route('/login')
def login():
    return render_template('login.html')

if __name__ == '__main__':
    application.run("0.0.0.0", port=5000, debug=True)