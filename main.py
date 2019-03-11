import genanki

from algs.onelook_deck import onelook_deck as deck

package = genanki.Package(deck)
outfile = 'onelookdeck.apkg'
package.write_to_file(outfile)
print(f"Successfully generated {outfile}!")
