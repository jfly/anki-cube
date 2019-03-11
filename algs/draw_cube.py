import os
import os.path

import requests

def svg(alg):
    alg = alg.replace(" ", "")

    params = {
        "fmt": "svg",
        "size": "200",
        "alg": alg,
        "bg": "t",
    }
    url = f"http://cube.crider.co.uk/visualcube.php"
    r = requests.get(url, params=params)

    return r.content
