import os

import genanki

from algs import onelook_deck

os.makedirs("out", exist_ok=True)
os.chdir("out")

deck, media_by_name = onelook_deck.generate()

package = genanki.Package(deck)
outfile = 'onelookdeck.apkg'
package.media_files = []
for name, contents in media_by_name.items():
    with open(name, "wb") as f:
        f.write(contents)
    package.media_files.append(name)
package.write_to_file(outfile)
print(f"Successfully generated {outfile}!")
