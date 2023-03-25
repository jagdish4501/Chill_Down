import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle
import joblib


app = Flask(__name__)
# model = pickle.load(open('logistic_regression_model.pkl', 'rb'))
model = joblib.load('logistic_regression_model.pkl')


@app.route('/')
def home():
    return "home page"


@app.route('/predict', methods=['POST'])
def predict():
    '''
    For rendering results on HTML GUI
    '''
    # data = request.get_json()
    int_features = [int(x) for x in request.form.values()]
    # int_features = list(data.values())
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)

    output = round(prediction[0], 2)

    return render_template('index.html', prediction_text='Employee Salary should be $ {}'.format(output))
    # return format(output)


@app.route('/predict_api', methods=['POST'])
def predict_api():
    '''
    For direct API calls trought request
    '''
    data = request.get_json(force=True)
    data = list(data.values())
    # data = [0.75040883, - 0.37605948, 0.18312062, - 0.18461725, - 0.46486849, - 1.45120116,
    #         1.23743461, 1.20112441, - 0.67369125, - 0.5018661, 1.48881391, - 0.54351819,
    #         - 0.87844583, 0.5691689, - 0.72237272, 0.61069738, - 0.23455488, - 0.85546276,
    #         - 0.40610888, - 0.79150273, - 0.49099878]
    demo = np.array(data).reshape(1, -1)
    # print(demo)
    prediction = model.predict(demo)
    prediction_list = prediction.tolist()
    print(prediction)
    # Return the prediction as a JSON response
    return jsonify({'prediction': prediction_list})
    # return "hiiiii"


if __name__ == "__main__":
    app.run(debug=True)
