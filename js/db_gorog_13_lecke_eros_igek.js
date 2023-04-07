const db_gorog_13_lecke_eros_igek =
{
    cim: "Görög - 13. lecke - erős igék",
    rajzolo: function(elem)
    {
        return(gorog_szokikerdezo(
        {
            "gorog"  : elem.praes_ipf + ", " + elem.futurum + ", " + elem.aorisztosz,
            "magyar" : elem.jelentes
        }));
    },
    elemek:
    [
        {"praes_ipf": "ἀγαπάω",         "futurum": "ἀγαπήσω",             "aorisztosz": "ἠγάπησα",              "jelentes": "szeret"},
        {"praes_ipf": "ἀγγέλλω",        "futurum": "ἀγγέλω",              "aorisztosz": "ἤγγειλα",              "jelentes": "hirdet"},
        {"praes_ipf": "ἁγιάζω",         "futurum": "ἁγιάσω",              "aorisztosz": "ἡγίασα",               "jelentes": "megszentel"},
        {"praes_ipf": "ἄγω",            "futurum": "ἄξω",                 "aorisztosz": "ἤγᾶον",                "jelentes": "vezet"},
        {"praes_ipf": "αἱρεω",          "futurum": "αἱρήσω",              "aorisztosz": "εἷλον",                "jelentes": "vesz, fog"},
        {"praes_ipf": "αἴρω",           "futurum": "ἀρῶ",                 "aorisztosz": "ἦρα",                  "jelentes": "emel"},
        {"praes_ipf": "ἀκούω",          "futurum": "ἀκούσω",              "aorisztosz": "ἤκουσα",               "jelentes": "hall"},
        {"praes_ipf": "ἁμαρτάνω",       "futurum": "ἁμαρτήσω",            "aorisztosz": "ἡμάρτησα, ὴμαρτον",    "jelentes": "vétkezik"},
        {"praes_ipf": "βαίνω",          "futurum": "βήσομαι",             "aorisztosz": "ἔβην",                 "jelentes": "megy"},
        {"praes_ipf": "βάλλω",          "futurum": "βαλῶ",                "aorisztosz": "ἔβαλον",               "jelentes": "dob, vet"},
        {"praes_ipf": "βούλομαι",       "futurum": "βούλησομαι",          "aorisztosz": "ἐβουλήθην",            "jelentes": "akar"},
        {"praes_ipf": "γίνομαι",        "futurum": "γενήσομαι",           "aorisztosz": "ἐγενόμην",             "jelentes": "válik, lesz vmivé"},
        {"praes_ipf": "γινώσκω",        "futurum": "γνώσομαι",            "aorisztosz": "ἔγνων",                "jelentes": "tud, ismer"},
        {"praes_ipf": "γράφω",          "futurum": "γράψω",               "aorisztosz": "ἔγραψα",               "jelentes": "ír"},
        {"praes_ipf": "δείκνυμι",       "futurum": "δείξω",               "aorisztosz": "ἔδείξα",               "jelentes": "mutat"},
        {"praes_ipf": "δέχομαι",        "futurum": "δέξομαι",             "aorisztosz": "ἐδεξάμην",             "jelentes": "(be)fogad"},
        {"praes_ipf": "διδάσκω",        "futurum": "διδάξω",              "aorisztosz": "ἐδίδαξα",              "jelentes": "tanít"},
        {"praes_ipf": "δίδωμι",         "futurum": "δώσω",                "aorisztosz": "ἔδωκα",                "jelentes": "ad"},
        {"praes_ipf": "ἐγείρω",         "futurum": "ἐγερω",               "aorisztosz": "ἤγειρα",               "jelentes": "ébreszt, felkel"},
        {"praes_ipf": "ἐλπίζω",         "futurum": "ἐλπισω",              "aorisztosz": "ἤλπισα",               "jelentes": "remél"},
        {"praes_ipf": "ἔρχομαι",        "futurum": "ἐλεύσομαι",           "aorisztosz": "ἦλθον",                "jelentes": "jön, megy"},
        {"praes_ipf": "ἐσθίω",          "futurum": "φάγομαι",             "aorisztosz": "ἔφᾶον",                "jelentes": "eszik"},
        {"praes_ipf": "ἔχω",            "futurum": "ἔξω",                 "aorisztosz": "ἔσχον",                "jelentes": "van neki, birtokol"},
        {"praes_ipf": "εὑρίσκω",        "futurum": "εὑρήσω",              "aorisztosz": "εὗρον",                "jelentes": "talál"},
        {"praes_ipf": "ζάω",            "futurum": "ζήσω",                "aorisztosz": "ἔζησα",                "jelentes": "él"},
        {"praes_ipf": "θέλω",           "futurum": "θελήσω",              "aorisztosz": "ἐθέλησα",              "jelentes": "akar"},
        {"praes_ipf": "(ἀπο) θνήσκω",   "futurum": "ἀποθανοῦμαι",         "aorisztosz": "ἀπέθανον  ",           "jelentes": "meghal"},
        {"praes_ipf": "ἵστημι",         "futurum": "στήσω",               "aorisztosz": "ἔστησα / ἔστην",       "jelentes": "állít / áll, megáll"},
        {"praes_ipf": "κλαίω",          "futurum": "κλαύσω",              "aorisztosz": "ἔκλαυσα",              "jelentes": "sír"},
        {"praes_ipf": "κόπτω",          "futurum": "κόψω",                "aorisztosz": "ἔκοψα",                "jelentes": "üt, vág"},
        {"praes_ipf": "κρίνω",          "futurum": "κρινῶ",               "aorisztosz": "ἔκρινα",               "jelentes": "dönt, ítél"},
        {"praes_ipf": "κρύπτω",         "futurum": "κρύψω",               "aorisztosz": "ἔκρυψα",               "jelentes": "elrejt"},
        {"praes_ipf": "λαμβάνω",        "futurum": "λήμψομαι / λήψομαι",  "aorisztosz": "ἔλαβον  ",             "jelentes": "vesz, (meg)kap, fog"},
        {"praes_ipf": "λέγω",           "futurum": "ἐρω",                 "aorisztosz": "εἶπον",                "jelentes": "mond"},
        {"praes_ipf": "λείπω",          "futurum": "λείψω",               "aorisztosz": "ἔλιπον, ἔλειψα",       "jelentes": "(el)hagy"},
        {"praes_ipf": "μανθάνω",        "futurum": "μαθήσομαι",           "aorisztosz": "ἔμαθον",               "jelentes": "tanul"},
        {"praes_ipf": "μένω",           "futurum": "μενω",                "aorisztosz": "ἔμεινα",               "jelentes": "marad"},
        {"praes_ipf": "ὁράω",           "futurum": "ὄψομαι",              "aorisztosz": "εἶδον",                "jelentes": "lát, tud"},
        {"praes_ipf": "ὀφείλω",         "futurum": "ὀφειλήσω",            "aorisztosz": "ὠφείλησα",             "jelentes": "tartozik"},
        {"praes_ipf": "πάσχω",          "futurum": "πείσομαι",            "aorisztosz": "ἔπαθον",               "jelentes": "szenved"},
        {"praes_ipf": "πείθω",          "futurum": "πείσω",               "aorisztosz": "ἔπεισα",               "jelentes": "rávesz, meggyőz"},
        {"praes_ipf": "πίνω",           "futurum": "πίομαι",              "aorisztosz": "ἔπιον",                "jelentes": "iszik"},
        {"praes_ipf": "πίπτω",          "futurum": "πεσοῦμαι",            "aorisztosz": "ἔπεσον",               "jelentes": "esik"},
        {"praes_ipf": "σπείρω",         "futurum": "σπερω",               "aorisztosz": "ἔσπειρα",              "jelentes": "szór, vet"},
        {"praes_ipf": "στέλλω",         "futurum": "στελῶ",               "aorisztosz": "ἔστειλα",              "jelentes": "(el)küld, állít"},
        {"praes_ipf": "τίθημι",         "futurum": "θήσω",                "aorisztosz": "ἔθηκα",                "jelentes": "tesz, helyez"},
        {"praes_ipf": "τίκτω",          "futurum": "τέξομαι",             "aorisztosz": "ἔτεκον",               "jelentes": "szül"},
        {"praes_ipf": "φαίνω",          "futurum": "φανῶ",                "aorisztosz": "ἔφηνα  ",              "jelentes": "mutat"},
        {"praes_ipf": "φέρω",           "futurum": "οἴσω",                "aorisztosz": "ἤνεγκον",              "jelentes": "visz, hoz"},
        {"praes_ipf": "φεύγω",          "futurum": "φεύξομαι",            "aorisztosz": "ἔφῦον  ",              "jelentes": "fut, menekül"},
        {"praes_ipf": "χαίρω",          "futurum": "χαιρήσω",             "aorisztosz": "ἐχαρήσα / ἐχάρην",     "jelentes": "örül"},
    ]
};