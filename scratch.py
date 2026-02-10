from flask import Flask, render_tamplate, request
app = Flask(__name__)
@app.route("/", methods=["GET", "POST"])
def cbc():
    diagnosis = " "
    if request.method == "POST":
        hb = float(request.form.get("hb", 0))
        rbc = float(request.form.get("rbc", 0))
        wbc = float(request.form.get("wbc", 0))
    if hb < 12 and rbc < 4.0:
        diagnosis = "pattern suggests anemia."
    elif wbc > 11:
        diagnosis = "pattern suggests infection presence"
    else:
        diagnosis = "Values are within normal limits"
    return render_template("index.html", diagnosis=diagnosis)
if __name__ == "__main__":
    app.run(debug=True)
