import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle
import joblib


app = Flask(__name__)
# model = pickle.load(open('logistic_regression_model.pkl', 'rb'))
model = joblib.load('ML_Model/svm_model.pkl')


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
    mn = [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1]
    dif = [5, 10, 10, 10, 10, 10, 5, 1, 10,
           10, 9, 10, 9, 10, 10, 1, 10, 10, 10, 1]

    bare_min = [2, 2, 3, 3, 4, 2, 1, 1, 4, 1, 3, 1, 6, 0, 1, 1, 3, 1, 4, 0]
    res_idx = []

    for idx in range(20):
        if data[idx]-bare_min[idx] < 0:
            res_idx.append(idx)
    print(res_idx)
    for idx in range(20):
        data[idx] = (data[idx]-mn[idx])/dif[idx]
    # data = [0.75040883, - 0.37605948, 0.18312062, - 0.18461725, - 0.46486849, - 1.45120116,
    #         1.23743461, 1.20112441, - 0.67369125, - 0.5018661, 1.48881391, - 0.54351819,
    #         - 0.87844583, 0.5691689, - 0.72237272, 0.61069738, - 0.23455488, - 0.85546276,
    #         - 0.40610888, - 0.49099878]
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
