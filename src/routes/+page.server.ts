const puns = [
    "Arroganz ist so groß, dass selbst ihre Schatten einen Rückzieher machen.",
    "Arroganz ist wie ein boomerang - egal wie weit sie ihn wirft, er kommt immer zurück.",
    "Arroganz ist so hoch, dass selbst ihre Selbstzweifel eitel sind.",
    "Arroganz ist wie ein Luftballon - aufgeblasen und bereit, jeden Moment zu platzen.",
    "Arroganz ist so offensichtlich, dass sie eine eigene Eintrittskarte zur Überheblichkeit verdient hat.",
    "Arroganz ist wie ein peinlicher Tanz - alle schauen zu, aber keiner will mitmachen.",
    "Arroganz ist so dick, dass selbst ihr Ego gelegentlich darum bettelt, Platz zu machen.",
    "Arroganz ist wie ein schlechtes Parfüm - überall, wo sie auftaucht, hinterlässt sie einen unangenehmen Nachgeschmack.",
    "Arroganz ist so offensichtlich, dass sogar Spiegel sich weigern, ihr Spiegelbild zurückzugeben.",
    "Arroganz ist wie eine unaufhaltsame Lawine - selbst wenn sie versucht, sie zu verbergen, rollt sie unaufhaltsam voran.",
    "Arroganz ist so hartnäckig, dass selbst ein Schlag ins Gesicht sie nicht erschüttern würde.",
    "Arroganz ist wie ein schwarzes Loch - es verschlingt jedes Kompliment und spuckt nur noch mehr Überheblichkeit aus.",
    "Arroganz ist so groß, dass sie die Gravitation um sie herum zu beeinflussen scheint.",
    "Arroganz ist wie ein schlecht abgestimmtes Klavier - selbst wenn sie versucht, leise zu sein, hört man sie noch in der ganzen Stadt.",
    "Arroganz ist so strahlend, dass selbst die Sonne manchmal neidisch wird.",
    "Arroganz ist wie ein gestrandeter Wal - riesig, unbequem und niemand weiß wirklich, wie er dorthin gekommen ist.",
    "Arroganz ist so groß, dass selbst der Himmel manchmal nach unten schaut und seufzt.",
    "Arroganz ist wie ein schlecht gemachtes Tattoo - einmal da, immer peinlich.",
    "Arroganz ist so offensichtlich, dass selbst Hunde ihren Geruchssinn beleidigt finden.",
    "Arroganz ist wie ein verschlossenes Buch - man muss es nicht öffnen, um zu wissen, dass es leer ist.",
    "Arroganz ist so hartnäckig, dass selbst Unkrautvernichter sie nicht besiegen können.",
    "Arroganz ist wie ein Sturm im Wasserglas - viel Lärm, aber letztendlich bedeutungslos.",
    "Arroganz ist so groß, dass selbst ihr Schatten manchmal denkt, er sei zu viel.",
    "Arroganz ist wie ein unsichtbarer Rucksack - sie trägt ihn überallhin, ohne es zu merken, aber alle anderen spüren das Gewicht.",
    "Arroganz ist so groß, dass selbst ihre Träume manchmal denken, sie wären zu hochfliegend.",
    "Arroganz ist wie eine verlorene Fernbedienung - selbst wenn sie versucht, sie zu finden, ändert sich nichts an ihrem Programm.",
    "Arroganz ist so hartnäckig, dass selbst ein Uhrmacher sie nicht justieren könnte.",
    "Arroganz ist wie ein schlechtes Haustier - sie liebt es, sie zu zeigen, aber niemand sonst mag sie wirklich.",
    "Arroganz ist so groß, dass selbst ihr Schicksal manchmal den Kopf schüttelt.",
    "Arroganz ist wie ein schlechter Witz - nur sie lacht darüber, während alle anderen die Augen verdrehen.",
    "Arroganz ist so hartnäckig, dass selbst ein Elefant sie nicht vergessen könnte.",
    "Arroganz ist wie eine unsichtbare Krone - sie trägt sie, aber keiner sieht den Glanz."
];

export function load({ request }) {
    const host =
        request.headers.get("x-forwarded-host") ?? request.headers.get("Host") ?? "arroganz.net";
    let name = host.split(".").reverse().at(2);
    if (!name) {
        name = "Deine";
    } else if (name.endsWith("s")) {
        name = `${name.substring(0, name.length - 1)}'s`;
    } else {
        name = `${name}'s`;
    }
    name = name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();

    return {
        name,
        pun: `${name} ${puns[Math.floor(Math.random() * puns.length)]}`,
        host,
        headers: request.headers
    };
}
