import genanki

from . import draw_cube
from .alg_model import alg_model

AUFs = ["", "U", "U'", "U2"]
PLL_BY_NAME = {  # Thanks to http://www.cyotheking.com/pll
    "Ub": "R2 U R U R' U' R' U' R' U R'",
    "Ua": "R U' R U R U R U' R' U' R2",
    "H": "M2 U M2 U2 M2 U M2",
    "Z": "M2 U M2 U M' U2 M2 U2 M'",
    "Aa": "x R' U R' D2 R U' R' D2 R2 x'",
    "Ab": "x' R U' R D2 R' U R D2 R2 x",
    "F": "R' U2 R' U' y R' F' R2 U' R'  U R' F R U' F y'",
    "T": "R U R' U' R' F R2 U' R' U' R U R' F'",
    "Ga": "R2 U R' U R' U' R U' R2 D U' R' U R D'",
    "Gb": "R' U' R U D' R2 U R' U R U' R U' R2 D",
    "Gc": "U2 R2 F2 R U2 R U2 R' F R U R' U' R' F R2",
    "Gd": "R U R' U' D R2 U' R U' R' U R' U R2 D'",
    "Ra": "R U' R' U' R U R D R' U' R D' R' U2 R'",
    "Rb": "R' U2 R U2 R' F R U R' U' R' F' R2 U'",
    "Ja": "R' U L' U2 R U' R' U2 R L",
    "Jb": "R U R' F' R U R' U' R' F R2 U' R'",
    "Y": "F R U' R' U' R U R' F' R U R' F' U' F R U' R'",
    "E": "x' R U' R' D R U R' D' R U R' D R U' R' D' x",
    "V": "R' U R' U' y R' F' R2 U' R' U R' F R F y'",
    "Nb": "z U' R D' R2 U R' D U' R D' R2 U R' D z'",
    "Na": "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'",
}

def pll_to_notes(name, alg):
    notes = []
    media_by_name = {}
    for pre in AUFs:
        for post in AUFs:
            modified_alg = pre + " " + alg + " " + post
            media_name = modified_alg.replace(" ", "") + ".svg"
            media_by_name[media_name] = draw_cube.svg(modified_alg)
            notes.append(genanki.Note(
                model=alg_model,
                fields=[
                    f'<img src="{media_name}">',
                    name,
                ],
            ))

    return notes, media_by_name

def generate():
    deck = genanki.Deck(
        deck_id=2004085225,  # generated using random.randrange(1 << 30, 1 << 31)
        name='One-look PLL',
    )
    media_by_name = {}

    for name, pll in PLL_BY_NAME.items():
        new_notes, new_media_by_name = pll_to_notes(name, pll)
        for note in new_notes:
            deck.add_note(note)
        media_by_name.update(new_media_by_name)

    return deck, media_by_name
