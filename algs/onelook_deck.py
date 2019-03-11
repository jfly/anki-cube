import genanki

from .alg_model import alg_model

onelook_deck = genanki.Deck(
    deck_id=2004085225,  # generated using random.randrange(1 << 30, 1 << 31)
    name='One-look PLL',
)

note = genanki.Note(
    model=alg_model,
    fields=['Capital of Argentina', 'Buenos Aires'],
)
onelook_deck.add_note(note)
