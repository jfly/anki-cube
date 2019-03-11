import genanki

alg_model = genanki.Model(
    model_id=1956748246,  # generated using random.randrange(1 << 30, 1 << 31)
    name="Speedcubing alg model",
    fields=[
        {'name': 'Question'},
        {'name': 'Answer'},
    ],
    templates=[
        {
            'name': 'Card 1',
            'qfmt': '{{Question}}',
            'afmt': '{{FrontSide}}<hr id="answer">{{Answer}}',
        }
    ],
)
