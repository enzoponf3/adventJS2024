
function fixPackages(packages) {
    const pattern = /\([^()]*\)/;

    do {
        packages = packages.replace(pattern,
            (match) => [...match.slice(1, -1)].reverse().join('')
        );
    } while (pattern.test(packages))

    return packages;
}

let war = 'a(bc(def)g)h'

fixPackages(war)
